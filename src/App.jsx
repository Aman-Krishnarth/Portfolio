import { useEffect, useRef, useState } from "react";
import { useTypewriter, Typewriter, Cursor } from "react-simple-typewriter";
import Skill from "./components/Skill";

function App() {
    const [text] = useTypewriter({
        words: ["Problem Solver", "Frontend Developer"],
        loop: 0,
        typeSpeed: 150,
        deleteSpeed: 100,
    });

    const [skills, setSkills] = useState([
        {
            skill: "HTML",
            percentage: 85,
        },
        {
            skill: "Tailwind",
            percentage: 75,
        },
        {
            skill: "JavaScript",
            percentage: 90,
        },
        {
            skill: "ReactJS",
            percentage: 80,
        },
        {
            skill: "C++",
            percentage: 75,
        },
        {
            skill: "Python",
            percentage: 90,
        },
    ]);

    const [projects, setProjects] = useState([
        {
            projectNumber: "1",
            projectName: "2048 Game",
            projectContent:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi commodi labore hic reprehenderit quas ratione illo eligendi soluta tenetur! Dignissimos tenetur maiores totam. Aliquid, minima sunt nihil molestiae accusantium dicta!",
            projectLiveLink: "https://aman-krishnarth.github.io/2048/",
            projectGithub: "",
        },
        {
            projectNumber: "2",
            projectName: "Suodku Game",
            projectContent:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi commodi labore hic reprehenderit quas ratione illo eligendi soluta tenetur! Dignissimos tenetur maiores totam. Aliquid, minima sunt nihil molestiae accusantium dicta!",
            projectLiveLink: "https://aman-krishnarth.github.io/SudokuGame/",
            projectGithub: "",
        },
        {
            projectNumber: "3",
            projectName: "Weather App",
            projectContent:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi commodi labore hic reprehenderit quas ratione illo eligendi soluta tenetur! Dignissimos tenetur maiores totam. Aliquid, minima sunt nihil molestiae accusantium dicta!",
            projectLiveLink: "https://aman-krishnarth.github.io/WeatherApp/",
            projectGithub: "",
        },
    ]);

    const [services, setServices] = useState([
        {
            serviceNumber: 1,
            serviceName: "Web Development",
            serviceContent:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, commodi.",
        },
        {
            serviceNumber: 2,
            serviceName: "Problem Solver",
            serviceContent:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, commodi.",
        },
    ]);

    const [contact, setContact] = useState([
        {
            contactType: "Location",
            contactSvg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-8"
                >
                    <path
                        fill-rule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clip-rule="evenodd"
                    />
                </svg>
            ),
            contactContent: "Ghaziabad, Uttar Pradesh",
        },
        {
            contactType: "Gmail",
            contactSvg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-8"
                >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
            ),
            contactContent: "20031010.aman@gmail.com",
        },
    ]);

    const [aboutDiv, setAboutDiv] = useState(null);
    const [details1Div, setDetails1Div] = useState(null);
    const [skillsDiv, setSkillsDiv] = useState(null);
    const [projectsDiv, setProjectsDiv] = useState(null);
    const [servicesDiv, setServicesDiv] = useState(null);
    const [contactDiv, setContactDiv] = useState(null);

    window.addEventListener("scroll", () => {
        console.log(contactDiv.offsetHeight)
        console.log(window.scrollY)
        if (aboutDiv && window.scrollY >= aboutDiv.offsetHeight) {
            aboutDiv.classList.add("animate-fadeLeft");
            aboutDiv.classList.remove("opacity-0");
        }
        if (details1Div && window.scrollY >= details1Div.offsetHeight) {
            details1Div.classList.add("animate-fadeLeft");
            details1Div.classList.remove("opacity-0");
        }
        if (skillsDiv && window.scrollY >= skillsDiv.offsetHeight) {
            skillsDiv.classList.add("animate-fadeLeft");
            skillsDiv.classList.remove("opacity-0");
        }
        if (projectsDiv && window.scrollY >= projectsDiv.offsetHeight) {
            projectsDiv.classList.add("animate-fadeLeft");
            projectsDiv.classList.remove("opacity-0");
        }
        if (servicesDiv && window.scrollY >= servicesDiv.offsetHeight) {
            servicesDiv.classList.add("animate-fadeLeft");
            servicesDiv.classList.remove("opacity-0");
        }
        if (contactDiv && window.scrollY >= contactDiv.offsetHeight) {
            // console.log("contact section")
            contactDiv.classList.add("animate-fadeLeft");
            contactDiv.classList.remove("opacity-0");
        }

        // console.log(scrollTop)
    });

    useEffect(() => {
        setAboutDiv(document.querySelector("#aboutDiv"));
        setDetails1Div(document.querySelector("#details1"));
        setSkillsDiv(document.querySelector("#skills"));
        setProjectsDiv(document.querySelector("#projects"));
        setServicesDiv(document.querySelector("#services"));
        setContactDiv(document.querySelector("#contact"));
        window.scrollTo(0, 0);

        return () => {
            setAboutDiv(null);
            setDetails1Div(null);
            setSkillsDiv(null);
            setProjectsDiv(null);
            setServicesDiv(null);
            setContactDiv(null);
        };
    }, []);

    return (
        <>
            <div className=" h-screen">
                <div className="h-full bg-[#212121] text-[white] flex flex-col justify-center items-center gap-[1%] animate-fadeIn">
                    <h1 className=" text-[300%] font-semibold">
                        Aman Krishnarth
                    </h1>

                    <p className="text-[200%]">
                        I'm a <span className="text-[orange]">{text}</span>
                        <span>
                            <Cursor cursorBlinking={true} cursorColor="white" />
                        </span>
                    </p>

                    <div className="flex items-center w-full justify-evenly pt-[7%]">
                        <a
                            href="https://github.com/Aman-Krishnarth"
                            target="_blank"
                        >
                            <img
                                src="https://imgs.search.brave.com/KXL45Ky6mn4L5JZiL_5V069ITX6UnIz6ZTlN8LGDJfI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9HaXRIdWIv/R2l0SHViLUljb24t/V2hpdGUtRGFyay1C/YWNrZ3JvdW5kLUxv/Z28ud2luZS5zdmc.svg"
                                alt="Github"
                                className=" h-16 w-16"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/aman-krishnarth-577138295/"
                            target="_blank"
                        >
                            <img
                                src="https://imgs.search.brave.com/Z4tzkHgsMw-bIt6x5iWiYUP3cIEOuKvMnPul3MLE70U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/LndhYWxheHkuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzAxL2luZGV4LnBu/Zw"
                                alt="LinkedIn"
                                className=" h-16 w-16"
                            />
                        </a>
                    </div>
                </div>

                <div className="bg-black">
                    <div
                        id="aboutDiv"
                        className="flex flex-col gap-6 items-center opacity-0"
                    >
                        <p
                            id="aboutHeading"
                            className="text-center text-[250%] font-bold text-[#d3d0d0]
                            mt-7 underline"
                        >
                            ABOUT
                        </p>

                        <p
                            id="aboutContent"
                            className=" font-semibold text-center text-xl
                            text-[#dbd3d3] w-[90%] "
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Officia ratione odio odit eius numquam ipsum
                            deserunt corporis, ut eos provident neque rem hic
                            reiciendis earum magni culpa non assumenda animi
                            incidunt aliquam dolorem aut iste, distinctio quo?
                            Placeat sapiente debitis, doloribus recusandae,
                            excepturi maxime quod dolor facere molestiae eius
                            cum consectetur repudiandae, molestias illum dicta
                            voluptates ipsam id similique necessitatibus alias
                            dolores. Quae provident earum nisi explicabo iure,
                            fuga facere?
                        </p>
                    </div>

                    <div
                        id="details1"
                        className="mt-[30%] flex flex-col items-center opacity-0"
                    >
                        <p
                            id="details1Heading"
                            className=" text-[200%] text-center font-bold text-[#bcbcd6]"
                        >
                            UI/UX Designer & Web Developer
                        </p>

                        <p
                            id="details1Intro"
                            className="mt-5 mb-5 text-center italic font-semibold text-[#dbd3d3] text-xl w-[90%]"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloremque eos saepe iusto, a vitae dolore.
                            Inventore laudantium distinctio animi ipsa, quas
                            ullam commodi nihil ratione nostrum sit quos
                            cupiditate eveniet.
                        </p>

                        <ul className="text-[#dbd3d3] text-xl">
                            <li className=" ml-6 text-lg">
                                <span className=" font-extrabold">
                                    Date of Birth:
                                </span>{" "}
                                10th October 2003
                            </li>
                            <li className=" ml-6 text-lg">
                                <span className=" font-extrabold">City:</span>{" "}
                                Ghaziabad
                            </li>
                            <li className=" ml-6 text-lg">
                                <span className=" font-extrabold">Age: </span>20
                            </li>
                            <li className=" ml-6 text-lg">
                                <span className=" font-extrabold">
                                    Degree:{" "}
                                </span>
                                Bachelor of Technologoy (Pursuing)
                            </li>
                            <li className=" ml-6 text-lg">
                                <span className=" font-extrabold">Email: </span>
                                20031010.aman@gmail.com
                            </li>
                        </ul>

                        <p
                            id="details1Outro"
                            className="mt-5 text-center font-semibold text-[#dbd3d3] text-xl w-[90%]"
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Voluptate voluptas sit veniam dolores, nisi
                            alias porro perspiciatis optio quia voluptates id
                            officia eligendi dignissimos accusantium modi nam
                            quaerat quidem. Voluptas?
                        </p>
                    </div>

                    <div
                        id="skills"
                        className="mt-[30%] text-white flex flex-col justify-center opacity-0"
                    >
                        <p
                            id="skillsHeading"
                            className="text-[#d3d0d0] text-[250%] underline mb-5 self-center"
                        >
                            Skills
                        </p>

                        <p
                            id="skillsContent"
                            className="w-[90%] text-xl text-center self-center text-[#d3d0d0]"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quia illum velit odio vitae porro doloremque
                            vero, fugit odit magnam consequuntur sunt dolores?
                            Tenetur inventore rerum commodi totam nesciunt sit
                            asperiores.
                        </p>

                        {skills.map((s) => (
                            <Skill
                                skill={s.skill}
                                percentage={"" + s.percentage}
                            />
                        ))}
                    </div>

                    <div id="projects" className="text-white mt-[30%] opacity-0">
                        <h1
                            id="PROJECTS"
                            className="text-4xl text-blue-600 text-center mb-10 font-bold underline "
                        >
                            PROJECTS
                        </h1>

                        {projects.map((p) => {
                            return (
                                <div
                                    id={`project${p.projectNumber}`}
                                    key={p.projectNumber}
                                    className="mt-7"
                                >
                                    <p
                                        id={`Heading`}
                                        className="text-2xl font-semibold mb-3 text-center underline"
                                    >
                                        {p.projectName}
                                    </p>

                                    <p
                                        id="project1Content"
                                        className="w-[90%] text-center text-lg m-auto"
                                    >
                                        {p.projectContent}
                                    </p>

                                    <div className=" flex justify-around text-lg p-2 mt-4">
                                        <a
                                            href={p.projectLiveLink}
                                            target="_blank"
                                        >
                                            <p className="text-blue-300 hover:underline">
                                                Live Link
                                            </p>
                                        </a>

                                        <a href="" target="_blank">
                                            <p className="text-blue-300 hover:underline">
                                                Github Link
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div id="services" className="text-white mt-[30%] opacity-0">
                        <h1
                            id="servicesHeading"
                            className="text-4xl text-center text-blue-500 underline mb-6 font-bold "
                        >
                            Services
                        </h1>

                        <p
                            id="servicesContent"
                            className="w-[90%] text-center text-lg ml-auto mr-auto mb-8"
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quae id blanditiis et ad facilis quos dolorum
                            iure iste vel! Necessitatibus quasi, nemo laborum
                            culpa reprehenderit excepturi illo asperiores
                            maiores voluptates?
                        </p>

                        {services.map((s) => {
                            return (
                                <div
                                    id={`service${s.serviceNumber}`}
                                    className="mb-8"
                                    key={s.serviceNumber}
                                >
                                    <h2
                                        id={`service${s.serviceNumber}Heading`}
                                        className="text-2xl text-center font-semibold text-[#a0c6a0] mb-2"
                                    >
                                        {s.serviceName}
                                    </h2>
                                    <p
                                        id="service1Content"
                                        className="w-[90%] text-center ml-auto mr-auto"
                                    >
                                        {s.serviceContent}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div id="contact" className="text-white mt-24 opacity-0">
                        <h1
                            id="contactHeading"
                            className="text-4xl text-blue-500 font-bold underline text-center mb-10"
                        >
                            Contact
                        </h1>
                        <div id="contacts" className="ml-4">
                            {contact.map((c) => {
                                return (
                                    <div
                                        id={`${c.contactType}`}
                                        className="flex gap-3 items-center mb-6"
                                    >
                                        <span>{c.contactSvg}</span>
                                        <p>
                                            <p className="text-2xl font-semibold">
                                                {c.contactType}:
                                            </p>
                                            <p className=" text-xl">
                                                {c.contactContent}
                                            </p>
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
