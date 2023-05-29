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
  const data = `{
    "tips": [
    "Destaca tu experiencia de al menos 3 años en programación informática backend.",
    "Resalta tus habilidades en Node.js, Java, SQL, ETL y API, ya que son requeridas para el puesto.",
    "Muestra tu capacidad analítica, resolutiva y proactiva en el desarrollo de soluciones tecnológicas.",
    "Enfatiza tu habilidad para adaptarte a situaciones cambiantes y para empatizar con los clientes.",
    "Menciona tu interés en formar parte de un equipo flexible y adaptable, capaz de responder rápidamente a las necesidades de los clientes."
    ]
    }`

  const tips = JSON.parse(data)?.tips ?? []
  const parseTips = tips.map((tip: string, index: number) => ({ id: index.toString(), tip }))

  return parseTips
}

export const getCompleationPromptReponseForOfferSandbox = async (offer: Offer) => {
  const prompt = getOfferSandboxPrompt(offer)
  console.log({ prompt })
  const resp = `{
    "questions": [
    {
    "question": "¿Cuál es el requisito mínimo de estudios para el puesto de programador informático backend?",
    "options": [
    "A) Ingeniería Técnica",
    "B) Ingeniería Superior",
    "C) No se menciona",
    "D) Licenciatura en Informática"
    ],
    "answer": "B) Ingeniería Superior"
    },
    {
    "question": "¿Cuántos años de experiencia mínima se requieren para el puesto de programador informático backend?",
    "options": [
    "A) Menos de 1 año",
    "B) Al menos 2 años",
    "C) Al menos 3 años",
    "D) Al menos 5 años"
    ],
    "answer": "C) Al menos 3 años"
    },
    {
    "question": "¿Cuáles son las habilidades requeridas para el puesto de programador informático backend?",
    "options": [
    "A) Python, C#, HTML, CSS",
    "B) Java, Ruby, PHP, XML",
    "C) Node.js, Java, SQL, ETL, API",
    "D) JavaScript, Swift, MongoDB, Angular"
    ],
    "answer": "C) Node.js, Java, SQL, ETL, API"
    }
    ]
    }
    `
  const sandbox = JSON.parse(resp).questions ?? []
  return sandbox
}

const apiOpenAI = {
  getCompleationPromptReponseForOfferTips,
  getCompleationPromptReponseForOfferSandbox
}

export default apiOpenAI
