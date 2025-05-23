import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  const contact_info = [
    { icon: <MdEmail />, text: "addityashinde3@gmail.com" },
    { icon: <MdPhone />, text: "+91 8624020575" },
    {
      icon: <MdLocationOn />,
      text: "Pune, maharashtra, India",
    },
  ];

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="p-2 bg-gray-700 rounded text-white"
            />
            <input 
              type="Email" 
              placeholder="Your Email Address" 
              className="p-2 bg-gray-700 rounded text-white"
            />
            <textarea 
              placeholder="Your Message" 
              rows={10}
              className="p-2 bg-gray-700 rounded text-white"
            ></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  {contact.icon}
                </div>
                <p className="md:text-base text-sm break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;