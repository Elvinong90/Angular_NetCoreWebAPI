import { FormAction } from '../enum/common.enum';

export interface StatusObject {
  status: boolean;
  message: string;
}

export interface DialogPassData {
  content?: any;
  formaction: FormAction;
}
