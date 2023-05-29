import { OfferBody } from '@/app/components/OfferBody'
import { OfferHeader } from '@/app/components/OfferHeader'
import { OfferShare } from '@/app/components/OfferShare'
import { Offer } from '@/app/models/offer.model'
import apiInfoJobs from '@/app/services/apiInfoJobs'

export default async function OfferPage({ params }: { params: { id: string } }) {
  const offerId = params.id

  const offer: Offer = await apiInfoJobs.getOffer({ id: offerId })

  return (
    <main className="container container-slotbanner">
      <OfferHeader offer={offer} />
      <section className="container-expanded panel-default">
        <div className="row">
          <OfferBody offer={offer} />
          <OfferShare offer={offer} />
        </div>
      </section>
    </main>
  )
}
