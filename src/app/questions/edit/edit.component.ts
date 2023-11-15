import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { IAppState } from 'src/app/state/app.state';
import { selectQuestionById } from 'src/app/state/questions';
import { IQuestion } from '../shared/questions/question.model';
import { UnsubscriberService } from 'src/app/services/unsubscriber.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

/**
 * Component for Editing Questions
 */
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  announcer: LiveAnnouncer = inject(LiveAnnouncer);

  editQuestion$: Observable<IQuestion | undefined> = this.store.select(
    selectQuestionById(this.route.snapshot.queryParams['id'])
  );

  questionTypes: string[] = ['single', 'multiple', 'open'];

  editForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    questionType: ['', [Validators.required]],
    answerOptions: this.fb.array([]),
  });

  get answerOptions(): FormArray {
    return this.editForm.get('answerOptions') as FormArray;
  }

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private readonly unsubscriber: UnsubscriberService
  ) {}

  ngOnInit(): void {
    this.editQuestion$
      .pipe(this.unsubscriber.takeUntilDestroy)
      .subscribe((question) => {
        // Populate form with question data
        this.editForm.patchValue({
          title: question?.text,
          questionType: question?.type,
        });

        // Add answer options to the form
        question?.answer_options.forEach((option) => {
          this.answerOptions.push(this.fb.control(option));
        });
      });
  }

  /**
   * Method to add a new answer option to the answer options
   * @param event - The MatChipInput event containing the input value
   */
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.answerOptions.push(this.fb.control(value));
    }

    event.chipInput!.clear();
  }

  /**
   * Method to remove an answer option from the answer options
   * @param id - The index of the answer option to be removed
   */
  remove(id: number): void {
    this.answerOptions.removeAt(id);

    this.announcer.announce(`Removed ${id}`);
  }

  /**
   * Method to edit an answer option in the answer options
   * @param id - The index of the answer option to be edited
   * @param event - The MatChipEditedEvent containing the edited value
   */
  edit(id: number, event: MatChipEditedEvent): void {
    const value = event.value.trim();
    if (!value) {
      this.remove(id);
      return;
    }

    const optionControl = this.answerOptions.at(id) as FormControl;
    optionControl.setValue(value);
  }
}
