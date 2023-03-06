// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JSON>
) {
  const { Configuration, OpenAIApi } = require("openai");
  const { subject} = req.body  ||= "JavaScript"
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: `Make a Study card of 10 key points, both questions and answers that I should know when studying ${subject} with each question and answer being a object in an array of questions in JSON format?`,
  temperature: 1,
  max_tokens: 750,
  top_p: 1,
  frequency_penalty: 0.5,
  presence_penalty: 0,
});

  try {
    const data  = JSON.parse(response.data.choices[0].text)
    res.status(200).json(data)
  } catch (err) {
    const errString = String(err)
    const error = JSON.parse(errString)
    res.status(500).json(error)
  }
}

