import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Style from "./index.module.css";
import 'react-tabs/style/react-tabs.css';
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import Footer from "@/components/home_4/Footer";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";

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
      <Navbar rtlurl="/rtl/service-1" />
      {/* Banner section */}
      <section className={Style.bannerbitumen}>
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h3 className="clr-light mb-3">Bitumen </h3>
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
                    Bitumen Details{" "}
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
              <div className="wow animate__animated animate__backInRight">"Unleash the potential of your construction projects with our high-quality</div> 
              <div className="wow animate__animated animate__backInLeft"><span className="font-extrabold 6xl">bitumen</span> products, paving the way for durability, reliability, and excellence </div>
              <div className="wow animate__animated animate__backInRight">in every application."</div>
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
                    src="/images/bannerbitumen.jpeg"
                    alt="image"
                    className="img-fluid w-auto h-auto"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xl-5 wow animate__animated animate__backInRight">
                <h4 className="mb-5">
                  {" "}
                  Explore the versatile applications of bitumen, a vital component derived from crude oil              </h4>
                <p>
                  {" "}
                  prominently featured in our comprehensive range of oil trading offerings. From supporting the construction of robust road infrastructure to providing effective waterproofing solutions for diverse projects, bitumen stands as a cornerstone in the energy and construction sectors.                 "{" "}
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
                  Road Construction Solutions:
            </h4>
                <p>
                  {" "}
                  Bitumen is a key component in the production of asphalt used for road construction. It enhances the durability of roads, providing resistance to weathering and creating a smooth surface that offers improved traction for vehicles.
          </p>
              </div>
            </div>
            <div className="col-lg-6 wow animate__animated animate__backInRight">
              <img
                src="/images/bitumenused.jpg"
                alt="image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <br></br> 
  
    <div className="flex w-[100%] justify-center">
    <div className="flex justify-center bg-[#584d24] p-2 text-white text-xl sm:text-4xl font-extrabold w-full sm:w-[50%] wow animate__animated animate__backInUp">Bitumen (Penetration 60/70) </div>
    </div>
    <br></br> 
    <br></br> 





    <div className='flex w-full h-[100%] relative justify-center'>
    <Tabs className='relative w-full sm:w-[70%] h-[100%]'>
    <TabList>
      <Tab>Description </Tab>
      <Tab>Analyse</Tab>
      <Tab>Analyse Documents</Tab>
    </TabList>
    <TabPanel>
      <div className="Description text-black">
      <div className="wow animate__animated animate__flipInX"> 
     <div className="">The Impact of Environmental Conditions on the Properties of Bitumen 60/70</div>
     <div className="font-extrabold text-xl">What is Bitumen 60/70 ? </div>
     <br></br>
     <div className="">People know 60/70 bitumen as loose bitumen</div>
     <div className="">It is a black substance  made up of organic hydrocarbons with complex compounds</div>
     <div className="">People also produce it in bitumen units through the oxidation process on the vacuum bottom  with a grade of penetration of 60/70.</div>
     <div className="">They mix this bitumen with minerals that we can see in nature</div>
     </div>
     <br></br>
     <div className="wow animate__animated animate__flipInX"> 
     <div className="font-extrabold text-xl">Specifications of Bitumen 60/70 : </div>
     <br></br>
     <ul className="list-disc ">
     <li>The consistency of bitumen depends on its temperature.</li>
     <li>people also know it as a raw material for other bitumen products.</li>
    <li>penetration grade of bitumen, ranging between 6 to 7 millimeters, is directly influenced by the crude oil type and refining method, impacting its temperature and hardness.</li>
    <li>Humans know it as heavy and suitable bitumen, which is ideal for building and repairing roads .</li>
    <li>It is commonly used to produce asphalt, especially hot mix asphalt, which serves as a surface coating.</li>
    </ul>
    </div>
    <br></br>
    <div className="wow animate__animated animate__flipInX"> 
    <div className="font-extrabold text-xl">Application of Bitumen 60/70</div>
    <br></br>
    <ul className="list-disc">
     <li>Road surfacing: People use tar 60\70 as the main material in the production of asphalt.They also use it as a primary layer in road construction and repair.</li>
     <li>Insulation : People use tar 60\70 to produce different types of insulation such as waterproof and thermal insulation.</li>
     <li>Surface coating :  Individuals use pitch 60\70 in covering different surfaces such as sidewalks, parking, airports and other asphalt surfaces These coatings inhibit water & other climatic factors and make the surfaces resistant and beautiful.</li>
    <li>Petroleum industry :  People use tar 60\70 for a variety of uses in the petroleum industry such as the production of stabilizers, insulation, adhesives and oils.</li>
    <li>Flooring, water and sewage industries, fire proofing , coating in construction & repair of roofs, production of insulation materials & adhesives, producing anti- corrosion materials.
