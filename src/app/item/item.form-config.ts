import { Validators } from '@angular/forms';
import { FormsContract } from '../forms.contract';

export const ITEM_FORM_CONFIG = {
  [FormsContract.Item.TEXT]: [
    '', [
      Validators.required,
    ],
  ],
  [FormsContract.Item.IS_DONE]: [
    false, [
      Validators.required,
    ],
  ],
};
