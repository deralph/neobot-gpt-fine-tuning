/* api.js */
import { config } from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'
config()
console.log(process.env.OPENAI_KEY)
const openaiApiKey = process.env.OPENAI_KEY
const configuration = new Configuration({
  apiKey: openaiApiKey
})
const openai = new OpenAIApi(configuration)
export default openai