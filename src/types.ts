// Contains all the the types we want to use for this app

export interface Question {
    id: number
    title: string
    options: Option[]
    answer: number
}

export interface Option {
    id: number
    title: string
}

// export interface OpenQuestion extends Question {
//     answer: string
// }

// export interface MultipleChoiceQuestion extends Question {
//     options: [
//         {
//             id: number;
//             title: string;
//         }
//     ]
//     answer: number
// }