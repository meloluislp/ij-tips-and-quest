import apiOpenAI from '@/app/services/apiOpenAI'
import apiSupabase from '@/app/services/apiSupabase'
import { getOffer } from '@/app/services/getOffers'

export async function GET (req: Request) {
  const { searchParams } = new URL(req.url)
  const { id } = Object.fromEntries(searchParams)

  if (id === null) {
    return new Response('id is required', { status: 400 })
  }

  const offer = await getOffer({ id })

  const cachedTips = await apiSupabase.getCachedTips({ offerId: id })

  if (cachedTips !== null || cachedTips?.length > 0) {
    return new Response(JSON.stringify(cachedTips), { status: 200 })
  }

  const tips = await apiOpenAI.getCompleationPromptReponseForOfferTips(offer)

  await apiSupabase.cacheTips({ offerId: id, tips })

  return new Response(JSON.stringify(tips), { status: 200 })
}
