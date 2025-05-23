import React, { useRef } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import newpho from '../assets/images/newpho.png';
import Type from "./Type";

const socialMediaLinks = [
  "https://www.instagram.com/adieee___86?igsh=bWx6OXZrYTdtcHc2",
  "https://github.com/AdityaShinde86",
  "https://www.linkedin.com/in/additya-shinde-996531341",
];

const socialMediaIcons = [
  <FaInstagram />,
  <FaGithub />,
  <FaLinkedin />,
];

const Hero = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={newpho} alt="" className="md:w-2/3 h-auto object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Aditya Shinde</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            <Type/>
          </h4>
          <button className="btn-primary mt-8" onClick={scrollToContact}>Connect with Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {socialMediaIcons.map((Icon, index) => (
              <a
                key={index}
                href={socialMediaLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                {Icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;