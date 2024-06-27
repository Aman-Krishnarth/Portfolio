import { memo, useEffect, useMemo, useRef, useState } from "react";
import { useTypewriter, Typewriter, Cursor } from "react-simple-typewriter";
import Skill from "./components/Skill";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    const upRef = useRef();
    const menuRef = useRef();
    const aboutDivRef = useRef();
    const detailsDivRef = useRef();
    const skillsDivRef = useRef();
    const projectDiv = useRef();
    const servicesDivRef = useRef();
    const contactDivRef = useRef();
    const menuButton = useRef();

    const [text] = useTypewriter({
        words: ["Problem Solver", "Frontend Developer"],
        loop: 0,
        typeSpeed: 150,
        deleteSpeed: 100,
    });

    const [skills, setSkills] = useState([
        {
            skill: "HTML",
            percentage: "85",
        },
        {
            skill: "Tailwind",
            percentage: "75",
        },
        {
            skill: "JavaScript",
            percentage: "90",
        },
        {
            skill: "ReactJS",
            percentage: "80",
        },
        {
            skill: "C++",
            percentage: "75",
        },
        {
            skill: "Python",
            percentage: "90",
        },
    ]);

    const [projects, setProjects] = useState([
        {
            projectNumber: "1",
            projectName: "2048 Game",
            projectContent:
                "Dive into my rendition of the classic 2048 game, meticulously crafted using HTML, CSS, and JavaScript. This project showcases my proficiency in front-end development, where I combined intuitive user interface design with responsive layout techniques to recreate a popular puzzle game. From implementing game logic to enhancing user interactions, every aspect of this project reflects my passion for creating engaging and functional web experiences. Explore how I leveraged my skills in HTML for structure, CSS for styling, and JavaScript for dynamic gameplay to deliver a captivating digital game that challenges and entertains users alike.",
            projectLiveLink: "https://aman-krishnarth.github.io/2048/",
            projectGithub: "https://github.com/Aman-Krishnarth/2048",
        },
        {
            projectNumber: "2",
            projectName: "Suodku Game",
            projectContent:
                "Explore my interactive Sudoku game built from scratch using HTML, CSS, and JavaScript. This project demonstrates my expertise in front-end development, where I meticulously designed a responsive and intuitive user interface for a classic puzzle game. From implementing the game logic to ensuring smooth user interactions, every detail has been crafted to provide a seamless gaming experience. Dive into this project to see how I utilized HTML for structure, CSS for styling and layout, and JavaScript for dynamic functionality, offering players a challenging yet enjoyable way to engage with puzzles online.",
            projectLiveLink: "https://aman-krishnarth.github.io/SudokuGame/",
            projectGithub: "https://github.com/Aman-Krishnarth/SudokuGame",
        },
        {
            projectNumber: "3",
            projectName: "Weather App",
            projectContent:
                "Discover my weather app created with React, showcasing my proficiency in modern front-end development. This project integrates real-time weather data from a third-party API, offering users an intuitive interface to check current weather conditions and forecasts. Leveraging React's component-based architecture, I designed a responsive and interactive app that dynamically updates information based on user inputs. From fetching data asynchronously to handling state management efficiently, every aspect of this project reflects my commitment to delivering seamless and engaging user experiences. Explore how I combined React with CSS for styling and Axios for data fetching to develop a robust weather app that keeps users informed with accurate and visually appealing weather updates.",
            projectLiveLink: "https://aman-krishnarth.github.io/WeatherApp/",
            projectGithub: "https://github.com/Aman-Krishnarth/WeatherApp",
        },
    ]);

    const [services, setServices] = useState([
        {
            serviceNumber: 1,
            serviceName: "Web Development",
            serviceContent:
                "I specialize in providing comprehensive web development services aimed at transforming your ideas into compelling digital solutions. Whether you're launching a new website, revamping an existing one, or seeking to develop a custom web application, I offer expertise in front-end and back-end development to meet your specific needs. From responsive design that ensures optimal viewing across devices to implementing robust functionality using modern technologies such as HTML5, CSS3, JavaScript, and frameworks like React and Node.js, I deliver solutions that are not only visually appealing but also user-friendly and scalable. Let's collaborate to create websites and applications that resonate with your audience and drive meaningful engagement and results.",
        },
        {
            serviceNumber: 2,
            serviceName: "Problem Solver",
            serviceContent:
                "Problem-solving is at the core of my service offerings, aimed at tackling your most challenging digital hurdles effectively. Whether you're facing performance issues with your current website, seeking to enhance user engagement through intuitive design improvements, or needing custom solutions to automate processes and boost efficiency, I bring a proactive approach and technical expertise to the table. With a deep understanding of web development best practices and a knack for troubleshooting and innovation, I specialize in diagnosing issues, proposing strategic solutions, and implementing them efficiently. Let's work together to identify and resolve your digital challenges, ensuring your online presence not only meets but exceeds your expectations.",
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

    const [menuButtons, setMenuButtons] = useState([
        "Home",
        "Details",
        "Skills",
        "Projects",
        "Services",
        "Contact",
    ]);

    const skillMemo = useMemo(
        () =>
            skills.map((s) => {
                return <Skill skill={s.skill} percentage={s.percentage} />;
            }),
        [skills]
    );

    window.addEventListener("click", (event) => {
        if (menuRef.current?.classList.contains("hidden")) {
            console.log("nahi hai");
        } else {
            menuRef.current.classList.add("hidden");
            console.log("hai");
        }

        if (menuButton.current?.classList.contains("hidden")) {
            menuButton.current.classList.remove("hidden");
            console.log("nahi hai");
        } else {
            console.log("hai");
        }
    });

    const handleScrollClick = (event) => {
        event.preventDefault();
        window.scroll({ top: 0, behavior: "smooth" });
    };

    const handleCrossClick = () => {
        menuRef.current.classList.add("hidden");
        menuButton.current.classList.remove("hidden");
    };

    const handleSectionClick = (event) => {
        menuRef.current.classList.add("hidden");
        menuButton.current.classList.remove("hidden");

        if (event.target.textContent === "Home") {
            aboutDivRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (event.target.textContent === "Details") {
            detailsDivRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (event.target.textContent === "Skills") {
            skillsDivRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (event.target.textContent === "Projects") {
            projectDiv.current.scrollIntoView({ behavior: "smooth" });
        } else if (event.target.textContent === "Services") {
            servicesDivRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (event.target.textContent === "Contact") {
            contactDivRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleMenuClick = (event) => {
        event.stopPropagation();
    };

    useEffect(() => {
        AOS.init();
        window.scrollTo(0, 0);
    }, []);

    const handleScroll = (event) => {
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

    const handleMenuButtonClick = (event) => {
        event.stopPropagation();
        menuRef.current.classList.remove("hidden");
        menuButton.current.classList.add("hidden");
    };

    return (
        <>
            <div
                className="fixed top-7 right-10 cursor-pointer "
                onClick={handleMenuButtonClick}
                ref={menuButton}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-9"
                    style={{ color: "white" }}
                >
                    <path
                        fill-rule="evenodd"
                        d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>

            <div
                className="h-lvh w-3/4 bg-[#827f7f] fixed top-0 z-10 hidden "
                ref={menuRef}
                onClick={handleMenuClick}
            >
                <div
                    className=" text-black absolute right-2 top-2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
                    onClick={handleCrossClick}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-9"
                        style={{ color: "orange" }}
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>

                <div className=" h-full flex flex-col justify-center items-center">
                    {menuButtons.map((value) => {
                        return (
                            <div className=" text-blue-200 text-4xl underline w-3/4 text-center p-4">
                                <span
                                    className="cursor-pointer"
                                    onClick={handleSectionClick}
                                >
                                    {value}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

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
                    ref={aboutDivRef}
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
                        className=" font-semibold text-center text-2xl
                        text-[#cecea5] w-[90%] "
                    >
                        Greetings! I'm Aman Krishnarth, a dedicated web
                        developer with a passion for crafting engaging digital
                        experiences. I specialize in creating responsive and
                        user-centric websites. My journey is fueled by a
                        commitment to innovation and a drive to deliver
                        impactful solutions. Let's connect and create something
                        remarkable together!
                    </p>
                </div>

                <div
                    id="details1"
                    className=" mt-28 flex flex-col items-center"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-once="false"
                    ref={detailsDivRef}
                >
                    <p
                        id="details1Heading"
                        className=" text-5xl text-center font-bold text-blue-600 underline"
                    >
                        UI/UX Designer & Web Developer
                    </p>

                    <p
                        id="details1Intro"
                        className="mt-5 mb-5 text-center italic font-semibold text-[#cecea5] text-2xl w-[90%]"
                    >
                        Passionate about crafting seamless and visually striking
                        digital experiences, I specialize in transforming
                        concepts into functional and aesthetically pleasing
                        websites.
                    </p>

                    <ul className="text-[#dbd3d3] text-2xl">
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
                        Beyond the screen, you might catch me exploring the
                        latest tech trends, attending meetups, or diving into a
                        new coding challenge. I'm always up for connecting with
                        fellow tech enthusiasts, so let's chat about all things
                        code!
                    </p>
                </div>

                <div
                    id="skills"
                    className="mt-28 text-white flex flex-col justify-center "
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-once="false"
                    ref={skillsDivRef}
                >
                    <p
                        id="skillsHeading"
                        className="text-blue-600 text-5xl underline mb-5 self-center"
                    >
                        Skills
                    </p>

                    <p
                        id="skillsContent"
                        className="w-[90%] text-2xl text-center self-center text-[#cecea5] mb-5"
                    >
                        I possess a diverse skill set encompassing both UI/UX
                        design and web development. With proficiency in HTML,
                        CSS, JavaScript, and frameworks like React, for
                        designing captivating user interfaces, I excel in
                        creating seamless digital experiences. My approach
                        integrates user-centered design principles with
                        technical acumen, enabling me to craft intuitive
                        interfaces that elevate user engagement and
                        satisfaction.
                    </p>
                    {skillMemo}
                </div>

                <div
                    id="projects"
                    className="text-white mt-28 "
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-once="false"
                    ref={projectDiv}
                >
                    <h1
                        id="PROJECTS"
                        className="text-5xl text-blue-600 text-center mb-10 font-bold underline "
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
                                    className="w-[90%] text-center text-xl m-auto text-[#cecea5]"
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
                    ref={servicesDivRef}
                >
                    <h1
                        id="servicesHeading"
                        className="text-5xl text-center text-blue-500 underline mb-6 font-bold "
                    >
                        Services
                    </h1>

                    <p
                        id="servicesContent"
                        className="w-[90%] text-center text-2xl ml-auto mr-auto mb-8 text-[#cecea5]"
                    >
                        As a web developer, I offer a range of services tailored
                        to bring your digital vision to life. Whether you're
                        looking to establish a strong online presence, optimize
                        existing websites for performance and usability, or
                        create custom web applications from scratch, I'm here to
                        help. My expertise spans front-end development using
                        HTML, CSS, and JavaScript frameworks like React and
                        Vue.js, as well as back-end development with Node.js and
                        Express. I specialize in responsive design, ensuring
                        your website looks great on any device, and I emphasize
                        clean, efficient code that adheres to best practices for
                        security and scalability. Let's collaborate to build
                        websites and applications that not only meet your
                        objectives but exceed expectations in both functionality
                        and user experience.
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
                                    className="w-[90%] text-center ml-auto mr-auto text-xl"
                                >
                                    {s.serviceContent}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div
                    id="contact"
                    className="text-white mt-28 bg-[#212121] p-6"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-once="false"
                    ref={contactDivRef}
                >
                    <h1
                        id="contactHeading"
                        className="text-4xl text-blue-500 font-bold underline text-center mb-5"
                    >
                        Contact
                    </h1>
                    <div id="contacts" className="">
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
