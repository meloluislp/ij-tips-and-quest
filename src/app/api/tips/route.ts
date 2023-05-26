import { getOffer } from '@/app/services/getOffers'
import { getOpenIATipsForOffer } from '@/app/services/getOpenIATipsForOffer'

export async function GET (req: Request) {
  const { searchParams } = new URL(req.url)
  const { id } = Object.fromEntries(searchParams)

  if (id === null) {
    return new Response('id is required', { status: 400 })
  }

  const offer = await getOffer({ id })

  const data = await getOpenIATipsForOffer(offer)

  const tips = data.tips.map((text: string, index: number) => ({
    id: `${index}`,
    text
  }))

  return new Response(JSON.stringify(tips), { status: 200 })
}
