export interface IQuestion {
  id: string;
  text: string;
  type: 'single' | 'multiple' | 'open';
  date: Date;
}
