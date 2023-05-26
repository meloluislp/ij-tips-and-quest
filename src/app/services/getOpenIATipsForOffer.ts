import { Offer } from '../models/offer.model'
import { Configuration, ChatCompletionRequestMessageRoleEnum, OpenAIApi } from 'openai'

const OPEN_AI_API_KEY = process.env.OPEN_IA_TOKEN ?? ''

const configuration = new Configuration({
  apiKey: OPEN_AI_API_KEY
})
const openai = new OpenAIApi(configuration)

const INITIAL_PROMPT = [
  {
    role: ChatCompletionRequestMessageRoleEnum.System,
    content: 'The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.'
  }
]
export async function getOpenIATipsForOffer (offer: Offer) {
  console.log({ key: configuration.apiKey })
  // const completion = await openai.createChatCompletion({
  //   model: 'gpt-3.5-turbo',
  //   messages: [
  //     ...INITIAL_PROMPT,
  //     {
  //       role: ChatCompletionRequestMessageRoleEnum.User,
  //       content: 'I want to apply for the offer '
  //     }
  //   ]
  // })

  console.log({ i: INITIAL_PROMPT, o: offer, ai: openai })

  const resp = `{
    "tips": [
    "Investiga la empresa antes de la entrevista para familiarizarte con su industria, productos o servicios.",
    "Analiza detenidamente los requisitos del puesto y destaca tus fortalezas y experiencia relacionadas.",
    "Asegúrate de que tu currículum esté actualizado y se centre en los aspectos relevantes para el puesto.",
    "Practica respuestas a preguntas comunes de entrevistas para estar preparado y seguro durante la entrevista.",
    "Revisa tu presencia en línea, como tus perfiles en redes sociales, para asegurarte de que proyectas una imagen profesional.",
    "Prepara preguntas inteligentes para hacer al entrevistador y demostrar tu interés y conocimiento sobre el puesto y la empresa.",
    "Viste de forma adecuada y profesional para transmitir una buena impresión desde el primer momento.",
    "Llega puntual a la entrevista y demuestra una actitud positiva, entusiasmo y confianza en tus habilidades.",
    "No olvides llevar copias adicionales de tu currículum y cualquier otro documento relevante que pueda ser solicitado.",
    "Sé amable y cortés con todos los miembros del equipo de entrevista, incluyendo al recepcionista y a los entrevistadores."
    ]
    }`

  return JSON.parse(resp)

  // const data = completion.data.choices[0].message?.content ?? ''

  // console.log({ data })
}
