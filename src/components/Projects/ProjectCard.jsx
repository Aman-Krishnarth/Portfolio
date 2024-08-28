import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project, id }) {
  return (
    <div key={id} className="container max-w-fit">
      <div>
        <div className="h-52 w-[70%] m-auto mb-6">
          <img
            src={project.imageSrc}
            alt={`${project.title}`}
            className="h-full w-full rounded-md"
          />
        </div>
        <h3 className=" text-3xl font-bold">{project.title}</h3>

        <p className=" mt-1 text-2xl font-normal">
          {project.description}
        </p>

        <ul className=" w-full mt-4 flex flex-wrap gap-6">
          {project.skills.map((skill, id) => {
            return (
              <li
                className=" text-2xl bg-[#0b2447] rounded-full py-1 px-5 font-medium"
                key={id}
              >
                {skill}
              </li>
            );
          })}
        </ul>

        <div className="links w-full mt-6 flex justify-around">
          <a
            href={project.demo}
            className="link text-white text-3xl bg-[#576cbc] py-1 px-5 font-medium rounded-full"
          >
            Demo
          </a>
          <a
            href={project.source}
            className="link text-white text-3xl bg-[#576cbc] py-1 px-5 font-medium rounded-full"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
