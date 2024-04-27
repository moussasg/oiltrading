import About from "@/components/home_3/About";
import Aboutwork from "@/components/home_3/Aboutwork";
import Blog from "@/components/home_3/Blog";
import Cta from "@/components/home_3/Cta";
import Features from "@/components/home_3/Features";
import Footer from "@/components/home_3/Footer";
import Hero from "@/components/home_3/Hero";
import Projects from "@/components/home_3/Projects";
import Service from "@/components/home_3/Service";
import Support from "@/components/home_3/Support";
import Team from "@/components/home_3/Team";
import Testimonial from "@/components/home_3/Testimonial";
import Head from "next/head";
import { useEffect, useState } from "react";
import 'animate.css';

const home_3 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("dir", 'ltr');
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    // Initialize WOW only if it's available (i.e., on the client side)
    if (typeof window !== "undefined") {
      const wow = new WOW();
      wow.init();
    }
  }, []);

  const backtoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let WOW;
  if (typeof window !== "undefined") {
    WOW = require("wow.js");
  }

  return (
    <>
      <Head>
        <title>Al Tafkeer Alhadeth Oil Trading</title>
        <meta name="description" content=" IT Solution & Services HTML Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        onClick={backtoTop}
        className={`back-to-top ${scrolled ? "d-block" : "d-none"}`}>
        <span className="back-top">
          <span className="material-symbols-outlined mat-icon fw-300 d-grid">
            {" "}
            keyboard_double_arrow_up{" "}
          </span>
        </span>
      </div>
      {/* <!-- Hero 3 --> */}
      <Hero />
      {/* <!-- About  --> */}
      <About />
      {/* <!-- Service Section --> */}
      <Service />
      <br></br>
      {/* <!-- Features Section  --> */}
      {/* <Features overlay={true} /> */}
      {/* <!-- Latest Projects --> */}
      {/* <Projects /> */}
      {/* <!-- About Section  --> */}
      {/* <Aboutwork /> */}
      {/* <!-- Support Section  --> */}
      {/* <Support /> */}
      {/* <!-- Team Section 2 --> */}
      {/* <Team /> */}
      {/* <!-- Testimonials  --> */}
      {/* <Testimonial /> */}
      {/* <!-- Blog Section --> */}
 
      {/* <!-- CTA --> */}
      <Cta />
      {/* <!-- Footer  --> */}
      <Footer />
    </>
  );
};

export default home_3;
home_3.getLayout = function getLayout(page) {
  return <>{page}</>;
};
