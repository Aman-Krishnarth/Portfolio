import React, { useEffect } from "react";
import contacts from "../../data/contacts.json";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer
      className="text-white bg-[#19376d] mt-[128px] flex flex-col justify-evenly p-10 items-center gap-6 lg:gap-2 lg:flex-row"
      id="contact"
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div>
        <h2 className="text-7xl tracking-wider font-bold hover:cursor-default mb-2">
          Contact
        </h2>
        <p className="text-4xl font-normal tracking-tighter mb-2">
          Feel free to reach out!
        </p>
      </div>
      <ul className="flex flex-col justify-center items-center gap-6 overflow-hidden">
        {contacts.map((contact, id) => {
          return (
            <li className="flex items-center gap-4 w-full" key={id}>
              <div className="h-12 w-12">
                <img
                  src={contact.imgUrl}
                  alt=""
                  className="h-full w-full hover:scale-110 duration-300 ease-in-out"
                />
              </div>
              <a
                href={contact.link}
                className="text-white text-xl sm:text-3xl font-semibold hover:underline"
                target="_blank"
              >
                {contact.text}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Contact;
