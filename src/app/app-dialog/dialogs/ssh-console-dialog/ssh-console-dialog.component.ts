import {Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DialogRef} from '../../model/dialogRef';
import {DIALOG_DATA} from '../../services/dialog.service';
import {AttachAddon} from 'xterm-addon-attach';
import {FitAddon} from 'xterm-addon-fit';
import {Terminal} from 'xterm';
import {ToastService} from '../../services/toast.service';
import {IpAddress, LoginCredential} from 'cloudiator-rest-api';
import {SshService} from '../../../services/ssh.service';
import {take} from 'rxjs/operators';
import {ToastType} from '../../model/toast';

@Component({
  selector: 'app-ssh-console-dialog',
  templateUrl: './ssh-console-dialog.component.html',
  styleUrls: ['./ssh-console-dialog.component.scss']
})
export class SshConsoleDialogComponent implements OnInit, OnDestroy {

  @ViewChild('terminal', {static: true}) terminal: ElementRef;

  private socket: WebSocket;

  private fitAddon = new FitAddon();

  constructor(public dialogRef: DialogRef,
              @Inject(DIALOG_DATA) public data: { name: string, ipAddress: IpAddress, loginCredential: LoginCredential },
              private sshService: SshService,
              private toastService: ToastService) {
  }

  ngOnInit() {
    // check if needed values exist
    if (!this.data.ipAddress || !this.data.loginCredential) {
      this.toastService.show({text: 'Could not connect to Virtual Machine', type: ToastType.DANGER});
    } else {
      this.sshService.connectTo(this.data.ipAddress, this.data.loginCredential)
        .pipe(take(1))
        .subscribe(socket => {
          this.socket = socket;

          this.socket.onclose = ev => {
            console.log(ev);
            switch (ev.code) {
              case 4001:
                term.writeln('Authentication Error');
                break;
              case 4002:
                term.writeln('Machine closed connection');
                break;
              case 4003:
                term.writeln(ev.reason);
                break;
              case 4005:
                term.writeln('SSH Tunnel Error');
                break;
              default:
                term.writeln('Connection closed');
            }
          };

          const attachAddon = new AttachAddon(this.socket);

          const term = new Terminal();
          term.loadAddon(attachAddon);
          term.loadAddon(this.fitAddon);

          term.open(this.terminal.nativeElement);

          this.fitAddon.fit();
        });
    }
  }

  ngOnDestroy(): void {
    if (this.socket && this.socket.readyState !== WebSocket.CLOSED) {
      this.socket.close();
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onResize() {
    this.fitAddon.fit();
  }

}
