import { Offer } from '../models/offer.model'

export const OfferHeader = ({ offer }: { offer: Offer }) => {
  return <h1>{offer.title}</h1>
}
