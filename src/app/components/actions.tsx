'use client'

export const ActionPanel = ({ id }: { id: string }) => {
  const handleGetTips = () => {
    console.log('get tips', id)
  }

  const handleGetSandbox = () => {
    console.log('get tips', id)
  }

  return (
    <section>
      <h1>Actions</h1>
      <button type="button">Inscribirme en esta oferta</button>
      <button type="button" onClick={handleGetTips}>Get Tips</button>
      <button type="button" onClick={handleGetSandbox}>Ready Sandbox</button>
    </section>
  )
}
