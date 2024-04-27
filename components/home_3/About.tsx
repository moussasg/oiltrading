import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [isView, setIsView] = useState(false);

  useEffect(() => {
    if (inView && !isView) {
      const counterElements = document.querySelectorAll(".counter");
      const duration = 2500; // 4 seconds

      counterElements.forEach((counterElement, index) => {
        const targetNumber = parseInt(counterElement.getAttribute("data-value") || "0", 10);

        const updateCounter = (startTime: number) => {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const currentValue = Math.floor(progress * targetNumber);

          counterElement.textContent = currentValue.toString();

          if (progress < 1) {
            requestAnimationFrame(() => updateCounter(startTime));
          }
        };

        // Start the counting animation for each counter
        setTimeout(() => {
          const startTime = Date.now();
          updateCounter(startTime);
        }, 500 * (index + 1)); // Add a delay for each counter
      });

      setIsView(true);
    }
  }, [inView, isView]);

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-img about-img--alt">
              <div className="about-img__content about-img__content-xl wow animate__animated animate__zoomIn">
                <img
                  src="/images/about-img-2.png"
                  alt="image"
                  className="about-img__is"
                />
              </div>
              <div className="about-img__content wow animate__animated animate__fadeInTopLeft">
                <img
                  src="/images/about-img-3.png"
                  alt="image"
                  className="about-img__is"
                />
              </div>
              <div className="about-img__content wow animate__animated animate__fadeInDown">
                <img
                  src="/images/about-img-4.png"
                  alt="image"
                  className="about-img__is"
                />
              </div>
              <div className="about-img__content wow animate__animated animate__fadeInBottomLeft">
                <img
                  src="/images/about-img-5.png"
                  alt="image"
                  className="about-img__is"
                />
              </div>
              <div className="about-img__content wow animate__animated animate__fadeInBottomRight">
                <img
                  src="/images/about-img-6.png"
                  alt="image"
                  className="about-img__is"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="section__gap-top pt-xl-0">
              <span className="d-inline-block h5 lh-1 fw-semibold clr-base overlay-text">
                {" "}
                Committed to Quality Products and Reliable Service{" "}
                <span className="overlay-text__content">About</span>
              </span>
              <h2 className="mt-5 mb-5 wow animate__animated animate__pulse animate__delay-2s">
                {" "}
                Run by people with {" "}
                <span className="clr-base ">30 years</span> of experience globally.{" "}
              </h2>
              <p className="mb-8 max-text-60">
                {" "}
                Benefiting from superior and up-to-date technologies, enables us to prepare huge shipments in a short period of time. Our mission is to meet customer needs by producing high-quality products and providing the best services.{" "}
              </p>
              <ul className="list list-row flex-wrap align-items-center"  ref={ref}>
                <li className="flex-grow-1">
                  <div className="counter-card-1 numbers-container">
                    <h4 className="clr-base text-center mb-1 number"><span className="counter" data-value="30">0</span>+</h4>
                    <p className="text-center"> Years of Experience </p>
                  </div>
                </li>
                <li className="flex-grow-1">
                  <div className="counter-card-1">
                    <h4 className="clr-base text-center mb-1"><span className="counter" data-value="7">0</span></h4>
                    <p className="text-center"> Oil Products </p>
                  </div>
                </li>
                <li className="flex-grow-1">
                  <div className="counter-card-1">
                    <h4 className="clr-base text-center mb-1"><span className="counter" data-value="100">0</span>+</h4>
                    <p className="text-center"> Employees</p>
                  </div>
                </li>
              </ul>
              <div className="group group-md group-row flex-wrap mt-10">
                <Link
                  href="news"
                  className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                  {" "}
                  Learn More{" "}
                  <span className="material-symbols-rounded mat-icon fw-100 bttn__icon">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
                <div className="group group-row align-items-center flex-shrink-0">
                  <div className="icon-box icon-box--sm icon-box--light-outline circle bg-neutral clr-base">
                    <span className="material-symbols-rounded mat-icon fw-300 size-32 solid">
                      {" "}
                      phone_in_talk{" "}
                    </span>
                  </div>
                  <div className="group group-0">
                    <p className="clr-heading sm-text">Call for Help</p>
                    <p className="clr-heading fw-md">+971 45-498-230</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
