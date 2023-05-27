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
          <a className=" cta hide flex" href="/">
            <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M10.568 15.9768C11.8787 14.8533 13.8128 14.8533 15.1235 15.9768L17.8505 18.3142C18.0451 18.481 18.3457 18.3427 18.3457 18.0864V5.25C18.3457 4.97386 18.1218 4.75 17.8457 4.75H7.8457C7.56956 4.75 7.3457 4.97386 7.3457 5.25V18.0864C7.3457 18.3427 7.64634 18.481 7.84094 18.3142L10.568 15.9768ZM7.8457 3.25H17.8457C18.9503 3.25 19.8457 4.14543 19.8457 5.25V19.8258C19.8457 20.3781 19.398 20.8258 18.8457 20.8258C18.607 20.8258 18.3762 20.7404 18.1949 20.585L14.1473 17.1156C13.3983 16.4737 12.2931 16.4737 11.5441 17.1156L7.49649 20.585C7.07717 20.9445 6.44587 20.8959 6.08645 20.4766C5.9311 20.2953 5.8457 20.0645 5.8457 19.8258V5.25C5.8457 4.14543 6.74113 3.25 7.8457 3.25Z"
                fill="currentColor"
              />
            </svg>

            <span className="cta hide-small-device">GUARDADA</span>
          </a>
          <a className="alternative flex" href="/">
            <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M10.568 15.9768C11.8787 14.8533 13.8128 14.8533 15.1235 15.9768L17.8505 18.3142C18.0451 18.481 18.3457 18.3427 18.3457 18.0864V5.25C18.3457 4.97386 18.1218 4.75 17.8457 4.75H7.8457C7.56956 4.75 7.3457 4.97386 7.3457 5.25V18.0864C7.3457 18.3427 7.64634 18.481 7.84094 18.3142L10.568 15.9768ZM7.8457 3.25H17.8457C18.9503 3.25 19.8457 4.14543 19.8457 5.25V19.8258C19.8457 20.3781 19.398 20.8258 18.8457 20.8258C18.607 20.8258 18.3762 20.7404 18.1949 20.585L14.1473 17.1156C13.3983 16.4737 12.2931 16.4737 11.5441 17.1156L7.49649 20.585C7.07717 20.9445 6.44587 20.8959 6.08645 20.4766C5.9311 20.2953 5.8457 20.0645 5.8457 19.8258V5.25C5.8457 4.14543 6.74113 3.25 7.8457 3.25Z"
                fill="currentColor"
              />
            </svg>
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
