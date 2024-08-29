import React from "react";
import contacts from "../../data/contacts.json";

function Contact() {
  return (
    <footer
      className="text-white bg-[#19376d] mt-[128px] flex flex-col justify-evenly p-10 items-center gap-6 lg:gap-2 lg:flex-row"
      id="contact"
    >
      <div>
        <h2 className="text-7xl tracking-wider font-bold hover:cursor-default mb-2">
          Contact
        </h2>
        <p className="text-4xl font-normal tracking-tighter mb-2">
          Feel free to reach out!
        </p>
      </div>
      <ul className="flex flex-col items-center gap-6">
        {contacts.map((contact, id) => {
          return (
            <li className="flex items-center gap-4 w-full" key={id}>
              <div className="h-12 w-12">
                <img src={contact.imgUrl} alt="" className="h-full w-full hover:scale-110 duration-300 ease-in-out" />
              </div>
              <a href={contact.link} className="text-white text-3xl font-semibold hover:underline">{contact.text}</a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Contact;
