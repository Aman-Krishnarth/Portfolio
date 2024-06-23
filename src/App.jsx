import { useEffect, useMemo, useRef, useState } from "react";
import { useTypewriter, Typewriter, Cursor } from "react-simple-typewriter";
import Skill from "./components/Skill";
import AOS from "aos";
import "aos/dist/aos.css";

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

    const [details, setDetails] = useState([
        {
            detailType: "Date of Birth",
            detailValue: "10th October 2003",
        },
        {
            detailType: "City",
            detailValue: "Ghaziabad",
        },
        {
            detailType: "Age",
            detailValue: "20",
        },
        {
            detailType: "Degree",
            detailValue: "Bachelor of Technology (Pursuing)",
        },
        {
            detailType: "Email",
            detailValue: "20031010.aman@gmail.com",
        },
    ]);

    const skillMemo = useMemo(
        () =>
            skills.map((s) => {
                return <Skill skill={s.skill} percentage={"" + s.percentage} />;
            }),
        [skills]
    );

    const handleScrollClick = (event) => {
        event.preventDefault();
        window.scroll({ top: 0, behavior: "smooth" });
    };

    const upRef = useRef();

    useEffect(() => {
        AOS.init();
        window.scrollTo(0, 0);
    }, []);

    const handleScroll = (event) => {
        console.log(window.scrollY);
        console.log(upRef.current);

        if (window.scrollY > 0) {
            upRef.current.classList.remove("hidden");
            upRef.current.classList.add("animate-fadeIn");
        } else {
            upRef.current.classList.add("hidden");
            upRef.current.classList.remove("animate-fadeIn");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className=" h-lvh w-auto bg-[#212121] text-[white]">
                <div
                    data-aos="fade-down"
                    data-aos-duration="2000"
                    className=" h-full flex flex-col justify-center items-center gap-[1%]"
                >
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
            </div>

            <div className="bg-black">
                <div
                    id="aboutDiv"
                    className="flex flex-col gap-6 items-center"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="500"
                    data-aos-once="false"
                >
                    <p
                        id="aboutHeading"
                        className="text-center text-5xl font-bold text-blue-600
                            mt-7 underline"
                    >
                        ABOUT
                    </p>

                    <p
                        id="aboutContent"
                        className=" font-semibold text-center text-xl
                            text-[#cecea5] w-[90%] "
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Officia ratione odio odit eius numquam ipsum
                        deserunt corporis, ut eos provident neque rem hic
                        reiciendis earum magni culpa non assumenda animi
                        incidunt aliquam dolorem aut iste, distinctio quo?
                        Placeat sapiente debitis, doloribus recusandae,
                        excepturi maxime quod dolor facere molestiae eius cum
                        consectetur repudiandae, molestias illum dicta
                        voluptates ipsam id similique necessitatibus alias
                        dolores. Quae provident earum nisi explicabo iure, fuga
                        facere?
                    </p>
                </div>

                <div
                    id="details1"
                    className=" mt-28 flex flex-col items-center"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-once="false"
                >
                    <p
                        id="details1Heading"
                        className=" text-4xl text-center font-bold text-blue-600 underline"
                    >
                        UI/UX Designer & Web Developer
                    </p>

                    <p
                        id="details1Intro"
                        className="mt-5 mb-5 text-center italic font-semibold text-[#cecea5] text-xl w-[90%]"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloremque eos saepe iusto, a vitae dolore. Inventore
                        laudantium distinctio animi ipsa, quas ullam commodi
                        nihil ratione nostrum sit quos cupiditate eveniet.
                    </p>

                    <ul className="text-[#dbd3d3] text-xl">
                        {details.map((detail) => {
                            return (
                                <li className=" ml-6 text-lg">
                                    <span className=" font-extrabold text-[#e77272]">
                                        {detail.detailType} :
                                    </span>
                                    <span className=" text-[#d9a2d9] ml-1">
                                        {detail.detailValue}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>

                    <p
                        id="details1Outro"
                        className="mt-5 text-center font-semibold text-[#cecea5] text-xl w-[90%]"
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptate voluptas sit veniam dolores, nisi alias
                        porro perspiciatis optio quia voluptates id officia
                        eligendi dignissimos accusantium modi nam quaerat
                        quidem. Voluptas?
                    </p>
                </div>

                <div
                    id="skills"
                    className="mt-28 text-white flex flex-col justify-center "
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-once="false"
                >
                    <p
                        id="skillsHeading"
                        className="text-blue-600 text-4xl underline mb-5 self-center"
                    >
                        Skills
                    </p>

                    <p
                        id="skillsContent"
                        className="w-[90%] text-xl text-center self-center text-[#cecea5]"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quia illum velit odio vitae porro doloremque vero,
                        fugit odit magnam consequuntur sunt dolores? Tenetur
                        inventore rerum commodi totam nesciunt sit asperiores.
                    </p>
                    {skillMemo}
                </div>

                <div
                    id="projects"
                    className="text-white mt-28 "
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-once="false"
                >
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
                                    className="text-2xl font-semibold mb-3 text-center underline text-[#e77272]"
                                >
                                    {p.projectName}
                                </p>

                                <p
                                    id="project1Content"
                                    className="w-[90%] text-center text-lg m-auto text-[#cecea5]"
                                >
                                    {p.projectContent}
                                </p>

                                <div className=" flex justify-around text-lg p-2 mt-4">
                                    <a href={p.projectLiveLink} target="_blank">
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

                <div
                    id="services"
                    className="text-white mt-28 "
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-once="false"
                >
                    <h1
                        id="servicesHeading"
                        className="text-4xl text-center text-blue-500 underline mb-6 font-bold "
                    >
                        Services
                    </h1>

                    <p
                        id="servicesContent"
                        className="w-[90%] text-center text-lg ml-auto mr-auto mb-8 text-[#cecea5]"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quae id blanditiis et ad facilis quos dolorum iure
                        iste vel! Necessitatibus quasi, nemo laborum culpa
                        reprehenderit excepturi illo asperiores maiores
                        voluptates?
                    </p>

                    {services.map((s) => {
                        return (
                            <div
                                id={`service${s.serviceNumber}`}
                                className=""
                                key={s.serviceNumber}
                            >
                                <h2
                                    id={`service${s.serviceNumber}Heading`}
                                    className="text-2xl text-center font-semibold text-[#a0c6a0] mb-2 mt-8"
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

                <div
                    id="contact"
                    className="text-white mt-28"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-once="false"
                >
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
                                    className="flex gap-3 items-center mt-8 w-[90%] ml-auto mr-auto"
                                >
                                    <span>{c.contactSvg}</span>
                                    <p>
                                        <p className="text-2xl font-semibold text-green-400">
                                            {c.contactType}:
                                        </p>
                                        <p className=" text-xl text-red-500">
                                            {c.contactContent}
                                        </p>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div
                className=" text-black fixed bottom-10 right-10 cursor-pointer hidden bg-green-300 p-3 rounded-lg hover:scale-105 duration-300 ease-in-out font-extrabold "
                id="upButton"
                onClick={handleScrollClick}
                ref={upRef}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-8"
                >
                    <path
                        fill-rule="evenodd"
                        d="M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
        </>
    );
}

export default App;
