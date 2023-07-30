import axios from 'axios'
import { mapActions } from 'pinia'

// export const Api = {

//     getQuestions: function (completionblock) {
//         axios.get('https://my-json-server.typicode.com/efcruz/berliner-quiz/questions')
//             .then((response) => {
//                 let questions = response.data

//                 completionblock(questions)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })

//     }
// }


const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/efcruz/berliner-quiz',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getQuestions() {
        return apiClient.get('/questions')
    },
    getQuestion(id: number) {
        return apiClient.get('/questions/' + id)
    }
}

// export default {
//     getQuestions() {

//         let questions

//         axios.get('https://my-json-server.typicode.com/efcruz/berliner-quiz/questions')
//             .then((response) => {
//                 questions = response.data
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//         return questions

//     }

// }





// export default {
//     getQuestions() {
//         debugger;
//         return apiClient.get('/questions')
//     },
//     getQuestion(id: number) {
//         return apiClient.get('/questions/' + id)
//     }
// }