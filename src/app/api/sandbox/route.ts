import apiInfoJobs from '@/app/services/apiInfoJobs'
import apiOpenAI from '@/app/services/apiOpenAI'
import apiSupabase from '@/app/services/apiSupabase'

export async function GET (req: Request) {
  const { searchParams } = new URL(req.url)
  const { id } = Object.fromEntries(searchParams)

  if (id === null) {
    return new Response('id is required', { status: 400 })
  }

  const offer = await apiInfoJobs.getOffer({ id })

  const cachedSandbox = await apiSupabase.getCachedSandbox({ offerId: id })
  if (cachedSandbox !== null) {
    return new Response(JSON.stringify(cachedSandbox), { status: 200 })
  }

  const sandbox = await apiOpenAI.getCompleationPromptReponseForOfferSandbox(offer)

  await apiSupabase.cacheSandbox({ offerId: id, sandbox })

  return new Response(JSON.stringify(sandbox), { status: 200 })
}
