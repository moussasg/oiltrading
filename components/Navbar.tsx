import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Mobilemenu from "./Mobilemenu";
import { useTheme } from "next-themes";
import Link from "next/link";
import {useState, useEffect} from 'react';

const Navbar = ({rtlurl}) => {
    const [mounted, setMounted] = useState(false)  
    const { theme, setTheme } = useTheme();
    const inactiveTheme = theme === "light" ? "dark" : "light";
    const openMobileMenu = () => {
      document.body.classList.toggle("mobile-menu--toggle")
    } 
    useEffect(() => {
      setMounted(true)
    }, [])
    
    if (!mounted) {
      return null
    }
  return (
    <>
      <Mobilemenu />
      <div className="header-top-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
            <ul className="list list-row flex-wrap list--divider align-items-center justify-content-center justify-content-lg-start">
                  <li>
                    <Link
                      href="#"
                      className="t-link group group-row group-xs align-items-center">
                      <span className="icon-box icon-box--xs circle bg-neutral-300">
                        <span className="material-symbols-rounded mat-icon size-20 fw-300 lh-1 clr-base">
                          {" "}
                          mail{" "}
                        </span>
                      </span>
                      <span className="d-none d-xl-inline-block clr-heading">
                        {" "}
                        info@thoiltrading.com{" "}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="t-link group group-row group-xs align-items-center">
                      <span className="icon-box icon-box--xs circle bg-neutral-300">
                        <span className="material-symbols-rounded mat-icon size-20 fw-300 lh-1 clr-base">
                          {" "}
                          phone_in_talk{" "}
                        </span>
                      </span>
                      <span className="d-none d-xl-inline-block clr-heading">
                        {" "}
                        +971 45-498-230{" "}
                      </span>
                    </Link>
                  </li>
                  <li className="t-be-md-0">
                    <Link
                      href="#"
                      className="t-link group group-row group-xs align-items-center">
                      <span className="icon-box icon-box--xs circle bg-neutral-300">
                        <p className="material-symbols-rounded mat-icon size-20 fw-300 lh-1 clr-base">
                          {" "}
                          location_pin{" "}
                        </p>
                      </span>
                      <span className="d-none d-xl-inline-block clr-heading">
                        {" "}
                        The Prism Tower, Business Bay, Dubai{" "}
                      </span>
                    </Link>
                  </li>
                  <li className="ms-md-auto">
                    <ul className="list list-xs list-row">
                      <li>
                        <Link
                          href="https://facebook.com/thoiltrading"
                          className="t-link social-icon social-icon--xs clr-heading :clr-base lg-text">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://twitter.com/thoiltrading"
                          className="t-link social-icon social-icon--xs clr-heading :clr-base lg-text">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.instagram.com/thoiltrading/"
                          className="t-link social-icon social-icon--xs clr-heading :clr-base lg-text">
                          <FaInstagram />
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header Top End --> */}
      {/* <!-- Header  --> */}
      <header className="header header--2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <!-- Mobile Header  --> */}
              <div className="mobile-header">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="mobile-header__content">
                          {/* <!-- Logo  --> */}
                          <Link href="/" className="logo">
                            <img
                              src="/images/tafkeer_logo.png"
                              alt="image"
                              className="logo__img logo__dark"
                            />
                            <img
                              src="/images/tafkeer_logo.png"
                              alt="image"
                              className="logo__img logo__light"
                            />
                          </Link>
                          {/* <!-- Logo end --> */}
                          {/* <!-- Mobile Menu Toggle  --> */}
                          <button onClick={openMobileMenu} className="bttn bttn--sqr bttn--sqr-sm bttn--light bttn--rounded mobile-menu__toggler">
                            <span className="material-symbols-rounded mat-icon fw-300">
                              {" "}
                              menu{" "}
                            </span>
                          </button>
                          {/* <!-- Mobile Menu Toggle End --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/* <!-- Mobile Header End --> */}
              {/* <!-- Primary Menu  --> */}
              <nav className="primary-menu align-items-center">
                {/* <!-- Logo --> */}
                <Link href="/" className="logo">
                    <img
                      src="/images/tafkeer_logo.png"
                      alt="image"
                      className="logo__img logo__dark"
                    />
                    <img
                      src="/images/tafkeer_logo.png"
                      alt="image"
                      className="logo__img logo__light"
                    />
                  </Link>
                {/* <!-- Logo End --> */}
                <ul className="list primary-menu__list">
                    <li>
                      <Link href="/" className="primary-menu__link">
                        {" "}
                        Home{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us" className="primary-menu__link">
                        {" "}
                        About Us{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="primary-menu__link has-sub">
                        {" "}
                        Products{" "}
                      </Link>
                      <ul className="list sub-menu">
                        <li>
                          <Link
                            href="/product/crude-oil"
                            className="sub-menu__link">
                            {" "}
                            Crude Oil{" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/product/fuel-diesel"
                            className="sub-menu__link">
                            {" "}
                            Fuel Diesel (D2, D6){" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/product/jet-fuel"
                            className="sub-menu__link">
                            {" "}
                            Jet Fuel (JP54, JP8, JA1, JA19191){" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/product/gasoline"
                            className="sub-menu__link">
                            {" "}
                            Gasoline (88 ron, 95 ron){" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/product/fuel-oil"
                            className="sub-menu__link">
                            {" "}
                            Fuel Oil (Mazut){" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/product/bitumen"
                            className="sub-menu__link">
                            {" "}
                            Bitumen (40/50, 60/70, 80/100, 85/100){" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/product/base-oil"
                            className="sub-menu__link">
                            {" "}
                            Base Oil{" "}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        href="/news" 
                        className="primary-menu__link">
                        {" "}
                        News{" "}
                      </Link>
                    </li>
                    {/* <li className="ms-auto border-end border-light-subtle">
                      <Link
                        href="/rtl/home-3"
                        className="primary-menu__link py-0 px-3">
                        {" "}
                        RTL{" "}
                      </Link>
                    </li> */}
                    {/* <li>
                      <button
                        className="dark-mode-toggle"
                        onClick={() => setTheme(inactiveTheme)}>
                        {theme != "light" ? (
                          <span className="dark-mode-toggle__light">
                            <span className="material-symbols-rounded mat-icon">
                              {" "}
                              light_mode{" "}
                            </span>
                          </span>
                        ) : (
                          <span className="dark-mode-toggle__dark">
                            <span className="material-symbols-rounded mat-icon">
                              {" "}
                              dark_mode{" "}
                            </span>
                          </span>
                        )}
                      </button>
                    </li> */}
                    <li>
                      <Link
                        href="contact"
                        className="bttn bttn--base bttn-sm bttn-pill fw-md flex-shrink-0">
                        {" "}
                        Contact Us{" "}
                      </Link>
                    </li>
                  </ul>
              </nav>
              {/* <!-- Primary Menu End --> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
