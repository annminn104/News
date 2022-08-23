import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import animation404 from "../public/lottifiles/404.json";

export default function FourOhFour() {
  return (
    <React.Fragment>
      <div className="container mx-auto text-center relative py-8">
        <h1 className="text-2xl lg:text-4xl font-bold mb-6">404 - Not Found</h1>
        <Lottie animationData={animation404} loop={true} />
      </div>
    </React.Fragment>
  );
}
