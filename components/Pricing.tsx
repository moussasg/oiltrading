import Link from 'next/link';
import React, { useState } from 'react';

const Pricing = () => {
  const [checked, SetChecked] = useState(true);
  const handleChange = (e) => {
    SetChecked(e.target.checked)
  }
    return (
        <div className="pricing-section">
          
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pricing-section__content t-shadow">
                <div className="row g-6">
                  <div className="col-md-6 col-lg-5">
                
                    <Link
                      href="pricing-plan-1"
                      className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                      {" "}
                      Get Started Now{" "}
                      <span className="material-symbols-rounded mat-icon fw-100 bttn__icon">
                        {" "}
                        trending_flat{" "}
                      </span>
                    </Link>
                    <span className="d-block fw-md clr-heading mt-6">
                      {" "}
                      * Read our{" "}
                      <Link
                        href="terms-condition"
                        className="t-link d-inline-block clr-base :clr-accent">
                        {" "}
                        Tearms and Conditions{" "}
                      </Link>
                    </span>
                  </div>
                  <div className="col-md-6 col-lg-7">
                    <ul className="list list--check check-base">
                      <li>
                        <span className="d-block clr-heading">
                          {" "}
                          After the 30-day free trial, you have the option to
                          pick your plan and pay monthly{" "}
                        </span>
                      </li>
                      <li>
                        <span className="d-block clr-heading">
                          {" "}
                          All plans come with 256-bit SSL security, and all our
                          key features tasks{" "}
                        </span>
                      </li>
                      <li>
                        <span className="d-block clr-heading">
                          {" "}
                          Pay via credit card or annually via credit card or
                          invoice{" "}
                        </span>
                      </li>
                      <li>
                        <span className="d-block clr-heading">
                          {" "}
                          Upgrade, downgrade, or cancel anytime{" "}
                        </span>
                      </li>
                      <li>
                        <span className="d-block clr-heading">
                          {" "}
                          You have the option to pick your plan{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Pricing;