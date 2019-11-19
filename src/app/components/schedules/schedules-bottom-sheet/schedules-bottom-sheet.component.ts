import {Component, Input, OnInit} from '@angular/core';
import {animate, animateChild, group, query, state, style, transition, trigger} from '@angular/animations';
import {CloudiatorProcess, ClusterProcess, IpAddress, IpAddressType, LoginCredential, Node, SingleProcess} from 'cloudiator-rest-api';
import {DialogService} from '../../../app-dialog/services/dialog.service';
import {ScheduleDiagnosticDialogComponent, SshConsoleDialogComponent} from '../../../app-dialog/dialogs';
import {NodeDataService} from '../../../services/node-data.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {SshService} from '../../../services/ssh.service';

/**
 * Bottomsheet component of the ScheduleView.
 */
@Component({
  selector: 'app-schedules-bottom-sheet',
  animations: [
    trigger('sheetOpenClose', [
      state('closed', style(
        {
          transform: 'translateY(16.5em)',
          backgroundColor: '#92acbe',
          color: 'white'
        })),
      state('open', style(
        {
          transform: '*',
          backgroundColor: '*',
          color: '*'
        })),
      state('hidden', style(
        {
          transform: 'translateY(20em)',
          backgroundColor: '#92acbe',
          color: 'white'
        })),
      transition('open => closed', [
        group([
          query('@buttonOpenClose', animateChild()),
          query('@headerOpenClose', animateChild()),
          animate('0.2s ease-out')])
      ]),
      transition('* => open', [
        group([
          query('@buttonOpenClose', animateChild()),
          query('@headerOpenClose', animateChild()),
          animate('0.25s ease-out')])
      ]),
      transition('open => hidden', [
        group([
          query('@buttonOpenClose', animateChild()),
          query('@headerOpenClose', animateChild()),
          animate('0.2s ease-out')])
      ])
    ]),
    trigger('buttonOpenClose', [
      state('closed, hidden', style(
        {
          transform: 'rotate(180deg)',
          color: 'white'
        })),
      state('open', style(
        {
          transform: 'rotate(0deg)',
          color: 'lightgray'
        })),
      transition('open => *', [animate('0.20s')]),
      transition('* => open', [animate('0.25s')])
    ]),
    trigger('headerOpenClose', [
      state('closed, hidden', style(
        {
          color: 'white'
        })),
      state('open', style(
        {
          color: 'black'
        })),
      transition('open => closed', [animate('0.20s')]),
      transition('open => hidden', [animate('0.20s')]),
      transition('* => open', [animate('0.25s')])
    ])
  ],
  templateUrl: './schedules-bottom-sheet.component.html',
  styleUrls: ['./schedules-bottom-sheet.component.scss']
})
export class SchedulesBottomSheetComponent implements OnInit {


  /** @ignore */
  _selected: Selected = null;
  /**
   * selected node/edge of graph
   * @type {null}
   * @private
   */
  get selected(): Selected {
    return this._selected;
  }

  /**
   * sets bottomsheet visibility when selected is changed.
   * @param {Selected} value
   */
  @Input() set selected(value: Selected) {
    this._selected = value;
    console.log(this._selected);
    // open/hide bottomsheet depending if something is selected
    if (value) {
      this.sheetOpenClose = 'open';

      if (value.process) {
        if (isSingleProcess(value.process)) {
          this.node$ = this.nodeDataService.getNode(value.process.node)
            .pipe(map(n => [n]), tap(console.log));
          // this.dialogService.open(SshConsoleDialogComponent, { data: node});
        } else {
          // TODO: Cluster process implementation
        }
      }
    } else {
      this.sheetOpenClose = 'hidden';
      this.node$ = null;
    }
  }

  /**
   * Node Object of the currently displayed Node.
   */
  public node$: Observable<Node[]>;

  /**
   * Wether the SSH Terminal feature is available and corresponding button can be shown.
   * @type {Observable<boolean>}
   */
  public sshIsAvailable$ = this.sshService.sshIsAvailable();

  /**
   * containes visibility state of bottom scheet
   * @type {string}
   */
  sheetOpenClose: 'open' | 'closed' | 'hidden' = this.selected ? 'open' : 'hidden';

  /** @ignore */
  constructor(private dialogService: DialogService,
              private nodeDataService: NodeDataService,
              private sshService: SshService) {
  }

  /** @ignore */
  ngOnInit() {
  }

  /**
   * Switches Open state of sheet.
   */
  switchOpenState() {
    this.sheetOpenClose = (this.sheetOpenClose === 'open') ? 'closed' : 'open';
  }

  /** @ignore */
  onSheetClick() {
  }

  /**
   * Opens Diagnostics Modal.
   */
  openDiagnostic() {
    this.dialogService.open(ScheduleDiagnosticDialogComponent, {data: this.selected.process});
  }

  /**
   * Checks whether the given ip has set its IpAdressType to Public
   * @param {IpAddress} ip Ip to be checked
   * @return {boolean} True if ip is public.
   */
  isPublicIp(ip: IpAddress) {
    return ip.ipAddressType === IpAddressType.PUBLICIP;
  }

  /**
   * Opens a new SSH Terminal modal.
   * @param {string} name Name of Node that is to be connected to.
   * @param {IpAddress} ip IP to connect to.
   * @param {LoginCredential} credentials Credentials needed to Authorize SSH connection.
   */
  onConnect(name: string, ip: IpAddress, credentials: LoginCredential) {
    this.dialogService.open(SshConsoleDialogComponent, {
      data: {
        name: name,
        ipAddress: ip,
        loginCredential: credentials
      }
    });
  }
}

/**
 * Interface describing selected Object.
 */
export interface Selected {
  /**
   * data of Object.
   */
  data: any;

  /**
   * process of the Node being shown.
   */
  process: CloudiatorProcess;

  /**
   * type of Object
   */
  group: 'nodes' | 'edges';
}

/**
 * Typechecks CloudiatorProcesses
 * @param {SingleProcess | ClusterProcess} process
 * @return {process is SingleProcess}
 */
export function isSingleProcess(process: SingleProcess | ClusterProcess): process is SingleProcess {
  return (<SingleProcess>process).node !== undefined;
}
