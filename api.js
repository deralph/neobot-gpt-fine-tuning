/* api.js */
import { Configuration, OpenAIApi } from 'openai'
const openaiApiKey = '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'
const configuration = new Configuration({
  apiKey: openaiApiKey
})
const openai = new OpenAIApi(configuration)
export default openai