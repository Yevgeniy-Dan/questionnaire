import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const answerOptionsValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const answerOptions = control.get('answerOptions');
  const type = control.get('questionType');

  return answerOptions &&
    type &&
    type.value !== 'open' &&
    answerOptions.value.length < 2
    ? {
        notEnoughOptions: true,
      }
    : null;
};
