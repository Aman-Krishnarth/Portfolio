import React from "react";
import { MousePointer2, Server } from "lucide-react";
import "./about.css";

function About() {
  return (
    <section className="p-16 mt-28" id="about">
      <div className="bg-[#0c0c0c99] rounded-xl p-4">
        <h2 className="text-white text-4xl tracking-widest font-bold mb-7 text-center">
          ABOUT
        </h2>
        <div className="lg:flex lg:justify-around lg:items-center">
          <img
            src="https://imgs.search.brave.com/Ex61OQbXdh2bLSlZdXxPJ7wYrJlZbqSt3_oN70M61jw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IveW91bmctcHJv/Z3JhbW1lci10eXBl/cy1jb2RlLWNvbXB1/dGVyLWZvY3VzZWQt/c21pbGluZy12aWJy/YW50LXdlbGxsaXQt/cm9vbS13aXRoLWNv/bG9yZnVsLWVsZW1l/bnRzXzUzODIxMy0x/MjE1NTMuanBnP3Np/emU9NjI2JmV4dD1q/cGc"
            alt="Animated image of a person with laptop"
            className="hidden lg:block h-1/2 w-1/3 rounded-2xl"
          />
          <ul className=" grid grid-rows-[1fr_1fr_1fr] gap-12 text-white">
            <li className="aboutItem grid grid-cols-[auto_1fr] justify-center items-center p-6 rounded-xl hover:cursor-default ">
              <MousePointer2 size={80} />
              <div className=" ml-3">
                <h3 className="text-3xl font-semibold">Frontend Developer</h3>
                <p className="lg:text-lg">
                  I'm a frontend developer with experience in building
                  responsive and optimized sites
                </p>
              </div>
            </li>
            <li className="aboutItem grid grid-cols-[auto_1fr] justify-center items-center p-6 rounded-xl hover:cursor-default ">
              <Server size={80} />
              <div className="ml-4">
                <h3 className="text-3xl font-semibold">Backend Developer</h3>
                <p className="lg:text-lg">
                  I have experience developing fast and optimised back-end
                  systems and APIs
                </p>
              </div>
            </li>{" "}
            <li className="aboutItem grid grid-cols-[auto_1fr] justify-center items-center p-6 rounded-xl hover:cursor-default ">
              <MousePointer2 size={80} />
              <div className=" ml-3">
                <h3 className="text-3xl font-semibold">UI Designer</h3>
                <p className="lg:text-lg">
                  I have designed multiple landing pages and have created design
                  systems as well
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
