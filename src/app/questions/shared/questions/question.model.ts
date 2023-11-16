export interface IQuestion {
  id: string;
  text: string;
  type: 'single' | 'multiple' | 'open';
  answer_options?: string[];
  date: string;
}
