/* uploadFile.js */
import openai from './api.js'
import fs from 'fs'
console.log('welcome here')
async function upload() {
  try {
    const response = await openai.createFile(
      fs.createReadStream('./fineTuner.jsonl'),
      "fine-tune"
    );
    console.log('File ID: ', response.data.id)
  } catch (err) {
    console.log('err: ', err)
  }
}

upload()