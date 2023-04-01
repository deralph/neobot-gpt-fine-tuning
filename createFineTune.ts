/* createFineTune.js */
import openai from "./api";
import fs from "fs";
console.log("welcome here");
async function upload() {
  try {
    const response = await openai.createFile(
      fs.createReadStream("./fineTuner.jsonl"),
      "fine-tune"
    );
    console.log("File ID: ", response.data.id);
    try {
      const fineTune = await openai.createFineTune({
        training_file: response.data.id,
        model: "davinci",
      });
      console.log("response: ", response);
    } catch (error: any) {
      console.log("an error occured in fine tuning");
      console.log("error: ", error.response.data.error);
    }
  } catch (err) {
    console.log("AN ERROR OCCURED IN UPLOADING FILE");
    console.log("err: ", err);
  }
}

upload();

// async function createFineTune() {
//     try {
//         const response = await openai.createFineTune({
//             training_file: 'rUeKcvjdokOrgfV2LmbKUa46',
//             model: 'davinci'
//         })
//         console.log('response: ', response)
//     } catch (err) {

//         console.log('an error occured')
//         console.log('error: ', err.response.data.error)
//     }
// }

// createFineTune()
