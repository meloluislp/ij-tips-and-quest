import Image from 'next/image'
import { Offer } from '../models/offer.model'
import { ActionPanel } from './ActionPanel'

export const OfferHeader = ({ offer }: { offer: Offer }) => {
  const pubishedDate = new Date(offer.creationDate)
  // format date to DD of Month short name like 30 of Jan
  const publishDateFormated = pubishedDate.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short'
  })

  return (
    <div className="panel-canvas panel-rounded">
      <div className="inner">
        <div className="pull-right">
          <a className="iconfont-Tag iconfont-20px cta hide" href="/">
            <span className="cta hide-small-device">GUARDADA</span>
          </a>
          <a className=" iconfont-TagFirst iconfont-20px alternative " href="/">
            <span className="hide-small-device">GUARDAR</span>
          </a>
        </div>

        <div className="heading-addons">
          <div className="content-middle">
            <div className="content-type-media">
              <a href="/">
                <figure className="fig-thumbnail fig-thumbnail-logo slide-up crop-image">
                  <Image
                    alt={`${offer.profile.name} - Ofertas de trabajo `}
                    className="border-rounded-l"
                    src={offer.profile?.logoUrl ?? ''}
                    title={`${offer.profile.name} - Ofertas de trabajo `}
                    width="78"
                    height="78"
                  />
                  <figcaption className="fig-thumbnail-caption slide-item">
                    <p className="fig-thumbnail-details">Ver ofertas</p>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className="content-type-text">
              <ul className="list-inline list-default">
                <li>
                  <span
                    style={{
                      color: '#004a23',
                      borderRadius: '2px',
                      backgroundColor: '#e6f6ed',
                      padding: '1px 4px 2px 4px',
                      fontSize: '12px'
                    }}
                  >
                    Proceso online
                  </span>
                </li>
              </ul>
              <h1 className="text-hyphen">{offer.title}</h1>

              <a className="link" title={`Ofertas de trabajo en ${offer.profile.name}`} href="/">
                {offer.profile.name}
              </a>

              <ul className="list-default flow-items--baseline list-inline">
                <li id="reviewStars">
                  <meter className="meter-rating" value="85" min="0" max="100">
                    85%
                  </meter>
                </li>
                <li id="reviewStarsInfo" className="small alternative-action">
                  <ul className="list-inline alternative-action small">
                    <li className="small alternative-action divider--dot">4,3</li>
                    <li className="small alternative-action">12 opiniones</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-8 col-6-medium">
            <div className="col-child inner">
              <div className="row row-matrioska">
                <div className="col-6 col-12-medium ">
                  <div className="col-child inner">
                    <ul className="list-default list-bullet-default small">
                      <li>
                        <span id="prefijoPoblacion">{offer.province.value}, </span>
                        <a href="/" className="link" title={`Más ofertas en ${offer.province.value} `}>
                          {offer.province.value}
                        </a>
                        <span id="prefijoPais"> {`(${offer.country.value})`}</span>
                      </li>
                      <li>
                        <span>Publicada el </span>
                        <span>{publishDateFormated}</span>
                      </li>
                      <li>
                        <span>{offer.salaryDescription}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-6 col-12-medium ">
                  <div className="col-child inner">
                    <ul className="list-default list-bullet-default small">
                      <li>
                        <span>Experiencia mínima: {offer.experienceMin?.value}</span>
                      </li>
                      <li>
                        <span id="prefijoJornada">
                          {`Tipo de contrato: ${offer.contractType.value}, jornada ${offer.journey?.value}`}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 col-6-medium">
            <div className="col-child clearfix">
              <div className="hide-small-device inner">
                <ActionPanel offerId={offer.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
