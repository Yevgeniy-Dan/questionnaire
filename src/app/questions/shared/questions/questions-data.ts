import { IQuestion } from './interfaces/question.interface';

export const questionDataInitialState: IQuestion[] = [
  {
    id: 'some id 1',
    text: 'What is the largest planet in our solar system?',
    type: 'single',
    date: '2023-11-16T00:00:00.000Z',
    answer: {
      options: [
        {
          id: 'some-option-id-1',
          value: 'Mercury',
          isSelected: false,
        },
        { id: 'some-option-id-2', value: 'Venus', isSelected: false },
        { id: 'some-option-id-3', value: 'Earth', isSelected: false },
        { id: 'some-option-id-4', value: 'Mars', isSelected: false },
        { id: 'some-option-id-5', value: 'Jupiter', isSelected: true },
        { id: 'some-option-id-6', value: 'Saturn', isSelected: false },
        { id: 'some-option-id-7', value: 'Uranus', isSelected: false },
        { id: 'some-option-id-8', value: 'Neptune', isSelected: false },
      ],
      isAnswered: true,
      date: '2023-11-16T00:00:00.000Z',
    },
  },
  {
    id: 'some id 2',
    text: 'Name three famous inventors.',
    type: 'multiple',

    answer: {
      options: [
        { id: 'some-option-id-1', value: 'Thomas Edison', isSelected: true },
        {
          id: 'some-option-id-2',
          value: 'Alexander Graham Bell',
          isSelected: true,
        },
        { id: 'some-option-id-3', value: 'Marie Curie', isSelected: true },
        { id: 'some-option-id-4', value: 'Galileo Galilei', isSelected: true },
      ],
      isAnswered: true,
      date: '2023-11-16T00:00:00.000Z',
    },
    date: '2023-11-11T00:00:00.000Z',
  },
  {
    id: 'some id 3',
    text: 'Discuss the impact of technology on society.',
    type: 'open',
    date: '2023-10-25T00:00:00.000Z',
    answer: {
      options: [
        {
          id: 'some-option-id-5',
          value:
            'Technology shapes society by transforming communication, economy, and daily life. It offers efficiency but raises concerns about privacy and job displacement.',
        },
      ],
      isAnswered: true,
      date: '2023-10-25T00:00:00.000Z',
    },
  },
  {
    id: 'some id 4',
    text: 'Who wrote "Romeo and Juliet"?',
    type: 'single',
    date: '2023-10-26T00:00:00.000Z',
    answer: {
      options: [
        {
          id: 'some-option-id-6',
          value: 'William Shakespeare',
          isSelected: true,
        },
      ],
      isAnswered: true,
      date: '2023-10-26T00:00:00.000Z',
    },
  },
  {
    id: 'some id 5',
    text: 'List the five senses of the human body.',
    type: 'multiple',
    date: '2023-10-27T00:00:00.000Z',
    answer: {
      options: [
        { id: 'some-option-id-1', value: 'Sight', isSelected: false },
        { id: 'some-option-id-2', value: 'Hearing', isSelected: false },
        { id: 'some-option-id-3', value: 'Touch', isSelected: false },
        { id: 'some-option-id-4', value: 'Taste', isSelected: false },
        { id: 'some-option-id-5', value: 'Smell', isSelected: false },
      ],
      isAnswered: false,
      date: '2023-10-27T00:00:00.000Z',
    },
  },
  {
    id: 'some id 6',
    text: 'Explain the laws of motion formulated by Isaac Newton.',
    type: 'open',
    date: '2023-10-28T00:00:00.000Z',
    answer: {
      options: [
        {
          id: 'some-option-id-1',
          value:
            "Newton's laws: \n 1. Object stays at rest or in motion unless acted on by a force. \n 2. Force equals mass times acceleration (F=ma). \n 3. Every action has an equal and opposite reaction.",
        },
      ],
      isAnswered: true,
      date: '2023-10-28T00:00:00.000Z',
    },
  },
  {
    id: 'some id 7',
    text: 'What is the currency of Australia?',
    type: 'single',
    date: '2023-10-29T00:00:00.000Z',
    answer: {
      options: [
        {
          id: 'some-option-id-1',
          value: 'Australian Dollar',
          isSelected: true,
        },
      ],
      isAnswered: false,
      date: '2023-10-29T00:00:00.000Z',
    },
  },
  {
    id: 'some id 8',
    text: 'Name the three branches of the U.S. government.',
    type: 'multiple',
    answer: {
      options: [
        { id: 'some-option-id-1', value: 'Executive', isSelected: true },
        { id: 'some-option-id-2', value: 'Legislative', isSelected: true },
        { id: 'some-option-id-3', value: 'Judicial', isSelected: true },
      ],
      isAnswered: true,
      date: '2023-10-30T00:00:00.000Z',
    },
    date: '2023-10-30T00:00:00.000Z',
  },
  {
    id: 'some id 9',
    text: 'Define the concept of supply and demand.',
    type: 'open',
    date: '2023-10-01T00:00:00.000Z',
    answer: {
      isAnswered: false,
      date: '',
    },
  },
  {
    id: 'some id 10',
    text: 'Who discovered penicillin?',
    type: 'single',
    date: '2023-10-02T00:00:00.000Z',
    answer: {
      options: [
        {
          id: 'some-option-id-1',
          value: 'Alexander Fleming',
          isSelected: true,
        },
      ],
      isAnswered: true,
      date: '2023-10-02T00:00:00.000Z',
    },
  },
  {
    id: 'some id 11',
    text: 'What is the capital of France?',
    type: 'single',
    date: '2023-10-13T00:00:00.000Z',
    answer: {
      options: [
        {
          id: 'some-option-id-1',
          value: 'Paris',
          isSelected: true,
        },
      ],
      isAnswered: true,
      date: '2023-10-13T00:00:00.000Z',
    },
  },
  {
    id: 'some id 12',
    text: 'Which of the following are mammals?',
    type: 'multiple',
    date: '2023-10-14T00:00:00.000Z',
    answer: {
      options: [
        {
          id: 'some-option-id-1',
          value: 'Dolphin',
          isSelected: true,
        },
        {
          id: 'some-option-id-2',
          value: 'Elephant',
          isSelected: true,
        },
        {
          id: 'some-option-id-3',
          value: 'Snake',
          isSelected: false,
        },
        {
          id: 'some-option-id-4',
          value: 'Bat',
          isSelected: true,
        },
        {
          id: 'some-option-id-5',
          value: 'Kangaroo',
          isSelected: true,
        },
      ],
      isAnswered: true,
      date: '2023-10-14T00:00:00.000Z',
    },
  },
  {
    id: 'some id 13',
    text: 'Explain the concept of global warming.',
    type: 'open',
    date: '2023-10-15T00:00:00.000Z',
    answer: {
      options: [
        {
          id: 'some-option-id-6',
          value:
            "Global warming is the long-term rise in Earth's average surface temperature due to human activities, like burning fossil fuels, releasing greenhouse gases, trapping heat in the atmosphere, leading to climate changes and environmental impacts.",
        },
      ],
      isAnswered: true,

      date: '2023-10-15T00:00:00.000Z',
    },
  },
  {
    id: 'some id 14',
    text: 'Who is the author of "To Kill a Mockingbird"?',
    type: 'single',
    date: '2023-10-16T00:00:00.000Z',
    answer: {
      options: [
        {
          id: 'some-option-id-1',
          value: 'Harper Lee',
          isSelected: true,
        },
      ],
      isAnswered: true,
      date: '2023-10-16T00:00:00.000Z',
    },
  },
  {
    id: 'some id 15',
    text: 'List three properties of acids.',
    type: 'open',
    date: '2023-10-17T00:00:00.000Z',
    answer: {
      isAnswered: false,
      date: '',
    },
  },
  {
    id: 'some id 16',
    text: 'What is the capital of Japan?',
    type: 'single',
    date: '2023-10-18T00:00:00.000Z',
    answer: {
      options: [
        {
          id: 'some-option-id-1',
          value: 'Tokyo',
          isSelected: true,
        },
      ],
      isAnswered: true,
      date: '2023-10-18T00:00:00.000Z',
    },
  },
  {
    id: 'some id 18',
    text: 'Define the term "photosynthesis".',
    type: 'open',
    date: '2023-10-20T00:00:00.000Z',
    answer: {
      isAnswered: false,
      date: '',
    },
  },
  {
    id: 'some id 19',
    text: 'Who painted the Mona Lisa?',
    type: 'single',
    date: '2023-10-21T00:00:00.000Z',
    answer: {
      options: [
        {
          id: 'some-option-id-',
          value: 'Leonardo da Vinci',
          isSelected: true,
        },
      ],
      isAnswered: true,
      date: '2023-10-21T00:00:00.000Z',
    },
  },
  {
    id: 'some id 20',
    text: 'List the major components of a cell.',
    type: 'open',
    date: '2023-10-22T00:00:00.000Z',
    answer: {
      isAnswered: false,
      date: '',
    },
  },
];
