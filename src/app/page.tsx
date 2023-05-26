import { ActionPanel } from './components/ActionPanel'
import { Offer } from './models/offer.model'
import { getRandomOffer } from './services/getOffers'

export default async function Home() {
  const randomoffer: Offer = await getRandomOffer()

  return (
    <main className="container container-slotbanner">
      <h1> Tesst info job </h1>
      <ActionPanel id={randomoffer.id} />
      <pre>{JSON.stringify(randomoffer, null, 2)}</pre>
    </main>
  )
}
