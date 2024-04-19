import Link from 'next/link';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer-3 bg-neutral-100">
        <div className="section">
          <div className="container">
            <div className="row g-4">
              <div className="col-xl-4">
                <Link href="/" className="logo mb-6">
                  <img src="/images/tafkeer_logo.png" alt="image" className="logo__img" />
                </Link>
                <p className="mb-6 t-short-para"> Empowering startups and emerging businesses, Al-Tafkeer al-Hadeth oil trading company fosters growth and enhances sales through contemporary knowledge and business strategies. </p>
                <p>
                  <span className="fw-md">Adress:</span> The Prism Tower, Business Bay, Dubai, UAE
                </p>
                <p>
                  <span className="fw-md">Email:</span> info@thoiltrading.com
                </p>
                <p>
                  <span className="fw-md">Phone:</span> +971 45-498-230
                </p>
              </div>
              <div className="col-md-3 col-xl-1">
                
              </div>
              <div className="col-md-3 col-xl-2">
                <h5 className="mb-10"> Menu </h5>
                <ul className="list list-xsm">
                  <li>
                    <Link href="about-us-1" className="t-link clr-heading :clr-base"> Home </Link>
                  </li>
                  <li>
                    <Link href="service-1" className="t-link clr-heading :clr-base"> About Us </Link>
                  </li>
                  <li>
                    <Link href="service-1" className="t-link clr-heading :clr-base"> Products </Link>
                  </li>
                  <li>
                    <Link href="pricing-plan-1" className="t-link clr-heading :clr-base"> News </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-xl-2">
                <h5 className="mb-10"> Products </h5>
                <ul className="list list-xsm">
                  <li>
                    <Link href="leadership-page" className="t-link clr-heading :clr-base"> Crude Oil </Link>
                  </li>
                  <li>
                    <Link href="getting-started" className="t-link clr-heading :clr-base"> Fuel Diesel </Link>
                  </li>
                  <li>
                    <Link href="blog-details-1" className="t-link clr-heading :clr-base"> Jet Fuel  </Link>
                  </li>
                  <li>
                    <Link href="service-details-1" className="t-link clr-heading :clr-base"> Gasoline </Link>
                  </li>
                  <li>
                    <Link href="service-details-1" className="t-link clr-heading :clr-base"> Fuel Oil  </Link>
                  </li>
                  <li>
                    <Link href="service-details-1" className="t-link clr-heading :clr-base"> Bitumen </Link>
                  </li>
                  <li>
                    <Link href="service-details-1" className="t-link clr-heading :clr-base"> Base Oil </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-xl-2">
                <h5 className="mb-10"> Support </h5>
                <ul className="list list-xs">
                  <li>
                    <Link href="contact-us-1" className="t-link clr-heading :clr-base"> Contact Us </Link>
                  </li>
                  <li>
                    <Link href="leadership" className="t-link clr-heading :clr-base"> Consulting </Link>
                  </li>
                  <li>
                    <Link href="facts-1" className="t-link clr-heading :clr-base"> Import / Export </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-section-3">
                <div className="row g-4 align-items-lg-center justify-content-xxl-between">
                  <div className="col-lg-6">
                    <div className="group group-sm group-sm-row align-items-center">
                      <div className="flex-shrink-0">
                        <img src="/images/cta-img-2.png" alt="image" className='w-40' />
                      </div>
                      <div className="flex-grow-1">
                        <h4 className="mb-3 text-center text-sm-start"> Subscribe to our newsletter </h4>
                        <p className="max-text-40 text-center mx-auto text-sm-start ms-sm-0"> Need more information? Subscribe to Newsletter & Get Update and News </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xxl-5">
                    <div className="newsletter-2">
                      <input type="text" className="newsletter-2__input placeholder-clr clr-heading" placeholder="Enter your email" />
                      <button className="bttn bttn--base bttn-md fw-md flex-shrink-0 rounded-1 newsletter-2__btn"> Subscribe </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 pb-8">
          <div className="container">
            <div className="row g-4 align-items-md-center">
              <div className="col-md-6">
                <p className="text-center text-md-start"> Copyright 2023 Al Tafkeer Alhadeth Oil Trading LLC All Rights Reserved. </p>
              </div>
              <div className="col-md-6">
                <ul className="list list-xs list-row justify-content-center justify-content-md-end">
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--xs social-icon--base-outline social-icon--circle">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--xs social-icon--base-outline social-icon--circle">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--xs social-icon--base-outline social-icon--circle">
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer> 
    );
};

export default Footer;