import "./projectSummary.css";
import { useState } from "react";
import { tDetailedProject } from "../../../types/tProject";
import ScreenshotViewer from "./ScreenshotViewer";
import { tBtnScreenshot } from "../../../types/tTextLang";

type tProjectSummaryProps = tBtnScreenshot & {
  project: tDetailedProject;
  picUrl: string;
  setPicUrl: (value: React.SetStateAction<string>) => void;
};

function ProjectSummary({
  project,
  picUrl,
  setPicUrl,
  text,
  closeText,
}: tProjectSummaryProps) {
  const [screenshotPanel, setScreenshotPanel] = useState(false);
  const [screenshotViewer, setScreenshotViewer] = useState(false);

  return (
    <article
      id="project"
      className="flex flex-col h-fit py-4 rounded-xl w-[95%] mx-auto"
    >
      <div className="flex md:justify-center">
        <figure className="hidden overflow-hidden  md:flex items-center justify-center w-32 h-32 rounded-lg">
          <img
            className="h-full w-full object-cover"
            src={project.screenshots ? project.screenshots[0].url : "#"}
            alt="project-picture"
          />
        </figure>
        <div className="w-full md:w-[80%] px-4 flex flex-col justify-between">
          <h3 className="text-lg lg:text-xl font-black capitalize">
            {project.name}
          </h3>
          <p className="text-wrap text-sm md:text-lg lg:text-xl">
            {project.description}
          </p>
          <div className="my-5">
            <span className="font-black md:text-lg lg:text-xl">Link: </span>
            <a
              className="underline italic text-purple-400 text-sm md:text-lg lg:text-xl"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.url}
            </a>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between">
            <button
              onClick={() => setScreenshotPanel(!screenshotPanel)}
              className={`${
                screenshotPanel
                  ? "bg-red-700 hover:bg-red-600"
                  : "bg-purple-700 hover:shadow-purple-600"
              } cursor-pointer font-black hover:shadow-sm  rounded-full p-2 md:px-6 md:py-0 my-3 `}
            >
              {screenshotPanel ? closeText : text}
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
                <li key={s.id} onClick={() => setScreenshotViewer(true)}>
                  <figure className="w-20 h-20 overflow-hidden rounded-lg flex items-center justify-center hover-pic">
                    <img
                      onClick={(e) => setPicUrl(e.currentTarget.src)}
                      src={s.url}
                      alt="project-screenshot"
                      className="w-full h-full object-cover cursor-pointer"
                    />
                  </figure>
                </li>
              ))}
              {screenshotViewer ? (
                <ScreenshotViewer
                  setScreenshotViewer={setScreenshotViewer}
                  picUrl={picUrl}
                  setPicUrl={setPicUrl}
                  screenshots={project.screenshots}
                ></ScreenshotViewer>
              ) : (
                <></>
              )}
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
