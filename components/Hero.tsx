"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 mt-12 padding-x">
        <h1 className="hero__title">
        Trouver, réserver, louer une voiture - rapidement!
        </h1>

        <p className="hero__subtitle">
        Rationalisez votre expérience de location de voiture grâce à notre processus de réservation de réservation.
        </p>

        <CustomButton
          title="Découvrez nos vehicules"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/heroo.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
