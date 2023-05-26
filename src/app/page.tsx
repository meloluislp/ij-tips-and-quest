import { OfferHeader } from './components/OfferHeader'
import { Offer } from './models/offer.model'
import { getRandomOffer } from './services/getOffers'

export default async function Home() {
  const randomoffer: Offer = await getRandomOffer()

  return (
    <main className="container container-slotbanner">
      <OfferHeader offer={randomoffer} />
      <h1> Tesst info job </h1>
      <pre>{JSON.stringify(randomoffer, null, 2)}</pre>
    </main>
  )
}
