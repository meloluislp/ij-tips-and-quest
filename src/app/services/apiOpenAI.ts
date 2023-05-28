import { Configuration, OpenAIApi } from 'openai'
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

  return `${offerPromptDescription}\n\nGenera 5 tips en formato JSON sin saltos de 
  línea en base a la oferta anterior.`.trim()
}

function getOfferSandboxPrompt(offer: Offer) {
  const offerPromptDescription = getOfferDescriptionPrompt(offer)

  return `${offerPromptDescription}\n\n
  Genera preguntas y respuestas en formato JSON multiple choice. 
  Cada pregunta debe tener un enunciado y al menos dos opciones de respuesta 
  etiquetadas con letras. Incluye la propiedad "answer" para indicar la opción correcta.`.trim()
}

export async function getCompleationPromptReponseForOfferTips(offer: Offer) {
  const prompt = getOfferTipsPrompt(offer)

  console.log({ prompt })
  // const completion = await openai.createCompletion({
  //   model: 'text-davinci-003',
  //   prompt,
  //   max_tokens: 1000,
  //   temperature: 0.4
  // })

  // const data = completion?.data.choices[0].text ?? ''
  const data = `{"tips": ["Asegúrate de que tu CV refleje tu experiencia en el sector bancario y en el desarrollo de software.",
  "Asegúrate de que tu CV destaque tus habilidades en Java-Springboot.",
  "Asegúrate de que tu CV muestre tu experiencia en integración con bases de datos ORACLE.",
  "Asegúrate de que tu CV muestre tu capacidad para trabajar en equipo y comunicarse de manera efectiva.",
  "Asegúrate de que tu CV destaque tus habilidades en el diseño y desarrollo de APIs."]}`

  const tips = JSON.parse(data)?.tips ?? []
  const parseTips = tips.map((tip: string, index: number) => ({ id: index.toString(), tip }))

  return parseTips
}

export const getCompleationPromptReponseForOfferSandbox = async (offer: Offer) => {
  const resp = `[
    {
      "question": "¿Cuál de las siguientes opciones describe correctamente la diferencia entre una lista y una tupla en Python?",
      "options": {
        "a": "Una lista permite duplicados, mientras que una tupla no.",
        "b": "Una lista es inmutable, mientras que una tupla es mutable."
      },
      "answer": "a"
    },
    {
      "question": "¿Cuál de las siguientes opciones describe correctamente la diferencia entre una función y un método en Python?",
      "options": {
        "a": "Una función opera en un objeto o una clase, mientras que un método es independiente de los objetos y clases.",
        "b": "Una función es una secuencia de instrucciones que puede ser reutilizada, mientras que un método es un bloque de código asociado a un objeto o una clase."
      },
      "answer": "b"
    },
    {
      "question": "¿Cómo se define una función en Python?",
      "options": {
        "a": "definir()",
        "b": "funcion()",
        "c": "def()"
      },
      "answer": "c"
    },
    {
      "question": "¿Qué es una excepción en Python?",
      "options": {
        "a": "Una condición que indica un error o un comportamiento inesperado durante la ejecución de un programa.",
        "b": "Un tipo especial de variable que almacena un valor booleano."
      },
      "answer": "a"
    },
    {
      "question": "¿Cuál es la función utilizada para leer la entrada del usuario en Python?",
      "options": {
        "a": "readline()",
        "b": "input()",
        "c": "getinput()"
      },
      "answer": "b"
    }
  ]`
  return JSON.parse(resp)
}

const apiOpenAI = {
  getCompleationPromptReponseForOfferTips,
  getCompleationPromptReponseForOfferSandbox
}

export default apiOpenAI
