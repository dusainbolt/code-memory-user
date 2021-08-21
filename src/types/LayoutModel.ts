export enum TypeNotify {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export interface NotifySystem {
  messageNotify?: string;
  typeNotify: TypeNotify;
  createTime?: number;
}

export type ErrorSaga = {
  message?: any;
};

export interface LayoutSlice {
  notify?: NotifySystem;
}
