import { IQuestion } from './question.model';

export const questionDataInitialState: IQuestion[] = [
  {
    id: 'some id 1',
    text: 'What is the largest planet in our solar system?',
    type: 'single',
    answer_options: [
      'Mercury',
      'Venus',
      'Earth',
      'Mars',
      'Jupiter',
      'Saturn',
      'Uranus',
      'Neptune',
    ],
    date: '2023-11-23T00:00:00.000Z',
  },
  {
    id: 'some id 2',
    text: 'Name three famous inventors.',
    type: 'multiple',
    answer_options: [
      'Thomas Edison',
      'Alexander Graham Bell',
      'Marie Curie',
      'Galileo Galilei',
      'Nikola Tesla',
    ],
    date: '2023-11-24T00:00:00.000Z',
  },
  {
    id: 'some id 3',
    text: 'Discuss the impact of technology on society.',
    type: 'open',
    date: '2023-11-25T00:00:00.000Z',
  },
  {
    id: 'some id 4',
    text: 'Who wrote "Romeo and Juliet"?',
    type: 'single',
    answer_options: ['William Shakespeare'],
    date: '2023-11-26T00:00:00.000Z',
  },
  {
    id: 'some id 5',
    text: 'List the five senses of the human body.',
    type: 'multiple',
    answer_options: ['Sight', 'Hearing', 'Touch', 'Taste', 'Smell'],
    date: '2023-11-27T00:00:00.000Z',
  },
  {
    id: 'some id 6',
    text: 'Explain the laws of motion formulated by Isaac Newton.Explain the laws of motion formulated by Isaac Newton.',
    type: 'open',
    date: '2023-11-28T00:00:00.000Z',
  },
  {
    id: 'some id 7',
    text: 'What is the currency of Australia?',
    type: 'single',
    answer_options: ['Australian Dollar'],
    date: '2023-11-29T00:00:00.000Z',
  },
  {
    id: 'some id 8',
    text: 'Name the three branches of the U.S. government.',
    type: 'multiple',
    answer_options: ['Executive', 'Legislative', 'Judicial'],
    date: '2023-11-30T00:00:00.000Z',
  },
  {
    id: 'some id 9',
    text: 'Define the concept of supply and demand.',
    type: 'open',
    date: '2023-12-01T00:00:00.000Z',
  },
  {
    id: 'some id 10',
    text: 'Who discovered penicillin?',
    type: 'single',
    answer_options: ['Alexander Fleming'],
    date: '2023-12-02T00:00:00.000Z',
  },
  {
    id: 'some id 11',
    text: 'What is the capital of France?',
    type: 'single',
    answer_options: ['Paris'],
    date: '2023-11-13T00:00:00.000Z',
  },
  {
    id: 'some id 12',
    text: 'Which of the following are mammals?',
    type: 'multiple',
    answer_options: ['Dolphin', 'Elephant', 'Snake', 'Bat', 'Kangaroo'],
    date: '2023-11-14T00:00:00.000Z',
  },
  {
    id: 'some id 13',
    text: 'Explain the concept of global warming.',
    type: 'open',
    date: '2023-11-15T00:00:00.000Z',
  },
  {
    id: 'some id 14',
    text: 'Who is the author of "To Kill a Mockingbird"?',
    type: 'single',
    answer_options: ['Harper Lee'],
    date: '2023-11-16T00:00:00.000Z',
  },
  {
    id: 'some id 15',
    text: 'List three properties of acids.',
    type: 'open',
    date: '2023-11-17T00:00:00.000Z',
  },
  {
    id: 'some id 16',
    text: 'What is the capital of Japan?',
    type: 'single',
    answer_options: ['Tokyo'],
    date: '2023-11-18T00:00:00.000Z',
  },
  {
    id: 'some id 17',
    text: 'Which of the following are prime numbers?',
    type: 'multiple',
    answer_options: ['2', '3', '5', '7', '11', '13', '17', '19'],
    date: '2023-11-19T00:00:00.000Z',
  },
  {
    id: 'some id 18',
    text: 'Define the term "photosynthesis".',
    type: 'open',
    date: '2023-11-20T00:00:00.000Z',
  },
  {
    id: 'some id 19',
    text: 'Who painted the Mona Lisa?',
    type: 'single',
    answer_options: ['Leonardo da Vinci'],
    date: '2023-11-21T00:00:00.000Z',
  },
  {
    id: 'some id 20',
    text: 'List the major components of a cell.',
    type: 'open',
    date: '2023-11-22T00:00:00.000Z',
  },
];
