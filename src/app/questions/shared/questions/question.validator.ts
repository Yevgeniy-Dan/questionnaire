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

export const answerValidator =
  (type: 'single' | 'multiple' | 'open') =>
  (control: AbstractControl): ValidationErrors | null => {
    if (type === 'open') {
      const openAnswer = control.get('openAnswer');

      return openAnswer && openAnswer?.value.trim() === ''
        ? { required: true }
        : null;
    } else {
      const singleMultipleAnswer = control.get('singleMultipleAnswer');

      return singleMultipleAnswer && singleMultipleAnswer.value.length < 2
        ? { required: true }
        : null;
    }
  };
