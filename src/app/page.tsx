import { OfferBody } from './components/OfferBody'
import { OfferHeader } from './components/OfferHeader'
import { OfferShare } from './components/OfferShare'
import { Offer } from './models/offer.model'
import apiInfoJobs from './services/apiInfoJobs'

export default async function Home() {
  const randomoffer: Offer = await apiInfoJobs.getRandomOffer()
  return (
    <main className="container container-slotbanner">
      <OfferHeader offer={randomoffer} />
      <section className="container-expanded panel-default">
        <div className="row">
          <OfferBody offer={randomoffer} />
          <OfferShare offer={randomoffer} />
        </div>
      </section>
    </main>
  )
}
