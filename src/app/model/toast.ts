export enum ToastType {
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export interface Toast {
  text: string;
  type: ToastType;
}
