import { createClient } from '@supabase/supabase-js'
import { SandboxQuestion } from '../models/sandboxquestion.model'

const SUPABASE_API_URL = process.env.SUPABASE_URL ?? ''
const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY ?? ''

const cacheTips = async ({ offerId, tips }: { offerId: string, tips: Array<{ id: string, text: string }> }) => {
  const tipsData = JSON.stringify(tips)
  const supabase = createClient(SUPABASE_API_URL, SUPABASE_API_KEY)
  await supabase.from('tips').insert({
    id: offerId,
    tips: tipsData
  })
}

const getCachedTips = async ({ offerId }: { offerId: string }) => {
  const supabase = createClient(SUPABASE_API_URL, SUPABASE_API_KEY)
  const { data, error } = await supabase.from('tips').select('*').eq('id', offerId)
  console.log({ data, error })

  if (error !== null || data?.length === 0) {
    return null
  }

  return JSON.parse(data?.[0]?.tips)
}

const cacheSandbox = async ({ offerId, sandbox }: { offerId: string, sandbox: SandboxQuestion[] }) => {
  const sandboxData = JSON.stringify(sandbox)
  const supabase = createClient(SUPABASE_API_URL, SUPABASE_API_KEY)
  await supabase.from('sandbox').insert({
    id: offerId,
    sandbox: sandboxData
  })
}

const getCachedSandbox = async ({ offerId }: { offerId: string }) => {
  const supabase = createClient(SUPABASE_API_URL, SUPABASE_API_KEY)
  const { data, error } = await supabase.from('sandbox').select('*').eq('id', offerId)

  if (error !== null || data?.length === 0) {
    return null
  }

  return JSON.parse(data?.[0]?.sandbox)
}

const apiSupabase = {
  cacheTips,
  getCachedTips,
  cacheSandbox,
  getCachedSandbox
}

export default apiSupabase
