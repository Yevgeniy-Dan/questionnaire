import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SortedQuestionsPipe } from './questions/sorted-questions.pipe';
import { QuestionService } from './questions/question.service';

@NgModule({
  declarations: [SortedQuestionsPipe],
  providers: [QuestionService],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, SortedQuestionsPipe],
})
export class SharedModule {}
