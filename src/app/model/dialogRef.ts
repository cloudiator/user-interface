import {OverlayRef} from '@angular/cdk/overlay';
import {Observable, Subject} from 'rxjs';



/**
 * Represents the Reference to a Dialog
 */
export class DialogRef<R = any> {

  /**
   * Handles the Afterclosed State
   * @type {Subject<R | undefined>}
   * @private
   */
  private readonly _afterClosed = new Subject<R | undefined>();

  /**
   * @ignore
   */
  constructor(private overlayRef: OverlayRef) {
  }

  /**
   * Closes the referenced Dialog and passes te result to afterClosed
   * @param {R} result
   */
  close(result?: R): void {
    this.overlayRef.dispose();

    this._afterClosed.next(result);
  }

  /**
   * Returns an Observable of afterClosed
   * @returns {Observable<any>}
   */
  afterClosed(): Observable<any> {
    return this._afterClosed.asObservable();
  }
}
