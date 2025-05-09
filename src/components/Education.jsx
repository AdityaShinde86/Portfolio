import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      logo: "school",
      degree: ' Bachelor Of Business Administration In Computer Application',
      institution: ' Savitribai Phule Pune University, Pune',
      grades: 'CGPA: ',
      year: '2022 - 2025',
      desc: "Completed a comprehensive undergraduate program blending business fundamentals with core computer application concepts, including web development, programming, databases, and software project management.",
    },
    {
      logo: "book",
      degree: 'Maharashtra state board(XII)-HSC',
      institution: 'Shri Shivaji Maratha jr College, Pune',
      grades: 'percentage: 61.50%',
      year: '2020 - 2022',
      desc: "I completed my class 12 high school education at  Shri Shivaji Maratha jr College, Pune, where I studied commerce.",       
    },
    {
      logo: "book",
      degree: 'Maharashtra state board(X)-SSC',
      institution: 'Shri Shivaji Maratha high school, Pune',
      grades: 'percentage: 72.40%',
      year: '2019 - 2020',
      desc: "I completed my class 10th school education at  Shri Shivaji Maratha high school, Pune.",       
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            My <span className="text-cyan-600">Education</span>
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="relative">
          {/* Timeline bar */}
          <div className="hidden sm:block absolute h-full w-1 bg-cyan-500 left-1/2 transform -translate-x-1/2"></div>
          
          {educationDetails.map((edu, index) => (
            <div 
              key={index} 
              className={`relative mb-8 flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
              data-aos="fade-up"
            >
              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-cyan-600 border-4 border-white dark:border-gray-900 z-10"></div>
              
              {/* Education card */}
              <div className={`w-full sm:w-5/12 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800 ${index % 2 === 0 ? 'sm:mr-8' : 'sm:ml-8'}`}>
                <div className="flex items-start mb-4">
                  <ion-icon 
                    name={edu.logo} 
                    className="text-3xl text-cyan-600 mr-4 mt-1"
                  ></ion-icon>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-100 rounded-full text-sm font-medium">
                    {edu.grades}
                  </span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">
                    {edu.year}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;