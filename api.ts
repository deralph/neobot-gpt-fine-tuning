/* api.js */
import { config } from 'dotenv'
config();
import { Configuration, OpenAIApi } from 'openai'
console.log(process.env.OPENAI_KEY)
const openaiApiKey = process.env.OPENAI_KEY
const configuration = new Configuration({
  apiKey: openaiApiKey
})
const openai = new OpenAIApi(configuration)
export default openai