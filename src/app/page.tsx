import { ActionPanel } from './components/actions'
import { Offer } from './models/offer.model'
import { getRandomOffer } from './services/getOffers'

export default async function Home () {
  const randomoffer: Offer = await getRandomOffer()

  return (
    <main>
      <h1> Tesst info job </h1>
      <ActionPanel id={randomoffer.id} />
      <pre>{JSON.stringify(randomoffer, null, 2)}</pre>
    </main>
  )
}
