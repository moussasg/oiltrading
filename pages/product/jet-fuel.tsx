import Link from "next/link";

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Footer from "@/components/home_4/Footer";
import Style from "./index.module.css";
import Airplane from "../../public/images/airplane.png";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
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
      <section className={Style.bannerjet}>
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h3 className="clr-light mb-3"> Jet Fuel </h3>
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
                    Jet Fuel Details{" "}
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
               <div className="wow animate__animated animate__backInLeft">Experience the epitome of aviation excellence with our cutting-edge <span className="fs-2 text-6xl font-extrabold">Jet Fuel</span></div>
               <div className="wow animate__animated animate__backInRight">designed to meet the rigorous demands of modern aircraft technology. Trust in </div>
               <div className="wow animate__animated animate__backInLeft">the superior quality and performance that discerning pilots and airlines rely on </div>
               <div className="wow animate__animated animate__backInRight">to reach new heights safely and efficiently.</div>
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
                    src="/images/jetfuel.jpg"
                    alt="image"
                    className="img-fluid w-auto h-auto"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xl-5 wow animate__animated animate__backInRight">
                <h4 className="mb-5">
                  {" "}
                  Embark on a journey of aviation excellence with our premium jet fuel, meticulously refined to meet the rigorous standards of the aerospace industry
                </h4>
                <p>
                  {" "}
                  Designed for optimal performance, our jet fuel ensures the reliability and efficiency required for smooth takeoffs, secure flights, and seamless landings."
{" "}
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
                  Explore the skies with confidence, fueled by our advanced jet fuel formulations. Engineered for both safety and performance, our jet fuel is the trusted choice for airlines worldwide,            </h4>
                <p>
                  {" "}
                  offering a perfect balance between cutting-edge technology and a steadfast commitment to the highest quality standards."
          </p>
              </div>
            </div>
            <div className="col-lg-6 wow animate__animated animate__backInRight">
              <img
                src="/images/jetfuelsecond.jpg"
                alt="image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="flex w-[100%] justify-center">
    <div className="flex justify-center bg-[#584d24] p-2 text-white text-xl sm:text-4xl font-extrabold w-full sm:w-[50%] wow animate__animated animate__backInUp">jet Fuel </div>
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
     <div className="">The Impact of Environmental Conditions on the Properties of Bitumen 60/70</div>
     <div className="font-extrabold text-xl">What is Jet Fuel ? </div>
     <br></br>
     <div className="">Jet fuel is a specialized type of aviation fuel designed for use in aircraft with gas turbine engines, such as jet engines. It is a refined product derived from crude oil through a precise refining process to meet the stringent requirements of aviation standards.

</div>
     </div>
     <br></br>
     <div className="wow animate__animated animate__flipInX"> 
     <div className="font-extrabold text-xl">Specifications of Jet Fuel : </div>
     <br></br>
     <ul className="list-disc">
     <li> <span className="font-bold">Flash Point :</span> The minimum temperature at which the fuel can vaporize enough to form an ignitable mixture.</li>
     <li> <span className="font-bold">Freezing Point :</span> The temperature at which the fuel solidifies, crucial for high-altitude flights.</li>
     <li> <span className="font-bold">Density :</span> Important for fuel efficiency and load calculations.</li>
     <li> <span className="font-bold"> Sulfur Content:</span> Lower sulfur levels reduce emissions and meet environmental regulations.</li>
     <li> <span className="font-bold">Cetane Number:</span> A measure of combustion quality for diesel fuels used in some aviation applications.</li>
    </ul>
    </div>
    <br></br>
    <div className="wow animate__animated animate__flipInX"> 
    <div className="font-extrabold text-xl">Applications of Jet Fuel:</div>
    <br></br>
    Jet fuel is exclusively used in aviation for:
    <br></br>
    <ul className="list-disc">
    <li> <span className="font-bold">Commercial Aviation:</span>Powering jet engines of commercial airplanes for passenger and cargo transport.</li>
    <li> <span className="font-bold">Military Aviation:</span>Fueling military aircraft, including fighter jets, bombers, and transport planes.</li>
    <li> <span className="font-bold">General Aviation:</span>Used in smaller private and recreational aircraft with turbine engines.</li>

    </ul>
    The unique properties of jet fuel, tailored to the demanding conditions of high-altitude flights, make it an essential component in the aviation industrie
    </div>
       </div>
    </TabPanel>
  </Tabs>
  </div>
      <br></br>

              
       <Footer/> 
    </>
  );
};

export default service_1;
