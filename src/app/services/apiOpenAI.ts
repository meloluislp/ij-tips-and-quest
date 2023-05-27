import { Configuration, OpenAIApi } from 'openai'

const OPEN_AI_API_KEY = process.env.OPEN_IA_TOKEN ?? ''

const configuration = new Configuration({
  apiKey: OPEN_AI_API_KEY
})
const openai = new OpenAIApi(configuration)

export async function getCompleationPromptReponse (prompt: string) {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 1000,
    temperature: 0.4
  })

  const data = completion?.data.choices[0].text ?? ''

  const json = await JSON.parse(data)
  return json
}
