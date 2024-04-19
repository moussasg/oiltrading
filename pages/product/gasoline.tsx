import Link from "next/link";

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Footer from "@/components/home_4/Footer";
import Style from "./index.module.css";
import Airplane from "../../public/images/airplane.png";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
const service_1 = () => {
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
      <Navbar rtlurl="/rtl/service-1" />
      {/* Banner section */}
      <section className={Style.bannergasoline}>
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h3 className="clr-light mb-3"> Gasoline </h3>
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
                    Gasoline Details{" "}
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
              <div className="wow animate__animated animate__backInRight">"Discover the driving force behind global mobility with our comprehensive guide on <span className="6xl font-extrabold">gasoline</span> the lifeblood of the automotive world.</div> 
              <div className="wow animate__animated animate__backInLeft">Uncover the intricacies of our premium gasoline products, meticulously refined to power your journeys with unrivaled efficiency and performance."</div>
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
                    src="/images/gasoline.jpeg"
                    alt="image"
                    className="img-fluid w-auto h-auto"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xl-5 wow animate__animated animate__backInRight">
                <h4 className="mb-5">
                  {" "}
                  Immerse yourself in the world of high-performance energy with our premium gasoline products,               </h4>
                <p>
                  {" "}
                  crafted to power your journey with efficiency and reliability. Our extensive range of gasoline blends is meticulously curated to meet the stringent demands of modern engines, "
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
                  Ignite your journey with our premium gasoline selection, meticulously engineered to fuel your drive with unrivaled efficiency and performance.          </h4>
                <p>
                  {" "}
                  offering a perfect balance between cutting-edge technology and a steadfast commitment to the highest quality standards."
          </p>
              </div>
            </div>
            <div className="col-lg-6 wow animate__animated animate__backInRight">
              <img
                src="/images/gasoline.png"
                alt="image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="flex w-[100%] justify-center">
    <div className="flex justify-center bg-[#584d24] p-2 text-white text-xl sm:text-4xl font-extrabold w-full sm:w-[50%] wow animate__animated animate__backInUp">Gasoline </div>
    </div>
    <br></br> 
      <br></br>
      <div className='flex w-full h-[100%] relative justify-center'>
    <Tabs className='relative w-full sm:w-[70%] h-[100%]'>
    <TabList>
      <Tab>Description </Tab>
    </TabList>
    <TabPanel>
      <div className="Description text-black">
      <div className="wow animate__animated animate__flipInX"> 
     <div className="font-extrabold text-xl">What is Gasoline ? </div>
     <br></br>
     <div className="">Gasoline, also known as petrol, is a combustible liquid derived from crude oil and primarily used as fuel for internal combustion engines in vehicles.

</div>
     </div>
     <br></br>
     <div className="wow animate__animated animate__flipInX"> 
     <div className="font-extrabold text-xl">Specifications of Gasoline : </div>
     <br></br>
     <ul className="list-disc">
     <li> Gasoline specifications include a mixture of hydrocarbons with additives to enhance combustion, increase octane levels, and prevent engine deposits. These specifications ensure optimal engine performance and efficiency.

</li>
    </ul>
    </div>
    <br></br>
    <div className="wow animate__animated animate__flipInX"> 
    <div className="font-extrabold text-xl">Applications of Gasoline:</div>
    <br></br>
    <br></br>
    <ul className="list-disc">
    <li> Gasoline is widely used as a fuel for various modes of transportation, such as cars, motorcycles, and small engines. Its application is crucial in powering internal combustion engines, providing a convenient and efficient energy source for vehicles globally.</li>

    </ul>
    </div>
       </div>
    </TabPanel>
  </Tabs>
  </div>
      <br></br>            
       <Footer /> 
    </>
  );
};

export default service_1;
