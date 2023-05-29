import { Configuration, OpenAIApi, ChatCompletionRequestMessageRoleEnum } from 'openai'
import { Offer } from '../models/offer.model'

const OPEN_AI_API_KEY = process.env.OPEN_IA_TOKEN ?? ''

const configuration = new Configuration({
  apiKey: OPEN_AI_API_KEY
})
const openai = new OpenAIApi(configuration)

function getOfferDescriptionPrompt(offer: Offer) {
  const skills = offer.skillsList.map(skill => skill.skill).join(', ')

  return `Titulo: ${offer.title}\nRequisitos\nEstudios minimos: ${offer.studiesMin.value}\nExperiencia minima: 
    ${offer.experienceMin.value}\nImprescindible residente en: ${offer.residence.value}\n
    Descripcion: ${offer.description}\n\nSkills: ${skills}`.trim()
}

function getOfferTipsPrompt(offer: Offer) {
  const offerPromptDescription = getOfferDescriptionPrompt(offer)
  return `${offerPromptDescription}\n\nGenera 5 tips en formato JSON sin saltos de línea, clave tips que sae un array de stirngs, en base a la oferta anterior.`.trim()
}

function getOfferSandboxPrompt(offer: Offer) {
  return `Dado este titulo de oferta :"${offer.title}"
  genera preguntas y respuestas en base a los conceptos tecnicos de programacion queun postulante deberia conocer.el formato de la respuesta seria:
  { "questions: [
        {
          "question": "Enunciado de la pregunta",
          "options": {
            "a": "Opción A",
            "b": "Opción B",
            "c": "Opción C"
          },
          "answer": "a"
        },
        ...
      ]}
  Es muy importante respetar el formato de respuesta esperado`
}

export async function getCompleationPromptReponseForOfferTips(offer: Offer) {
  const prompt = getOfferTipsPrompt(offer)

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 2000,
    temperature: 0.4
  })

  const data = completion?.data.choices[0].text ?? ''

  const tips = JSON.parse(data)?.tips ?? []
  const parseTips = tips.map((tip: string, index: number) => ({ id: index.toString(), tip }))

  return parseTips
}

export const getCompleationPromptReponseForOfferSandbox = async (offer: Offer) => {
  const initMessage = getOfferSandboxPrompt(offer)

  const prompt = [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: initMessage
    }
  ]

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: prompt
  })

  const data = completion?.data.choices[0].message?.content ?? ''
  const sandbox = JSON.parse(data).questions ?? []
  return sandbox
}

const apiOpenAI = {
  getCompleationPromptReponseForOfferTips,
  getCompleationPromptReponseForOfferSandbox
}

export default apiOpenAI
