/**
 * Possible types of Toasts, mapped to ther matching css color attributes
 */
export enum ToastType {
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

/**
 * Properties of a toast.
 */
export interface Toast {
  /**
   * Message of the Toast.
   */
  text: string;

  /**
   * Type of the Toast.
   */
  type: ToastType;
}
