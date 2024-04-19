import Link from "next/link";
import 'react-tabs/style/react-tabs.css';
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Footer from "@/components/home_4/Footer";
import Oil from "../../public/images/oildrop.png";
import Barel from "../../public/images/barel.png"
import Composition from "../../public/images/chemicalcomp.png";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaFacebookF, FaInstagram,  FaRegFilePdf,  FaTwitter } from "react-icons/fa";
import Style from "./index.module.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
      <section className={Style.bannercrude}>
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h3 className="clr-light mb-3"> Crude Oil </h3>
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
                    Crude Oil Details{" "}
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
               <div className="wow animate__animated animate__backInLeft">" Unlock the potential of <span className="font-extrabold 6xl">Crude Oil,</span>  the raw essence of energy. Delve into our  </div>
                <div className="wow animate__animated animate__backInRight">comprehensive description to uncover the versatility and applications of this</div>
                <div className="wow animate__animated animate__backInLeft">fundamental natural resource."</div>
              </div>
            </div>
            <div className="col-lg-8">
              <ul className="list list-row flex-wrap align-items-center justify-content-center justify-content-sm-between">
                <li>
                  <div className="group group-sm group-row align-items-center wow animate__animated animate__backInRight">
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
                  <ul className="list list-xs list-row justify-content-sm-end wow animate__animated animate__backInLeft">
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
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="section__gap-bottom pb-lg-0 wow animate__animated animate__backInLeft">
                  <img
                    src="/images/crudeoildiv.jpg"
                    alt="image"
                    className="img-fluid w-auto h-auto"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xl-5 wow animate__animated animate__backInRight">
                <h4 className="mb-5">
                  {" "}
                  Embark on a visual journey through the barrel of crude oil, where innovation meets productivity. Witness the transformation of 2009 gallons into a spectrum of essential products
                </h4>
                <p>
                  {" "}
                  from the powerful 19.36 gallons of gasoline and 10.4 gallons of diesel fuel driving industries, to the versatile 6.80 gallons of other refined products that fuel our daily lives."{" "}
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
                  Experience the heartbeat of the global economy with our premium crude oil offerings. 
            </h4>
                <p>
                  {" "}
                  Our commitment to sourcing and delivering the finest crude oil is a testament to our dedication to fueling industries worldwide. Navigate the complexities of the oil market confidently with our expertise, ensuring a seamless and reliable supply that drives your success in the dynamic world of oil trading."
                </p>
              </div>
            </div>
            <div className="col-lg-6 wow animate__animated animate__backInRight">
              <img
                src="/images/crudeoil.jpg"
                alt="image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <br></br> 
      <div className="flex w-[100%] justify-center">
    <div className="flex justify-center bg-[#584d24] p-2 text-white text-xl sm:text-4xl font-extrabold w-full sm:w-[50%] wow animate__animated animate__backInUp">Crude Oil </div>
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
     <div className="font-extrabold text-xl">What is Crude Oil ? </div>
     <br></br>
     <div className="">Crude oil, or petroleum, is a natural, unrefined fossil fuel found beneath the Earth's surface. It consists of complex hydrocarbons and serves as a vital source for various energy and industrial applications.</div>
     </div>
     <br></br>
     <div className="wow animate__animated animate__flipInX"> 
     <div className="font-extrabold text-xl">Specifications of Crude Oil : </div>
     <br></br>
     <ul className="list-disc ">
     <li> Crude oil is categorized by characteristics like API gravity, sulfur content, viscosity, and pour point. These specifications determine its value and usability, influencing refining processes and environmental impact.</li>
    </ul>
    </div>
    <br></br>
    <div className="wow animate__animated animate__flipInX"> 
    <div className="font-extrabold text-xl">Applications of Crude Oil : </div>
    <br></br>
    <ul className="list-disc">
     <li>Crude oil finds versatile applications, primarily as a source for energy production (fuels), petrochemicals, lubricants, asphalt, and in heating/power generation. Its diverse uses underscore its significance in modern industries.</li>
    </ul>
    </div>
       </div>
    </TabPanel>
  </Tabs>
  </div>
      <br></br>
      <br></br>
       <Footer/>
    </>
  );
};

export default service_1;