People export a large amount of pitch 60\70 to other countries.</li>
    </ul>
    </div>
       </div>
    </TabPanel>
    <TabPanel>
        <br></br>
    <div className="flex w-auto h-auto flex-col items-center wow animate__animated animate__backInUp">
  <table className="table-auto justify-center border border-gray-950 text-xs sm:text-xl">
    <thead> {/* first row*/}
    <tr className="border-gray-950  h-0 sm:h-20"> {/* first row*/}
    <td className="border-r bg-base border-l border-t border-b p-2  w-auto text-white font-medium text-xs sm:text-4xl">
    Characteristics
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
    Penetration @ 25 °C	
   </td>
    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
    0.1 mm	
    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    60-70	
    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    ASTM D-5
    </td>
  </tr>
  <tr className="border-gray-950">
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    Specific gravity @25 °C	
    </td>
    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
    gr/cm3	
    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    1.01-1.060	    
    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    ASTM D-70
    </td>
  </tr>
  <tr className="border-gray-950">
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    Softening Point	
    </td>
    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
    °C	    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    46-56	    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    ASTM D-36
    </td>
  </tr>
  <tr className="border-gray-950">
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    Ductility @ 25 °C		
    </td>
    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
    Cm  </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    100 Min</td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    ASTM D-113
    </td>
  </tr>
  <tr className="border-gray-950">
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    Loss on heating		    </td>
    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
    % wt	
    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    0.2 Max		    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    ASTM D-6
    </td>
  </tr>
  <tr className="border-gray-950">
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    Drop in penetration after heating	
  </td>
    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
    %  
    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    20 Max
    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    ASTM D-6 & D-5
    </td>
  </tr>
  <tr className="border-gray-950">
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    Flash Point	    </td>
    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
    °C	    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    250 Min
    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    ASTM D-92
    </td>
  </tr>
  <tr className="border-gray-950">
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    Solubility in CS2		    </td>
    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
    % wt	
    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    99.0 Min
    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    ASTM D-4
    </td>
  </tr>
  <tr className="border-gray-950">
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    Organic matter insoluble in CS2		    </td>
    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
    % wt	    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    0.2 Max 	    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    ASTM D-4
    </td>
  </tr>
  <tr className="border-gray-950">
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    Viscosity @ 60 °C	
    	    </td>
    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
   p    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    2000±400	    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    ASTM D-2171
</td>
  </tr>
  <tr className="border-gray-950">
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    Spot test		
    	    </td>
    <td className="border-r border-l border-t border-b p-2 text-center   w-auto h-10">
    -	    </td>
    <td className="border-r border-l border-t border-b p-2   w-auto h-10">
    Negative    
    </td>
    <td className="border-r border-l border-t border-b p-2 w-auto h-10">
    *A.A.S.<span className="block sm:hidden"/>H.O.T.102<span/>
    </td>
  </tr>
    </tbody>
  </table>
</div>
    </TabPanel>
    <TabPanel>
    <div className="flex w-full relative mt-[4%] wow animate__animated animate__backInLeft gap-x-3"> 
    <FaRegFilePdf style={{ fontSize: "3em" }} />
              <Link
                href={"/pdf/Oil-Bitumen.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-black font-bold flex h-full items-center">
                  {" "}
                  Bitumen 60/70 Pdf{" "}
                </button>{" "}
              </Link>
    </div>
    </TabPanel>
  </Tabs>
  </div>
<br></br>
<Footer /> 
    </>
  );
}

export default service_1;
