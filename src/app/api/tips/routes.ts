export async function GET (req: Request) {
  const { searchParams } = new URL(req.url)
  const { id } = Object.fromEntries(searchParams)

  if (id === null) {
    return new Response('id is required', { status: 400 })
  }
}
