import { IQuestion } from './interfaces/question.interface';

export const questionDataInitialState: IQuestion[] = [
  {
    id: 'd1222bec-384c-45b4-a5b5-2ea490d0be59',
    text: 'What is the largest planet in our solar system?',
    type: 'single',
    date: '2023-11-16T00:00:00.000Z',
    answer: {
      options: [
        {
          id: '9cd2fcde-463a-4c06-a69d-5bf87bb1400d',
          value: 'Mercury',
          isSelected: false,
        },
        {
          id: 'cf1cd581-492e-49a9-815b-30ba6c788031',
          value: 'Venus',
          isSelected: false,
        },
        {
          id: '73a3bdb4-5d48-4a73-99eb-1785bc3d0af7',
          value: 'Earth',
          isSelected: false,
        },
        {
          id: 'a122a3cb-2f13-4d1c-9130-edc6ee6af035',
          value: 'Mars',
          isSelected: false,
        },
        {
          id: '2c0b5db7-4090-4956-b424-b206adf78008',
          value: 'Jupiter',
          isSelected: true,
        },
        {
          id: '7787220a-d04b-478a-b08b-9720ea6808a7',
          value: 'Saturn',
          isSelected: false,
        },
        {
          id: '8629786e-e367-461a-bdea-5c14f09d57b7',
          value: 'Uranus',
          isSelected: false,
        },
        {
          id: '0a8fcd69-b1bc-41ce-a5ba-9934db56ef6d',
          value: 'Neptune',
          isSelected: false,
        },
      ],
      isAnswered: true,
      date: '2023-11-16T00:00:00.000Z',
    },
  },
  {
    id: '6aaada69-b9fe-4fa3-99d6-3cba3dc9393a',
    text: 'Name three famous inventors.',
    type: 'multiple',

    answer: {
      options: [
        {
          id: 'ae0ecc6d-d3ec-48de-b1d6-5b05c691da3b',
          value: 'Thomas Edison',
          isSelected: true,
        },
        {
          id: '71598fbe-49bd-4648-b5ef-0774d0a21453',
          value: 'Alexander Graham Bell',
          isSelected: true,
        },
        {
          id: '0963d745-20a7-4d2f-92ce-a7a118b38197',
          value: 'Marie Curie',
          isSelected: true,
        },
        {
          id: '688465ec-8226-45cd-8f87-e04b4b53f296',
          value: 'Galileo Galilei',
          isSelected: true,
        },
      ],
      isAnswered: true,
      date: '2023-11-16T00:00:00.000Z',
    },
    date: '2023-11-11T00:00:00.000Z',
  },
  {
    id: 'ab71d07b-2873-4b7d-94ee-d5aff5d2a43e',
    text: 'Discuss the impact of technology on society.',
    type: 'open',
    date: '2023-10-25T00:00:00.000Z',
    answer: {
      options: [
        {
          id: '5be1477a-b8f7-40cf-a200-dadc72beea0d',
          value:
            'Technology shapes society by transforming communication, economy, and daily life. It offers efficiency but raises concerns about privacy and job displacement.',
        },
      ],
      isAnswered: true,
      date: '2023-10-25T00:00:00.000Z',
    },
  },
  {
    id: '7d3b737d-8b84-4a8c-94ca-d3c5686145f7',
    text: 'Who wrote "Romeo and Juliet"?',
    type: 'single',
    date: '2023-10-26T00:00:00.000Z',
    answer: {
      options: [
        {
          id: '1f277c9e-8c07-47c8-8780-d8cb1d40f79e',
          value: 'William Shakespeare',
          isSelected: true,
        },
      ],
      isAnswered: true,
      date: '2023-10-26T00:00:00.000Z',
    },
  },
  {
    id: '2eaed3be-d2a2-447c-b6e4-03929e80fb22',
    text: 'List the five senses of the human body.',
    type: 'multiple',
    date: '2023-10-27T00:00:00.000Z',
    answer: {
      options: [
        {
          id: 'dec69552-bac7-49e7-8028-3494374538d7',
          value: 'Sight',
          isSelected: false,
        },
        {
          id: 'b2f12725-2c36-4321-8662-229e48032d02',
          value: 'Hearing',
          isSelected: false,
        },
        {
          id: '879aa298-0db0-4339-997f-8f7561eec1fd',
          value: 'Touch',
          isSelected: false,
        },
        {
          id: 'bcc73fc4-76cc-46a2-a9c9-f0dde883404c',
          value: 'Taste',
          isSelected: false,
        },
        {
          id: '56297e99-fc96-44a1-9a2b-383aff596c19',
          value: 'Smell',
          isSelected: false,
        },
      ],
      isAnswered: false,
      date: '2023-10-27T00:00:00.000Z',
    },
  },
  {
    id: 'cc75d412-9299-4f3f-8563-ed11d84076dc',
    text: 'Explain the laws of motion formulated by Isaac Newton.',
    type: 'open',
    date: '2023-10-28T00:00:00.000Z',
    answer: {
      options: [
        {
          id: '3a8a589a-60a7-4ccd-9036-50e5e0b04ac3',
          value:
            "Newton's laws: \n 1. Object stays at rest or in motion unless acted on by a force. \n 2. Force equals mass times acceleration (F=ma). \n 3. Every action has an equal and opposite reaction.",
        },
      ],
      isAnswered: true,
      date: '2023-10-28T00:00:00.000Z',
    },
  },
  {
    id: '87d4286f-b743-40fe-b94a-29ba629a90e5',
    text: 'What is the currency of Australia?',
    type: 'single',
    date: '2023-10-29T00:00:00.000Z',
    answer: {
      options: [
        {
          id: '05218e47-6e70-4167-aedc-923e8d75e2e1',
          value: 'Australian Dollar',
          isSelected: true,
        },
      ],
      isAnswered: false,
      date: '2023-10-29T00:00:00.000Z',
    },
  },
  {
    id: '87d4286f-b743-40fe-b94a-29ba629a90e8',
    text: 'Name the three branches of the U.S. government.',
    type: 'multiple',
    answer: {
      options: [
        {
          id: '05218e47-6e70-4167-aedc-923e8w75d2e1',
          value: 'Executive',
          isSelected: true,
        },
        {
          id: '05218e47-6e70-4167-aedc-923e8q75d2e2',
          value: 'Legislative',
          isSelected: true,
        },
        {
          id: '05218e47-6e70-4167-aedc-923e8da5d2e3',
          value: 'Judicial',
          isSelected: true,
        },
      ],
      isAnswered: true,
      date: '2023-10-30T00:00:00.000Z',
    },
    date: '2023-10-30T00:00:00.000Z',
  },
  {
    id: '87d4286f-b743-40fe-b94a-29ba629l90e9',
    text: 'Define the concept of supply and demand.',
    type: 'open',
    date: '2023-10-01T00:00:00.000Z',
    answer: {
      isAnswered: false,
      date: '',
    },
  },
  {
    id: '87d4286f-b743-40fe-b94a-29ba629a93r410',
    text: 'Who discovered penicillin?',
    type: 'single',
    date: '2023-10-02T00:00:00.000Z',
    answer: {
      options: [
        {
          id: '05218e47-6e70-4167-aedc-92ty8d75d2e1',
          value: 'Alexander Fleming',
          isSelected: true,
        },
      ],
      isAnswered: true,
      date: '2023-10-02T00:00:00.000Z',
    },
  },
  {
    id: '87d4286f-b743-40fe-b94a-29ba629a78u11',
    text: 'What is the capital of France?',
    type: 'single',
    date: '2023-10-13T00:00:00.000Z',
    answer: {
      options: [
        {
          id: '05218e47-6e70-4167-aedc-9dss8d75d2e1',
          value: 'Paris',
          isSelected: true,
        },
      ],
      isAnswered: true,
      date: '2023-10-13T00:00:00.000Z',
    },
  },
  {
    id: '87d4286f-b743-40fe-b94a-29ba629s90e12',
    text: 'Which of the following are mammals?',
    type: 'multiple',
    date: '2023-10-14T00:00:00.000Z',
    answer: {
      options: [
        {
          id: '05218e47-6e70-4167-aedc-923e8sg5d2e1',
          value: 'Dolphin',
          isSelected: true,
        },
        {
          id: '05218e47-6e70-4167-aedc-923e8d3r5d2e2',
          value: 'Elephant',
          isSelected: true,
        },
        {
          id: '05218e47-6e70-4167-aedc-923e3r75d2e3',
          value: 'Snake',
          isSelected: false,
        },
        {
          id: '05218e47-6e70-4167-aedc-923e5g75d2e4',
          value: 'Bat',
          isSelected: true,
        },
        {
          id: '05218e47-6e70-4167-aedc-92328d75d2e5',
          value: 'Kangaroo',
          isSelected: true,
        },
      ],
      isAnswered: true,
      date: '2023-10-14T00:00:00.000Z',
    },
  },
  {
    id: '87dg286f-b743-40fe-b94a-29ba629a90e13',
    text: 'Explain the concept of global warming.',
    type: 'open',
    date: '2023-10-15T00:00:00.000Z',
    answer: {
      options: [
        {
          id: '05218ea-6e70-4167-aedc-923e8d75d2e6',
          value:
            "Global warming is the long-term rise in Earth's average surface temperature due to human activities, like burning fossil fuels, releasing greenhouse gases, trapping heat in the atmosphere, leading to climate changes and environmental impacts.",
        },
      ],
      isAnswered: true,

      date: '2023-10-15T00:00:00.000Z',
    },
  },
  {
    id: '87d4286f-b743-46he-b94a-29ba629a90e14',
    text: 'Who is the author of "To Kill a Mockingbird"?',
    type: 'single',
    date: '2023-10-16T00:00:00.000Z',
    answer: {
      options: [
        {
          id: '05218e47-6e70-4167-aedc-923e8d75d2e1',
          value: 'Harper Lee',
          isSelected: true,
        },
      ],
      isAnswered: true,
      date: '2023-10-16T00:00:00.000Z',
    },
  },
  {
    id: '87d4286f-b743-4sfe-b94a-29ba629a90e15',
    text: 'List three properties of acids.',
    type: 'open',
    date: '2023-10-17T00:00:00.000Z',
    answer: {
      isAnswered: false,
      date: '',
    },
  },
  {
    id: '87d406f-b743-40fe-b94a-29ba629a90e16',
    text: 'What is the capital of Japan?',
    type: 'single',
    date: '2023-10-18T00:00:00.000Z',
    answer: {
      options: [
        {
          id: '05ad2e47-6e70-4167-aedc-923e8d75d2e1',
          value: 'Tokyo',
          isSelected: true,
        },
      ],
      isAnswered: true,
      date: '2023-10-18T00:00:00.000Z',
    },
  },
  {
    id: '87d4286f-b725-40fe-b94a-29ba629a90e18',
    text: 'Define the term "photosynthesis".',
    type: 'open',
    date: '2023-10-20T00:00:00.000Z',
    answer: {
      isAnswered: false,
      date: '',
    },
  },
  {
    id: '87d4286f-t543-40fe-b94a-29ba629a90e19',
    text: 'Who painted the Mona Lisa?',
    type: 'single',
    date: '2023-10-21T00:00:00.000Z',
    answer: {
      options: [
        {
          id: '05267e47-6e70-4167-aedc-923e8d75d2e',
          value: 'Leonardo da Vinci',
          isSelected: true,
        },
      ],
      isAnswered: true,
      date: '2023-10-21T00:00:00.000Z',
    },
  },
  {
    id: '87d4286f-b743-40fe-b94a-21oi629a90e20',
    text: 'List the major components of a cell.',
    type: 'open',
    date: '2023-10-22T00:00:00.000Z',
    answer: {
      isAnswered: false,
      date: '',
    },
  },
];
