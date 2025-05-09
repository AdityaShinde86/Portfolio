import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import projectOne from "../assets/images/project-1.png";
import projectTwo from "../assets/images/project-2.png";
import projectThree from "../assets/images/project-3.png";
import projectFour from "../assets/images/project-4.png";
import projectSix from "../assets/images/project-6.png"; 
import projectSeven from "../assets/images/project-7.png";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
  const projects = [
    {
      img: projectTwo,
      name: "To-Do List",
      github_link: "https://github.com/AdityaShinde86/To-Do-List",
    },
    {
      img: projectOne,
      name: "Password Generator",
      github_link: "https://github.com/AdityaShinde86/Password-Generator",
    },
    {
      img: projectThree,
      name: "Currency converter",
      github_link: "https://github.com/AdityaShinde86/Currency-Converter",
    },
    {
      img: projectFour,
      name: "Facebook Clone",
      github_link: "https://github.com/AdityaShinde86/Facebook-Clone",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-white mb-4">
          My <span className="text-cyan-400">Projects</span>
        </h3>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Here are some of my featured works. Each project represents my skills and creativity.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="pb-12"
        >
          {projects.map((project_info, i) => (
            <SwiperSlide key={i}>
              <div className="group relative h-full bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="overflow-hidden">
                  <img 
                    src={project_info.img} 
                    alt={project_info.name} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30"
                    >
                      GitHub
                    </a>
                    {project_info.live_link && (
                      <a
                        href={project_info.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/20"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;