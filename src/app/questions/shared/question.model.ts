export interface Question {
  text: string;
  type: 'single' | 'multiple' | 'open';
  date: Date;
}
