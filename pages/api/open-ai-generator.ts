// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: Array<{
    question: string,
    answer: string
  }>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Make a Study card of 5 key points, both questions and answers that I should know when studying Ancient Rome with each question and answer being a object in an array of questions in JSON format?\n\n\n\n[\n    {   \n        \"question\": \"When did the Roman Empire begin?\",\n        \"answer\": \"The Roman Empire began in 27 BC\" \n    },\n    { \n        \"question\": \"Who were the first two emperors of Rome?\", \n        \"answer\": \"The first two emperors of Rome were Augustus and Tiberius\" \n    },\n    { \n        \"question\": \"What language did the Romans speak?\", \n        \"answer\": \"The Romans spoke Latin\" \n    },    \n    {  \t\t\t\t\t\t  \t\t  \t\t     \t            \n       \"question\": \"What was Roman religion based on?\",    \t    \t            \n       \"answer\":    \"Roman religion was based on gods and goddesses taken from earlier Greek and Etruscan religions\"                                               \n\n    },                     \n    {                                             \n\n       \"question\": \"What was life like for common people in Ancient Rome?\",                        \n\n       \"answer\":  \n\n       \"Life for common people in Ancient Rome varied greatly depending on their social class. Most lower classes had difficult lives with little access to education.\"\n\n   }          ]",
  temperature: 1,
  max_tokens: 500,
  top_p: 1,
  frequency_penalty: 0.5,
  presence_penalty: 0,
});
  res.status(200).json({ data: response.data.choices })
}
