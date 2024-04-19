import Feedback_3 from "@/components/Feedback_3";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Technologies from "@/components/Technologies";
import Features from "@/components/home_3/Features";
import Footer from "@/components/home_4/Footer";
import Link from "next/link";
import React from "react";
import { useEffect } from 'react';

const pricing_plan_1 = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar rtlurl="/rtl/pricing-plan-1" />
      {/* Banner section */}
      <Technologies />
      <Footer />
    </>
  );
};

export default pricing_plan_1;
