/* listFineTunes.js */
import openai from './api.js'

async function listFineTunes() {
    try {
        console.log('welcome here')

        const response = await openai.listFineTunes()
        console.log('data: ', response.data.data)
    } catch (err) {
        console.log('error occured')
        console.log('error:', err)
    }
}

listFineTunes()