## GPT Fine-Tuning using Node.ts

### Prerequisites

To follow along with this tutorial, you’ll need to have the following installed on your machine:

- Python
- Node.js

You’ll also need an OpenAI API Key. You can get one at [https://openai.com](https://openai.com).

### Getting started

First, clone the repo and install the dependencies:

```sh
git clone https://github.com/deralph/neobot-gpt-fine-tuning.git

cd neobot-gpt-fine-tuning

npm install # or yarn
```

Next, set the environment variable for your OpenAI API Key in the .env file

```sh
OPENAI_KEY="your-api-key"
```

### Api.ts file

The api.ts file is where the openaiapi and its configuration is being initiated,
It wil be imported in all other files throughout the project

### Running the app

First,create your `fineTuner.jsonl` file ,this is an example below

```sh
{"prompt": "<prompt text>", "completion": "<ideal generated text>"}
{"prompt": "<prompt text>", "completion": "<ideal generated text>"}
{"prompt": "<prompt text>", "completion": "<ideal generated text>"}

```

Then upload the file with the example or custom data set to OpenAI.
Next, use the File ID that is generated to create a new fine tune based on davinci by updating theas the value of `training_file` in `createFineTune.ts`.

Finally, create the fine tune:

```sh
 npm run createFineTune
```

### Listing your Fine Tunes and testing it out

Once the fine tune is created, it will take some time to process. We can get the status of the fine tune, as well as the model ID, by calling the listFineTunes API method in the `createCompletion.ts` file

Now that the fine tune has processed and our. new model is ready, we can try it out.

Open createCompletion.ts. Here, update the "name your name" value with your prompt text .

Next, run the script:

```sh
 npm start
```

This project show how to easily fine-tune a GPT data model. This codebase goes along with the tutorial located [here](https://nader.substack.com/p/supercharge-your-gpt-model-custom).
