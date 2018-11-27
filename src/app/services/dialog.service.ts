import {Injectable, InjectionToken, Injector} from '@angular/core';
import {ComponentType, Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {DialogRef} from '../model/dialogRef';

/**
 * Describes the Dialog Configurations that are accessible from outside
 */
interface DialogConfig {
  /**
   * Data passed to the Dialog
   */
  data?: any;
}

/**
 * default configurations for Dialogs
 * @type {DialogConfig}
 */
const DEFAULT_CONFIG = <DialogConfig> {
  data: {}
};

export const DIALOG_DATA = new InjectionToken<any>('DIALOG_DATA');

/**
 * Service to open modal Dialogs
 */
@Injectable()
export class DialogService {

  /**
   * @ignore
   */
  constructor(
    private injector: Injector,
    private overlay: Overlay) {
  }

  /**
   * Opens a modal dialog containing the given component.
   * R defines the return type of DialogRef.afterClosed()
   * @param {ComponentType} component Type of the component to load into the dialog,
   *     or a TemplateRef to instantiate as the dialog content.
   * @param {DialogConfig} config Extra configuration options.
   * @returns Reference to the newly-opened dialog.
   */
  open<R = any>(component: ComponentType<any>, config: DialogConfig = {}): DialogRef {

    const dialogConfig = {...DEFAULT_CONFIG, ...config};

    const dialog = this._createDialog(dialogConfig);

    const dialogRef = new DialogRef<R>(dialog);

    this._attachDialogContainer(component, dialog, dialogConfig, dialogRef);

    return dialogRef;
  }

  /**
   * Creates a new Overlay with the given Configuration
   * @param {DialogConfig} config
   * @returns {OverlayRef} newly generated Overlay
   * @private
   */
  private _createDialog(config: DialogConfig): OverlayRef {

    const dialogConfig = this._getOverlayConfig(config);

    return this.overlay.create(dialogConfig);
  }

  /**
   * Creates the actual Configuration vor a Dialog.
   * @param {DialogConfig} config custom Configuration
   * @returns {OverlayConfig} actual Configuration
   * @private
   */
  private _getOverlayConfig(config: DialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    return new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });
  }

  /**
   * Creates DialogRef and DIALOG_DATA Injectors to make these Fields accessible from inside the Dialog
   * @param {DialogConfig} config of the the Dialog
   * @param {DialogRef} dialogRef of the Dialog
   * @returns {PortalInjector} PortalInjector containing the new Injectors
   * @private
   */
  private _createInjector(config: DialogConfig, dialogRef: DialogRef): PortalInjector {

    const injectionTokens = new WeakMap();

    injectionTokens.set(DialogRef, dialogRef);
    injectionTokens.set(DIALOG_DATA, config.data);

    return new PortalInjector(this.injector, injectionTokens);
  }

  /**
   * Attaches the Given Component to the new DialogOverlay
   * @param {ComponentType} component Component to be attached
   * @param {OverlayRef} dialog DialogOverlay that is to be attached to
   * @param {DialogConfig} config Configuration for dialog
   * @param {DialogRef} dialogRef Reference to the Dialog, needed for Injectors
   * @private
   */
  private _attachDialogContainer(component: ComponentType<any>, dialog: OverlayRef, config: DialogConfig, dialogRef: DialogRef) {
    const injector = this._createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(component, null, injector);
    dialog.attach(containerPortal);
  }
}
