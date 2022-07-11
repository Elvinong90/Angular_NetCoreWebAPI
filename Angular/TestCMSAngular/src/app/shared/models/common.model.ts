import { FormAction } from '../enum/common.enum';

export interface GenericObject {
  status: boolean;
  message: string;
}

export interface DialogPassData {
  content?: any;
  formaction: FormAction;
}
