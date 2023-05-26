export const OfferShare = ({ offer }: { offer: Offer }) => {
  return (
    <div className="col-4 col-12-medium no-print">
      <div className="col-child inner-s inner-expanded panel-canvas panel-rounded">
        <div className="text-center">
          <h3>Comparte esta oferta</h3>
          <ul className="list-default list-inline-center">
            <li>
              <a href="/" className="btn-small btn-tertiary" title="Comparte esta oferta en Facebook">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.8457 12C21.8457 7.02943 17.8163 3 12.8457 3C7.87514 3 3.8457 7.02943 3.8457 12C3.8457 16.4922 7.13687 20.2155 11.4395 20.8907V14.6016H9.1543V12H11.4395V10.0172C11.4395 7.76156 12.7831 6.51562 14.8389 6.51562C15.8236 6.51562 16.8535 6.69141 16.8535 6.69141V8.90625H15.7186C14.6006 8.90625 14.252 9.60001 14.252 10.3117V12H16.748L16.349 14.6016H14.252V20.8907C18.5545 20.2155 21.8457 16.4922 21.8457 12Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a href="/" id="twitter" className="btn-small btn-tertiary" title="Tweetea esta oferta">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.5057 19.3096C12.2988 19.3284 14.983 18.2272 16.9581 16.2521C18.9332 14.277 20.0345 11.5928 20.0157 8.79963C20.0157 8.63963 20.0157 8.47963 20.0157 8.31963C20.7339 7.79625 21.3535 7.14956 21.8457 6.40963C21.1725 6.71128 20.4579 6.91017 19.7257 6.99963C20.4871 6.54763 21.0617 5.83825 21.3457 4.99963C20.6226 5.43054 19.8312 5.73491 19.0057 5.89963C17.8581 4.69174 16.0446 4.39991 14.576 5.18677C13.1073 5.97363 12.3458 7.64506 12.7157 9.26963C9.73476 9.11103 6.96291 7.68874 5.0957 5.35963C4.11699 7.04658 4.61577 9.20358 6.2357 10.2896C5.65031 10.2717 5.07769 10.114 4.5657 9.82963C4.56806 11.5996 5.82691 13.1187 7.5657 13.4496C7.00909 13.6216 6.41968 13.6593 5.8457 13.5596C6.33182 15.0616 7.71733 16.0897 9.2957 16.1196C7.9919 17.1425 6.38285 17.6988 4.7257 17.6996C4.43164 17.7002 4.13781 17.6835 3.8457 17.6496C5.53406 18.7345 7.49886 19.3107 9.5057 19.3096Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a href="/" className="btn-small btn-tertiary" title="Comparte esta oferta en Linkedin">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.9357 2.50015H4.7457C3.98188 2.49457 3.35667 3.10638 3.3457 3.87015V20.1201C3.34835 20.4888 3.49733 20.8413 3.75989 21.1001C4.02244 21.3589 4.37705 21.5028 4.7457 21.5001H20.9357C21.3044 21.5055 21.66 21.3641 21.9245 21.1072C22.1889 20.8503 22.3404 20.4988 22.3457 20.1301V3.87015C22.3404 3.50148 22.1889 3.15002 21.9245 2.89308C21.66 2.63615 21.3044 2.4948 20.9357 2.50015ZM8.9357 18.6901H6.1657V9.62015H8.9757L8.9357 18.6901ZM7.5757 8.38015C6.67548 8.38015 5.9457 7.65037 5.9457 6.75015C5.9457 5.84992 6.67548 5.12015 7.5757 5.12015C8.47593 5.12015 9.2057 5.84992 9.2057 6.75015C9.2057 7.65037 8.47593 8.38015 7.5757 8.38015ZM19.5757 18.6901H16.7157V14.2801C16.7157 13.2301 16.7157 11.8801 15.2557 11.8801C13.7957 11.8801 13.5657 13.0001 13.5657 14.2001V18.6901H10.7457V9.62015H13.4457V10.8601C14.0045 9.9247 15.0266 9.36581 16.1157 9.40015C18.9657 9.40015 19.4957 11.2801 19.4957 13.7201L19.5757 18.6901Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
          </ul>

          <div className="margin-bottom margin-top hide-small-device hide-medium-device">
            <a href="javascript:xt_click(this,'C','1','view-offer::print','A'); print()" className="link">
              Imprime esta oferta
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
