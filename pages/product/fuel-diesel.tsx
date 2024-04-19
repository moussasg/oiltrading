import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from 'react';
import Footer from "@/components/home_4/Footer";
import Style from "./index.module.css"
import Oil from "../../public/images/oildrop.png";
import { IoMdDoneAll } from "react-icons/io";
import { FaCircleArrowRight } from "react-icons/fa6";
import Service from "@/components/home_1/Service";
import Dolar from "../../public/images/dolars.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
const service_details_1 = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const [secondhovered, setsecondhovered] = useState(false);
  const [treehovered, settreehovered] = useState(false);
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
      <Navbar rtlurl="/rtl/service-details-1" />
      {/* Banner section */}
      <section className={Style.bannerdiesel}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> Fuel Diesel (D2 , D6) </h3>
              <ul className="list list-row flex-wrap breadcrumb-list">
                <li>
                  <Link
                    href="/"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Products{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Fuel Diesel Details {" "}
                  </Link>
                </li>
                <li className="d-none">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent"></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <div className="section--sm section--top bg-base">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center clr-light mb-8 fs-2">
                  <div className="wow animate__animated animate__backInRight">"Explore the power and efficiency of <span className="font-extrabold 6xl">Diesel Fuel,</span> providing efficient </div>
                  <div className="wow animate__animated animate__backInLeft">combustion and superior energy density. Dive into our detailed description to</div> 
                <div className="wow animate__animated animate__backInRight">discover the benefits of our exceptional-quality diesel fuel."</div>{" "}
              </div>
            </div>
            <div className="col-lg-8">
              <ul className="list list-row flex-wrap align-items-center justify-content-center justify-content-sm-between wow animate__animated animate__backInLeft">
                <li>
                  <div className="group group-sm group-row align-items-center">
                    <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle border border-2 border-light">
                      <span className="user__img rounded-circle">
                        <img
                          src="/images/ahamd.jpg"
                          alt="image"
                          className="user__img-is"
                        />
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="clr-light"> Abdollah Ahmadi </h5>
                    </div>
                  </div>
                </li>
                <li>
                  <ul className="list list-xs list-row justify-content-sm-end">
                  <li>
                      <Link
                        href="https://www.facebook.com/Thoiltrading" target="_blank"
                        className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://twitter.com/thoiltrading" target="_blank"
                        className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/thoiltrading" target="_blank"
                        className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
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
                    src="/images/fuelpic.jpg"
                    alt="image"
                    className="img-fluid w-auto h-auto"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xl-5 wow animate__animated animate__backInRight">
                <h4 className="mb-5">
                  {" "}
                  Immerse yourself in the unparalleled efficiency of our diesel fuel, meticulously crafted to power industries and transportation with optimal performance.
                </h4>
                <p>
                  {" "}
                  Our commitment to delivering high-quality diesel extends beyond fueling engines – it's a catalyst for progress, driving sustainability and reliability in every drop."
"{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-xl-5 wow animate__animated animate__backInLeft">
              <div className="section__gap-bottom pb-lg-0">
                <h4 className="mb-5">
                  {" "}
                  Step into the future of diesel fuel with our cutting-edge offerings that not only propel engines but also redefine environmental responsibility.            </h4>
                <p>
                  {" "}
                  As a beacon of innovation, our diesel fuels are engineered for maximum efficiency, reduced emissions, and a greener tomorrow, aligning with the evolving landscape of sustainable energy solutions.                </p>
              </div>
            </div>
            <div className="col-lg-6 wow animate__animated animate__backInRight">
              <img
                src="/images/diesel-fuel-tanks.jpg"
                alt="image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="flex w-[100%] justify-center">
    <div className="flex justify-center bg-[#584d24] p-2 text-white text-xl sm:text-4xl font-extrabold w-full sm:w-[50%] wow animate__animated animate__backInUp">Fuel Diesel </div>
    </div>
   <br></br>
   <div className='flex w-full h-[100%] relative justify-center'>
    <Tabs className='relative w-full sm:w-[70%] h-[100%]'>
    <TabList>
      <Tab>Description </Tab>
    </TabList>
    <TabPanel>
      <div className="Description text-black">
      <div className="wow animate__animated animate__flipInX"> 
     <div className="font-extrabold text-xl">What is Fuel Diesel? </div>
     <br></br>
     <div className="">Fuel diesel, commonly known as diesel, is a refined petroleum product used as a fuel for diesel engines. It's derived from crude oil through a refining process and is known for its high energy density.</div>
     </div>
     <br></br>
     <div className="wow animate__animated animate__flipInX"> 
     <div className="font-extrabold text-xl">Specifications of Fuel Diesel : </div>
     <br></br>
     <ul className="list-disc ">
     <li> Fuel diesel specifications include parameters like cetane number, sulfur content, and density. These specifications ensure efficient combustion, reduced emissions, and optimal engine performance.</li>
    </ul>
    </div>
    <br></br>
    <div className="wow animate__animated animate__flipInX"> 
    <div className="font-extrabold text-xl">Applications of Fuel Diesel : </div>
    <br></br>
    <ul className="list-disc">
     <li>Fuel diesel is widely used in transportation, powering diesel engines in cars, trucks, buses, and ships. It's also utilized in industrial settings for generators and machinery, owing to its energy efficiency and versatility.</li>
    </ul>
    </div>
       </div>
    </TabPanel>
  </Tabs>
  </div>
  <Footer />
    </>
  );
};

export default service_details_1;
