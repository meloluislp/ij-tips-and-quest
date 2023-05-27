export const Header = () => {
  return (
    <header className="panel-canvas border-bottom">
      <section className="global-nav global-nav-logged">
        <a id="home-nologged-menu" href="javascript:;" className="js-open-menu nav-bar-toggle iconfont-BurguerMenu">
          <span>Menú</span>
        </a>
        <nav id="nav-mobile" className="nav-mobile">
          <div className="nav-bar-wrapper clearfix">
            <ul className="nav-bar-menu clearfix">
              <li>
                <a id="hdrLinkToHome" className="logo" href="/">
                  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2012_7275)">
                      <rect width="64" height="64" fill="#167DB7" />
                      <path
                        fill-rule="evenodd"
                        clipRule="evenodd"
                        d="M25.8863 43.0202C26.2761 43.0202 26.5683 42.7753 26.6171 42.4325L30.1245 13.3876V13.2896C30.1245 12.9957 29.9784 12.7998 29.6861 12.7998H29.5887H23.8403C23.4506 12.8488 23.4019 12.9957 23.3532 13.3386L19.8944 42.3835L19.8457 42.4814C19.8457 42.8243 20.138 43.0202 20.479 43.0202H25.8863ZM30.9527 51.1998C35.678 51.1998 39.6239 49.7304 40.4033 43.4121L44.1544 13.3876C44.1544 13.0937 44.0082 12.8978 43.6672 12.8978H43.5698L38.065 12.7998C37.724 12.8488 37.4317 13.0447 37.383 13.3876L33.7294 43.559C33.3397 46.5467 31.8782 46.7427 29.7835 46.8406C29.3885 46.8627 29.0231 46.8748 28.6874 46.886C28.2779 46.8995 27.9126 46.9117 27.5913 46.9386C26.958 46.9386 26.7145 47.0855 26.617 47.7712L26.3248 50.1223V50.3672C26.3248 50.8991 26.7047 50.9536 27.0425 51.002L27.0555 51.0039C27.1282 51.0136 27.1976 51.0234 27.2663 51.0331C27.8875 51.1204 28.4524 51.1998 30.9527 51.1998Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath>
                        <rect width="64" height="64" rx="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a href="/" className="active" title="Empleos">
                  Empleos
                </a>
              </li>
              <li>
                <a href="/" title="Mis ofertas">
                  Mis ofertas
                </a>
              </li>
              <li>
                <a href="/" title="CV">
                  CV
                </a>
              </li>
              <li>
                <a href="/" title="Quién me ve">
                  Quién me ve
                </a>
              </li>
            </ul>

            <div className="nav-bar-drop-down">
              <ul className="nav-bar-avatar clearfix">
                <li>
                  <a className="avatar js-menu-avatar profile-ellipsis" href="/">
                    <div className="child-avatar" data-hj-suppress="">
                      <div className="flex items-center justify-center bg-gray-400 w-10 h-10 rounded-full bg-opacity-10 ">
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="opacity-60"
                        >
                          <path
                            fill-rule="evenodd"
                            clipRule="evenodd"
                            d="M12.846 13.75C10.736 13.75 4.59598 14.92 4.59598 18.5V19.5C4.57922 20.4462 5.32992 21.2281 6.27598 21.25H19.406C19.8622 21.2421 20.2965 21.0533 20.6135 20.7251C20.9304 20.3969 21.104 19.9562 21.096 19.5V18.5C21.096 14.91 14.956 13.75 12.846 13.75ZM19.5957 19.5C19.5957 19.63 19.5157 19.75 19.4057 19.75H6.2757C6.1757 19.75 6.0957 19.64 6.0957 19.5V18.5C6.0957 16.5 10.5257 15.25 12.8457 15.25C15.1657 15.25 19.5957 16.52 19.5957 18.5V19.5ZM12.3457 12.25H13.3457C15.4168 12.25 17.0957 10.5711 17.0957 8.5V6.5C17.0957 4.42893 15.4168 2.75 13.3457 2.75H12.3457C10.2785 2.74999 8.60123 4.42284 8.59572 6.49V8.49C8.59306 9.48629 8.98697 10.4427 9.69052 11.1481C10.3941 11.8535 11.3494 12.25 12.3457 12.25ZM10.0957 6.49C10.1012 5.25127 11.107 4.24999 12.3457 4.25H13.3457C14.5883 4.25 15.5957 5.25736 15.5957 6.5V8.5C15.5957 9.74264 14.5883 10.75 13.3457 10.75H12.3457C11.1031 10.75 10.0957 9.74264 10.0957 8.5V6.49Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </header>
  )
}
