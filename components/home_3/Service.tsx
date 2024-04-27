import Link from 'next/link';

const Service = () => {

  return (
    <div className="container container-restricted wow animate__animated animate__slideInUp animate__slow">
      <div className="row ">
        <div className="col-12">
          <div className="section bg-base rounded-4 px-md-8 px-lg-10 px-xxl-12">
            <div className="container">
              <div className="row justify-content-xxl-between">
                <div className="col-xl-6">
                  <div className="section__gap-bottom pb-xl-0 position-sticky top-60">
                    <span className="d-inline-block h5 lh-1 fw-semibold clr-accent overlay-text"> Checkout the latest rate detials  <span className="overlay-text__content-alt">PLATTS</span>
                    </span>
                    <h2 className="mt-5 mb-10 clr-light">Global Commodity Insights Platts </h2>
                    <Link href="product/crude-oil" className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md"> Learn More <span className="material-symbols-rounded mat-icon fw-300 bttn__icon"> chevron_right </span>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-xxl-5">
                  <ul className="list gap-0 service-link-list">
                    <li>
                      <Link href="/platts/asia_platts.pdf" target='_blank' className="t-link service-link service-link--accent clr-light :clr-light">
                        <span className="group group-row align-items-center">
                          <span className="icon-box icon-box--md circle bg-light flex-shrink-0">
                            <img src="/images/icon-25.png" alt="image" />
                          </span>
                          <span className="d-inline-block service-link__title fw-bold">Asia</span>
                        </span>
                        <span className="service-link__icon">
                          <span className="material-symbols-outlined mat-icon"> arrow_forward_ios </span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/platts/europe_platts.pdf" target='_blank' className="t-link service-link service-link--accent clr-light :clr-light">
                        <span className="group group-row align-items-center">
                          <span className="icon-box icon-box--md circle bg-light flex-shrink-0">
                            <img src="/images/icon-25.png" alt="image" />
                          </span>
                          <span className="d-inline-block service-link__title fw-bold">Europe</span>
                        </span>
                        <span className="service-link__icon">
                          <span className="material-symbols-outlined mat-icon"> arrow_forward_ios </span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/platts/africa_platts.pdf" target='_blank' className="t-link service-link service-link--accent clr-light :clr-light">
                        <span className="group group-row align-items-center">
                          <span className="icon-box icon-box--md circle bg-light flex-shrink-0">
                            <img src="/images/icon-25.png" alt="image" />
                          </span>
                          <span className="d-inline-block service-link__title fw-bold">Africa</span>
                        </span>
                        <span className="service-link__icon">
                          <span className="material-symbols-outlined mat-icon"> arrow_forward_ios </span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/platts/usa_platts.pdf" target='_blank' className="t-link service-link service-link--accent clr-light :clr-light">
                        <span className="group group-row align-items-center">
                          <span className="icon-box icon-box--md circle bg-light flex-shrink-0">
                            <img src="/images/icon-25.png" alt="image" />
                          </span>
                          <span className="d-inline-block service-link__title fw-bold"> USA </span>
                        </span>
                        <span className="service-link__icon">
                          <span className="material-symbols-outlined mat-icon"> arrow_forward_ios </span>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;