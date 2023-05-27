import { Offer } from '../models/offer.model'

export function getOfferTipsPrompt(offer: Offer) {
  const skills = offer.skillsList.map(skill => skill.skill).join(', ')

  return `Titulo: ${offer.title}\nRequisitos\nEstudios minimos: ${offer.studiesMin.value}\nExperiencia minima: 
    ${offer.experienceMin.value}\nImprescindible residente en: ${offer.residence.value}\n
    Descripcion: ${offer.description}\n\nSkills: ${skills}\n\nteniendo en cuanta la anterior oferta de  
    trabajo te daria algunos tips(5 maximo) con  formato json  {tips:[ "tip1", "tip2","tipn"]} sin saltos de linea`
}
