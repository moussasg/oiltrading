import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import Footer from "@/components/home_4/Footer";
import Style from "./index.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaRegFilePdf,
  FaTwitter,
} from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const service_1 = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);

  let WOW;
  if (typeof window !== "undefined") {
    WOW = require("wow.js");
  }

  useEffect(() => {
    // Initialize WOW only if it's available (i.e., on the client side)
    if (typeof window !== "undefined") {
      const wow = new WOW();
      wow.init();
    }
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar rtlurl="/rtl/service-1" />
      {/* Banner section */}
      <section className={Style.banerbaseoil}>
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h3 className="clr-light mb-3">Base Oil </h3>
              <ul className="list list-row flex-wrap breadcrumb-list">
                <li>
                  <Link
                    href="/"
                    className="d-inline-block t-link clr-light :clr-accent"
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent"
                  >
                    {" "}
                    Products{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent"
                  >
                    {" "}
                    Base Oil Details{" "}
                  </Link>
                </li>
                <li className="d-none">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent"
                  ></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <div className="section--sm section--top bg-base">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center clr-light mb-8 fs-2">
                <div className="wow animate__animated animate__backInLeft">
                  "Empower your lubricant manufacturing endeavors with our
                  premium <span className="font-extrabold 6xl">Base Oil</span>{" "}
                </div>
                <div className="wow animate__animated animate__backInRight">
                  products, meticulously refined to meet the highest industry
                  standards, ensuring{" "}
                </div>
                <div className="wow animate__animated animate__backInLeft">
                  optimal performance and longevity for your formulations.
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <ul className="list list-row flex-wrap align-items-center justify-content-center justify-content-sm-between">
                <li>
                  <div className="group group-sm group-row align-items-center wow animate__animated animate__backInLeft">
                    <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle border border-2 border-light">
                      <div className="user__img rounded-circle">
                        <img
                          src="/images/ahamd.jpg"
                          alt="image"
                          className="user__img-is"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="clr-light"> Abdollah Ahmadi </h5>
                    </div>
                  </div>
                </li>
                <li>
                  <ul className="list list-xs list-row justify-content-sm-end wow animate__animated animate__backInRight">
                    <li>
                      <Link
                        href="https://www.facebook.com/Thoiltrading"
                        target="_blank"
                        className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle"
                      >
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://twitter.com/thoiltrading"
                        target="_blank"
                        className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle"
                      >
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/thoiltrading"
                        target="_blank"
                        className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle"
                      >
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
      <br></br>
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="section__gap-bottom pb-lg-0 wow animate__animated animate__backInLeft">
                  <img
                    src="/images/baseoil2.jpg"
                    alt="image"
                    className="img-fluid w-auto h-auto"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xl-5 wow animate__animated animate__backInRight">
                <h4 className="mb-5">
                  {" "}
                  Discover the multifaceted uses of base oil, an essential element extracted from crude oil{" "}
                </h4>
                <p>
                  {" "}
                  prominently showcased in our extensive array of oil trading products. Whether contributing to the development of sturdy road networks or delivering efficient solutions for various projects' waterproofing needs, base oil plays a pivotal role in the energy and construction industries."{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-xl-5 wow animate__animated animate__backInLeft">
              <div className="section__gap-bottom pb-lg-0">
                <h4 className="mb-5"> Uncover the diverse applications of base oil , prominently highlighted within our comprehensive selection of oil trading offerings</h4>
                <p>
                  {" "}
                  From bolstering the construction of resilient road infrastructure to delivering effective solutions for a wide range of waterproofing projects, base oil remains a fundamental cornerstone in both the energy and construction sectors. Explore the versatility of this essential component that fuels innovation and reliability across various industries.
                </p>
              </div>
            </div>
            <div className="col-lg-6 wow animate__animated animate__backInRight">
              <img
                src="/images/baseoilcont.jpg"
                alt="image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <div className="flex w-[100%] justify-center">
        <div className="flex justify-center bg-[#584d24] p-2 text-white text-xl sm:text-4xl font-extrabold w-full sm:w-[50%] wow animate__animated animate__backInUp">
          Base Oil{" "}
        </div>
      </div>
      <br></br>

      <div className="flex w-full h-[100%] relative justify-center">
        <Tabs className="relative w-full sm:w-[70%] h-[100%]">
          <TabList>
            <Tab>Description </Tab>
            <Tab>Analyse</Tab>
            <Tab>Analyse Documents</Tab>
          </TabList>
          <TabPanel>
            <div className="Description text-black">
              <div className="wow animate__animated animate__flipInX">
                <div className="font-extrabold text-xl">What is Base oil ?</div>
                <br></br>
                <div className="">
                  Base Oil is the name given to Lubrication Oil grades produced
                  by means of refining Crude Oil. During heating crude oil
                  processing, light and heavy hydrocarbons are separated and the
                  heaviest are suitable to produce Bitumen and Baseoil this
                  product are used to manufacture products including lubricating
                  greases, motor oil and metal processing fluids. Different
                  products require different compositions and properties in the
                  oil. One of the most important factors is the liquid’s
                  viscosity at various temperatures. Whether or not a crude oil
                  is suitable to be made into a base oil is determined by the
                  concentration of this product molecules as well as how easily
                  these can be extracted.
                </div>
              </div>
              <br></br>
              <div className="wow animate__animated animate__flipInX">
                <div className="font-extrabold text-xl">
                  Specifications of Base Oil : {" "}
                </div>
                In various viscosity range including:
                <br></br>
                <ul className="list-disc ">
                  <li>SN100</li>
                  <li>SN150</li>
                  <li>SN300</li>
                  <li>SN350</li>
                  <li>SN500</li>
                  <li>SN600</li>
                  <li>SN650</li>
                  <li>SN900</li>
                </ul>
              </div>
              <br></br>
              <div className="wow animate__animated animate__flipInX">
                <div className="font-extrabold text-xl">
                  Types of Base Oil most exported from Iran:
                </div>
                <br></br>
                <ul className="list-disc">
                  <li>SN100</li>
                  <li>SN150</li>
                  <li>SN500</li>
                </ul>
                Base Oils are available for sale in bulk and various packages
                Such as drum, flexi-tank and IBC. Read more details about using
                this product here
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <br></br>
            <div className="flex w-auto h-auto flex-col items-center wow animate__animated animate__backInUp">
              <table className="table-auto justify-center border border-gray-950 text-xs sm:text-xl">
                <thead>
                  {" "}
                  {/* first row*/}
                  <tr className="border-gray-950  h-0 sm:h-20">
                    {" "}
                    {/* first row*/}
                    <td className="border-r bg-base font-medium border-l border-t border-b p-2  w-auto text-white text-xs sm:text-4xl">
                      SN100 Virgin
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center w-auto text-black  text-xs sm:text-4xl">
                      UNIT
                    </td>
                    <td className="border-r border-l border-t border-b p-2  text-black  text-xs sm:text-4xl w-auto">
                      Speceification
                    </td>
                    <td className="border-r  border-l border-t   border-b p-2 w-auto text-black  text-xs sm:text-4xl">
                      Test Method
                    </td>
                  </tr>
                </thead>
                <tbody className="text-black">
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2  w-auto h-10">
                      Appearance
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      -
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      C & B
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Visual
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Color
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      -
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      2-2.5
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-1500
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Density @ 15°C
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      kg/m3{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      0.870{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-1298
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Kinematic viscosity @ 40°C
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      mm2/S (cSt){" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      -
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-445
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Kinematic viscosity @ 100°C{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      mm2/S (cSt)
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      5{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-445
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Viscosity Index
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      –
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                       90
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-2270
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Flash Point{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      °C{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      200-205
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-92
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Pour Point{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      °C
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Max -6
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-97
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Noack @ 250°C{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      % wt{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      10{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-5800
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Sulfur Content
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      % wt{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      0.05{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-2622
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br></br>

            <div className="flex w-auto h-auto flex-col items-center wow animate__animated animate__backInUp">
              <table className="table-auto justify-center border border-gray-950 text-xs sm:text-xl">
                <thead>
                  {" "}
                  {/* first row*/}
                  <tr className="border-gray-950  h-0 sm:h-20">
                    {" "}
                    {/* first row*/}
                    <td className="border-r border-l border-t border-b p-2  w-auto text-white font-medium bg-[#584d24] text-xs sm:text-4xl">
                      SN150
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center w-auto text-black  text-xs sm:text-4xl">
                      UNIT
                    </td>
                    <td className="border-r border-l border-t border-b p-2  text-black  text-xs sm:text-4xl w-auto">
                      Speceification
                    </td>
                    <td className="border-r  border-l border-t   border-b p-2 w-auto text-black  text-xs sm:text-4xl">
                      Test Method
                    </td>
                  </tr>
                </thead>
                <tbody className="text-black">
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2  w-auto h-10">
                      Appearance
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      -
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      C & B
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Visual
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Color
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      -
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      2
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-1500
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Density @ 15°C
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      kg/m3{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      0.860{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-1298
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Kinematic viscosity @ 40°C
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      mm2/S (cSt){" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      -
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-445
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Kinematic viscosity @ 100°C{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      mm2/S (cSt)
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      4{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-445
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Viscosity Index
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      –
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      90
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-2270
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Flash Point{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      °C{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2 w-auto h-10">
                      175
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-92
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Pour Point{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      °C
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      -3
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-97
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Noack @ 250°C{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      % wt{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      25{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-5800
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Sulfur Content
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      % wt{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      0.05{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-2622
                    </td>
                  </tr>
                </tbody>
              </table>
              <br></br>
              <table className="table-auto justify-center border border-gray-950 text-xs sm:text-xl">
                <thead>
                  {" "}
                  {/* first row*/}
                  <tr className="border-gray-950  h-0 sm:h-20">
                    {" "}
                    {/* first row*/}
                    <td className="border-r border-l border-t border-b p-2  w-auto text-white font-medium bg-base text-xs sm:text-4xl">
                      SN500
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center w-auto text-black  text-xs sm:text-4xl">
                      UNIT
                    </td>
                    <td className="border-r border-l border-t border-b p-2  text-black  text-xs sm:text-4xl w-auto">
                      Speceification
                    </td>
                    <td className="border-r  border-l border-t   border-b p-2 w-auto text-black  text-xs sm:text-4xl">
                      Test Method
                    </td>
                  </tr>
                </thead>
                <tbody className="text-black">
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2  w-auto h-10">
                      Appearance
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      -
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      C & B
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Visual
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Color
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      -
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Max 2
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-1500
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Density @ 15°C
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      kg/m3{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      -{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-4052
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Kinematic viscosity @ 40°C
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      mm2/S (cSt){" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      -
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-445
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Kinematic viscosity @ 100°C{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      mm2/S (cSt)
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      10.75-11.5{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-445
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Viscosity Index
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      –
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Min 87
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-2270
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Flash Point{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      °C{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2 w-auto h-10">
                      Min 235
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-92
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Pour Point{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      °C
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      MAx -3
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-97
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Noack @ 250°C{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      % wt{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      MAX 5{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-5800
                    </td>
                  </tr>
                  <tr className="border-gray-950">
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      Sulfur Content
                    </td>
                    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
                      % wt{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                     -{" "}
                    </td>
                    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
                      ASTM D-4951
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br></br>
          </TabPanel>
          <TabPanel>
            <div className="flex w-full relative mt-[4%] wow animate__animated animate__backInLeft">
            <div className="flex w-full justify-center gap-x-3"> 
            <FaRegFilePdf style={{ fontSize: "3em" }} />
              <Link
                href={"/pdf/sn100.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-black font-bold flex h-full items-center">
                  {" "}
                  SN100 Virgin Pdf{" "}
                </button>{" "}
              </Link>
              <FaRegFilePdf style={{ fontSize: "3em" }} />
              <Link
                href={"/pdf/sn150.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <button className="text-black font-bold flex h-full items-center">
                  {" "}
                  SN150 Pdf{" "}
                </button>{" "}
              </Link>
              <FaRegFilePdf style={{ fontSize: "3em" }} />
              <Link
                href={"/pdf/sn500.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <button className="text-black font-bold flex h-full items-center">
                  {" "}
                  SN500 Pdf{" "}
                </button>{" "}
              </Link>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default service_1;
