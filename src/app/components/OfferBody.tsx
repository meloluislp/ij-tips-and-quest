import { Offer } from '../models/offer.model'

export const OfferBody = ({ offer }: { offer: Offer }) => {
  const descriptions = offer.description.split('\r\n\r\n').map((item) => item.split('\r\n'))

  return (
    <div className="col-8 col-12-medium">
      <div className="col-child">
        <div className="inner inner-expanded panel-canvas panel-rounded">
          <h2>Requisitos</h2>
          <ul className="list-default">
            <li>
              <h3 className="list-default-title">Estudios mínimos</h3>
              <span className="list-default-text">{offer.studiesMin.value}</span>
            </li>
            <li>
              <h3 className="list-default-title">Experiencia mínima</h3>
              <span className="list-default-text">{offer.experienceMin.value}</span>
            </li>
            <li>
              <h3 className="list-default-title">Imprescindible residente en</h3>
              <span className="list-default-text">{offer.residence.value}</span>
            </li>

            <li>
              <h3 className="list-default-title">Conocimientos necesarios</h3>
              <ul className="list-default list-inline">
                {offer.skillsList.map((item) => (
                  <li key={item.skill}>
                    <a className="tag" title={`Más ofertas de ${item.skill}`} href="/">
                      {item.skill}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <div className="highlight-text border-top padding-top margin-top">
            <h2>Descripción</h2>
            <div id="prefijoDescripcion1">
              {descriptions.map((item, index) => (
                <p key={index}>
                  {item.map((subitem, subindex) => (
                    <span key={subindex}>
                      {subitem}
                      <br />
                    </span>
                  ))}
                </p>
              ))}
            </div>
            <ul className="list-default">
              <li>
                <h3 className="list-default-title">Tipo de industria de la oferta</h3>
                <span className="list-default-text">{offer.profile.typeIndustry.value}</span>
              </li>
              <li>
                <h3 className="list-default-title">Categoría</h3>
                <span className="list-default-text">
                  <a href="/" className="link" title={`Más ofertas en ${offer.category.value}`}>
                    {offer.category.value}
                  </a>
                  -
                  <a href="/" className="link" title={`Más ofertas en ${offer.subcategory.value}`}>
                    {offer.subcategory.value}
                  </a>
                </span>
              </li>

              <li>
                <h3 className="list-default-title">Nivel</h3>
                <span className="list-default-text">{offer.jobLevel.value}</span>
              </li>

              <li>
                <h3 className="list-default-title">Número de vacantes</h3>
                <span className="list-default-text">{offer.vacancies}</span>
              </li>

              <li>
                <h3 className="list-default-title">Salario</h3>
                <span className="list-default-text">{offer.salaryDescription}</span>
              </li>
            </ul>
          </div>

          <div className="margin-top">
            <p className="small">
              <strong>{offer.applications} inscritos a esta oferta</strong>
            </p>
            <p className="small">
              Nuestro consejo: inscríbete si tienes el perfil, puede que se ajuste más que el de otros inscritos.
            </p>

            <div className="btn-expanded-small-text margin-bottom">
              <button className="btn btn-cta">
                <span>Inscribirme en esta oferta</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
