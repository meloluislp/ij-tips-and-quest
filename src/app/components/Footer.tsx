import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="footer footer-slotbanner">
      <div className="container">
        <div className="footer-nav inner">
          <ul className="row clearfix">
            <li className="col-3 col-12-medium col-centered">
              <div className="col-child">
                <h3>Nosotros</h3>
                <ul className="list-default">
                  <li className="nav-item-visible">
                    <a href="/" title="Ayuda">
                      Ayuda
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Seguridad">
                      Seguridad
                    </a>
                  </li>
                  <li className="nav-item-visible">
                    <a href="/lex.xhtml" title="Condiciones legales">
                      Condiciones legales
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Política de Privacidad">
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Reglas de uso y características de servicio de InfoJobs">
                      Uso del servicio
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Política de cookies">
                      Política de cookies
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Gestionar cookies">
                      Gestionar cookies
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="col-3 hide-small-device col-centered">
              <div className="col-child">
                <h3>Sobre InfoJobs</h3>
                <ul className="list-default">
                  <li>
                    <a href="/" title="El equipo y la filosofía de la empresa">
                      InfoJobs hoy
                    </a>
                  </li>

                  <li>
                    <a href="/" title="¿Quieres formar parte de nuestro equipo?">
                      Trabaja con nosotros
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Buscar ofertas de empleo">
                      Ofertas de empleo
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="col-3 hide-small-device col-centered">
              <div className="col-child">
                <h3>+ InfoJobs</h3>
                <ul className="list-default">
                  <li>
                    <a href="/" title="InfoJobs Awards">
                      InfoJobs Awards
                    </a>
                  </li>
                  <li>
                    <a href="/" title="InfoJobs Academy">
                      InfoJobs Academy
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Orientación laboral y coaching en la búsqueda de empleo">
                      Orientación laboral
                    </a>
                  </li>

                  <li>
                    <a href="/" title="Qué puedo estudiar para trabajar - Formación InfoJobs" rel="nofollow">
                      InfoJobs Formación
                    </a>
                  </li>

                  <li>
                    <a href="/" title="Blog empresas">
                      Blog empresas
                    </a>
                  </li>
                  <li>
                    <a href="/" lang="it" title="Accedi a InfoJobs.it">
                      Oferte di lavoro in Italia
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="col-3 hide-small-device col-centered">
              <div className="col-child">
                <h3>Prensa</h3>
                <ul className="list-default">
                  <li>
                    <a href="/" title="El barómetro en el mercado laboral">
                      Indicadores de InfoJobs
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Notas de prensa publicadas por InfoJobs">
                      Notas de prensa
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Contacto de prensa">
                      Contacto de prensa
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="social-footer">
          <div className="row row-faux">
            <div className="col-6 col-12-medium">
              <div className="col-child h-8">
                <dl className="social-icons">
                  <dt>¡Síguenos!</dt>
                  <dd>
                    <a className="iconfont-36px script" href="/" title="InfoJobs en Facebook">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21.8457 12C21.8457 7.02943 17.8163 3 12.8457 3C7.87514 3 3.8457 7.02943 3.8457 12C3.8457 16.4922 7.13687 20.2155 11.4395 20.8907V14.6016H9.1543V12H11.4395V10.0172C11.4395 7.76156 12.7831 6.51562 14.8389 6.51562C15.8236 6.51562 16.8535 6.69141 16.8535 6.69141V8.90625H15.7186C14.6006 8.90625 14.252 9.60001 14.252 10.3117V12H16.748L16.349 14.6016H14.252V20.8907C18.5545 20.2155 21.8457 16.4922 21.8457 12Z"
                          fill="black"
                        />
                      </svg>
                    </a>
                  </dd>
                  <dd>
                    <a className=" iconfont-36px script" href="/" title="InfoJobs en Twitter">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.5057 19.3096C12.2988 19.3284 14.983 18.2272 16.9581 16.2521C18.9332 14.277 20.0345 11.5928 20.0157 8.79963C20.0157 8.63963 20.0157 8.47963 20.0157 8.31963C20.7339 7.79625 21.3535 7.14956 21.8457 6.40963C21.1725 6.71128 20.4579 6.91017 19.7257 6.99963C20.4871 6.54763 21.0617 5.83825 21.3457 4.99963C20.6226 5.43054 19.8312 5.73491 19.0057 5.89963C17.8581 4.69174 16.0446 4.39991 14.576 5.18677C13.1073 5.97363 12.3458 7.64506 12.7157 9.26963C9.73476 9.11103 6.96291 7.68874 5.0957 5.35963C4.11699 7.04658 4.61577 9.20358 6.2357 10.2896C5.65031 10.2717 5.07769 10.114 4.5657 9.82963C4.56806 11.5996 5.82691 13.1187 7.5657 13.4496C7.00909 13.6216 6.41968 13.6593 5.8457 13.5596C6.33182 15.0616 7.71733 16.0897 9.2957 16.1196C7.9919 17.1425 6.38285 17.6988 4.7257 17.6996C4.43164 17.7002 4.13781 17.6835 3.8457 17.6496C5.53406 18.7345 7.49886 19.3107 9.5057 19.3096Z"
                          fill="black"
                        />
                      </svg>
                    </a>
                  </dd>
                </dl>
              </div>
            </div>

            <div className="col-6 col-12-medium">
              <div className="col-child" />
            </div>
          </div>
        </div>
        <div className="footer-nav-bar">
          <ul className="footer-nav-bar-sites list-inline-center small">
            <li>
              <span>InfoJobs es parte de</span>
              <span>
                <a target="_blank" href="/">
                  Adevinta
                </a>
              </span>
            </li>
            <li>
              <a target="_blank" href="/">
                Fotocasa
              </a>
            </li>
            <li>
              <a target="_blank" href="/">
                habitaclia
              </a>
            </li>
            <li>
              <a target="_blank" href="/">
                Coches.net
              </a>
            </li>
            <li>
              <a target="_blank" href="/">
                Motos.net
              </a>
            </li>
            <li>
              <a target="_blank" href="/">
                Milanuncios
              </a>
            </li>
            <li>
              <a target="_blank" href="/">
                JobisJob
              </a>
            </li>
            <li>
              <span>© Adevinta Spain S.L.U. </span>
            </li>
          </ul>

          <div className="break">
            <ul className="footer-nav-bar-badges list-inline-center margin-top">
              <li>
                <a href="/" title="Adevinta">
                  <Image alt="Adevinta" src="/pic-adevinta-logo.png" width="80" height="20" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
