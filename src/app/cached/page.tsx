import { OfferBody } from '../components/OfferBody'
import { OfferHeader } from '../components/OfferHeader'
import { OfferShare } from '../components/OfferShare'
import { Offer } from '../models/offer.model'
import apiSupabase from '../services/apiSupabase'
import { getOffer } from '../services/getOffers'

export default async function CacheOffer() {
  const cachedOfferId: string = await apiSupabase.getCacheOfferId()
  const randomoffer: Offer = await getOffer({ id: cachedOfferId })

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
