import "./projectSummary.css";
import { useState } from "react";
import { tDetailedProject } from "../../../types/tProject";

type tProjectSummaryProps = {
  project: tDetailedProject;
};

function ProjectSummary({ project }: tProjectSummaryProps) {
  const [screenshotPanel, setScreenshotPanel] = useState(false);

  return (
    <article
      id="project"
      className="flex flex-col h-fit py-4 rounded-xl w-[95%] mx-auto"
    >
      <div className="flex md:justify-center">
        <figure className="hidden overflow-hidden  md:flex items-center justify-center w-32 h-32 bg-red-400 rounded-lg">
          <img src={project.screenshots[0].url} alt="project-picture" />
        </figure>
        <div className="w-full md:w-[80%] px-4 flex flex-col justify-between">
          <h3 className="text-lg font-black capitalize">{project.name}</h3>
          <p className="text-wrap">{project.description}</p>
          <a
            className="underline italic"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <div className="flex flex-col-reverse md:flex-row justify-between">
            <button
              onClick={() => setScreenshotPanel(!screenshotPanel)}
              className="cursor-pointer font-black hover:shadow-sm hover:shadow-purple-600 rounded-full p-2 md:px-6 md:py-0 my-3 bg-purple-700"
            >
              Screenshots
            </button>
            <ul className="flex flex-wrap justify-center md:justify-end gap-x-5 justify-self-end w-full md:w-[70%]">
              {project.technologies.length > 0 ? (
                project.technologies.map((t) => (
                  <li key={t.id}>
                    <figure className="w-7 flex justify-center items-center">
                      <img
                        className="w-full"
                        title={t.name}
                        src={t.logoUrl}
                        alt={t.name}
                      />
                    </figure>
                  </li>
                ))
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </div>
      {screenshotPanel ? (
        project.screenshots.length > 0 ? (
          <div>
            <div className="w-[95%] mx-auto mt-3 border-b-2 border-[rgba(255,255,255,0.05)]"></div>
            <ul className="flex flex-wrap justify-center gap-4 p-5">
              {project.screenshots.map((s) => (
                <li key={s.id}>
                  <figure className="w-20 h-20 overflow-hidden rounded-lg flex items-center justify-center">
                    <img
                      src={s.url}
                      alt="project-screenshot"
                      className="w-full"
                    />
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <span>There's no screenshots</span>
        )
      ) : (
        <></>
      )}
    </article>
  );
}

export default ProjectSummary;
