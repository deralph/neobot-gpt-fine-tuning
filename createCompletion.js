/* createCompletion.js */
import openai from './api.js'

async function createCompletion() {
    try {
        console.log('welcome here')

        const response = await openai.listFineTunes()
        console.log(response.data.data[6].fine_tuned_model)
        // console.log('data: ', response.data.data)
        try {
            const createComplete = await openai.createCompletion({
                // model: response.data.data[0].fine_tuned_model,
                model: response.data.data[6].fine_tuned_model,
                prompt: 'name your name',
                max_tokens: 200
            })
            if (createComplete.data) {
                console.log('choices: ', createComplete.data.choices)
            }
        } catch (err) {
            console.log('error occured in create complete')
            console.log('error:', err)
        }
    } catch (err) {
        console.log('error occured')
        console.log('err: ', err)
    }
}
// async function createCompletion() {
//     try {
//         const response = await openai.createCompletion({
//             model: 'davinci:ft-tumzytech-2022-12-25-16-08-10',
//             prompt: 'What is your creator',
//             max_tokens: 200
//         })
//         if (response.data) {
//             console.log('choices: ', response.data.choices)
//         }
//     } catch (err) {
//         console.log('error occured')
//         console.log('err: ', err)
//     }
// }

createCompletion()