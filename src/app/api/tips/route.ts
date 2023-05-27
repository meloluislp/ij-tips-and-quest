import { getCompleationPromptReponse } from '@/app/services/apiOpenAI'
import { getOffer } from '@/app/services/getOffers'
import { getOfferTipsPrompt } from '@/app/services/getPrompts'

export async function GET (req: Request) {
  const { searchParams } = new URL(req.url)
  const { id } = Object.fromEntries(searchParams)

  if (id === null) {
    return new Response('id is required', { status: 400 })
  }

  const offer = await getOffer({ id })
  const prompt = getOfferTipsPrompt(offer)
  const response = await getCompleationPromptReponse(prompt)

  const tips = response?.tips.map((tip: string, index: number) => ({ id: index.toString(), tip })) ?? []
  return new Response(JSON.stringify(tips), { status: 200 })
}
