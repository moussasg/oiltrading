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
      <section className={Style.fueloilbaner}>
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h3 className="clr-light mb-3">Fuel Oil </h3>
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
                    Fuel Oil Details{" "}
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
              <div className="wow animate__animated animate__backInLeft">"Explore superior <span className="text-6wl font-extrabold fs-2">fuel oil</span> options on our platform, featuring meticulously crafted blends for optimal performance. Our commitment to excellence ensures</div>
              <div className="wow animate__animated animate__backInRight">reliable and high-quality fuel content for your trading needs. Elevate your oil transactions with us, where precision and reliability converge seamlessly."</div> 
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
                    src="/images/fueloil.jpg"
                    alt="image"
                    className="img-fluid w-auto h-auto"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xl-5 wow animate__animated animate__backInRight">
                <h4 className="mb-5">
                  {" "}
                  Global Oil Market Trends:              </h4>
                <p>
                  {" "}
                  Navigate the dynamic landscape of the global oil market with our insightful analysis. Gain valuable perspectives on price fluctuations, geopolitical influences, and emerging trends that impact the oil industry, empowering you to make informed decisions in the ever-evolving energy market.                  "{" "}
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
                  Renewable Energy Solutions:
            </h4>
                <p>
                  {" "}
                  Uncover the future of sustainable power with our comprehensive guide on cutting-edge renewable energy solutions. From solar innovations to wind power breakthroughs, stay informed and empowered to make environmentally conscious choices.
          </p>
              </div>
            </div>
            <div className="col-lg-6 wow animate__animated animate__backInRight">
              <img
                src="/images/fuel2.jpg"
                alt="image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="flex w-[100%] justify-center">
    <div className="flex justify-center bg-[#584d24] p-2 text-white text-xl sm:text-4xl font-extrabold w-full sm:w-[50%] wow animate__animated animate__backInUp">Fuel Oil </div>
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
     <div className="font-extrabold text-xl">What is Fuel Oil ? </div>
     <br></br>
     <div className="">Fuel oil is a type of petroleum-based liquid fuel derived from crude oil. It is commonly used for heating, power generation, and as a marine fuel. There are different grades of fuel oil, each with specific properties and applications.



</div>
     </div>
     <br></br>
     <div className="wow animate__animated animate__flipInX"> 
     <div className="font-extrabold text-xl">Specifications of Fuel Oil: </div>
     <br></br>
     <ul className="list-disc">
     <li> Fuel oil specifications depend on the grade but generally include parameters like viscosity, density, sulfur content, and flash point.
      <li>Common grades include Heavy Fuel Oil (HFO) and Light Fuel Oil (LFO), with distinctions based on their properties and intended applications.</li>
      <li>Regulations often dictate sulfur limits to reduce environmental impact, leading to low-sulfur variants like Low-Sulfur Fuel Oil (LSFO).</li>
</li>
    </ul>
    </div>
    <br></br>
    <div className="wow animate__animated animate__flipInX"> 
    <div className="font-extrabold text-xl">Applications of Fuel Oil:</div>
    <br></br>
    <br></br>
    <ul className="list-disc">
    <li> <span className="font-bold">Power Generation</span> iFuel oil is used in power plants to generate electricity, particularly in areas where other energy sources may be less accessible.</li>
    <li> <span className="font-bold">Heating</span> It serves as a heating fuel for residential, commercial, and industrial purposes.</li>
    <li> <span className="font-bold">Marine Industry:</span> Large ships and vessels often use heavy fuel oil for propulsion. However, there is a shift towards cleaner alternatives due to environmental concerns, leading to the development of low-sulfur marine fuels.</li>
    <li> <span className="font-bold">Marine Industry:</span> Large ships and vessels often use heavy fuel oil for propulsion. However, there is a shift towards cleaner alternatives due to environmental concerns, leading to the development of low-sulfur marine fuels.</li>
    <li> <span className="font-bold">Industrial Processes:</span> Some industries use fuel oil as a feedstock or fuel in various manufacturing processes.</li>
    <li> <span className="font-bold">Emergency Generators:</span>  Fuel oil is often used in backup generators for critical infrastructure in case of power outages.</li>

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
