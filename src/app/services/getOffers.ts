import { Offer } from '../models/offer.model'
import { OfferApi } from '../models/offerapi.mode'

const API_URL_SEARCH = process.env.INFO_JOBS_API_URL_SEARCH ?? ''
const API_URL_OFFER = process.env.INFO_JOBS_API_URL_OFFER ?? ''
const API_TOKEN = process.env.INFO_JOBS_API_TOKEN ?? ''

async function request ({ url }: { url: string }) {
  const options: any = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${API_TOKEN}`
    }
  }

  return await fetch(url, options)
}

export async function getRandomOffer (): Promise<Offer> {
  const resp = await request({ url: `${API_URL_SEARCH}/offer` })

  console.log('resp', resp)
  const { items }: { items: OfferApi[] } = await resp.json()

  const randomIndex = Math.floor(Math.random() * items.length)
  const randomOffer = items[randomIndex]

  return await getOffer({ id: randomOffer.id })
}

export async function getOffer ({ id }: { id: string }): Promise<Offer> {
  const resp = await request({ url: `${API_URL_OFFER}/offer/${id}` })
  const offer: Offer = await resp.json()
  return offer
}
