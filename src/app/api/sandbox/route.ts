import { getOffer } from '@/app/services/getOffers'
import { getOpenAISandbox } from '@/app/services/getOpenIASandbox'

export async function GET (req: Request) {
  const { searchParams } = new URL(req.url)
  const { id } = Object.fromEntries(searchParams)

  if (id === null) {
    return new Response('id is required', { status: 400 })
  }

  const offer = await getOffer({ id })

  const data = await getOpenAISandbox(offer)

  return new Response(JSON.stringify(data), { status: 200 })
}
