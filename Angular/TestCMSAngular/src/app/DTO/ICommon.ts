import { FormAction } from '../Enum/EnumCommon';

export interface StatusObject {
  status: boolean;
  message: string;
}

export interface DialogPassData {
  content?: any;
  formaction: FormAction;
}
