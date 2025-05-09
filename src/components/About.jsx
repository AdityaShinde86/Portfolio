import React, { useState, useEffect } from "react";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  
  const info = [
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "01" }
  ];

  const googleDriveLink = "https://drive.google.com/file/d/1RZ4ZUjdbLyD-l5yx-Xr-hO9Vv1GBykum/view?usp=sharing";

  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Content that will be shown when collapsed
  const shortContent = (
    <>
      Hi, I'm Aditya, a passionate Front-End Developer and I have recently completed my graduate in BCA from Savitribai Phule Pune University, which I completed with great interest.
      <br />With a strong foundation in computer applications and front-end development, I specialize in building responsive and interactive web interfaces.
    </>
  );

  // Full content
  const fullContent = (
    <>
      {shortContent}
      <br />
      I'm skilled in JavaScript, React.js, HTML, CSS, and RESTful API consumption that provide a good user experience in the Applications developed.
      <br />
      Throughout my academic career, I successfully developed and managed several projects like dynamic dashboards, Pharmacy Management system, and some project is still in progress.
      <br /> I also have an understanding of backend elementary concepts in Java and am currently venturing into Full Stack Java development.
      <br/>My main goals are; structuring the code to ensure reusability, maintaining strict attention to detail for UI development, and implementing designs accurately to create stunning interfaces.
      I look forward to using my creativity in collaboration with other team members to design websites that provide users with a great experience.
    </>
  );

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                {isMobile && !showFullContent ? shortContent : fullContent}
              </p>
              
              {isMobile && (
                <button 
                  className="text-cyan-600 mt-4"
                  onClick={() => setShowFullContent(!showFullContent)}
                >
                  {showFullContent ? 'Read Less' : 'Read More'}
                </button>
              )}
              
              <br />
              <br />
              <button className="btn-primary" onClick={navigateToResume}>Check Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;