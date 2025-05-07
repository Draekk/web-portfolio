import { useEffect, useRef } from "react";
import { tScreenshot } from "../../../types/tProject";

type tScreenshotViewerProps = {
  screenshotViewer: boolean;
  setScreenshotViewer: (value: React.SetStateAction<boolean>) => void;
  picUrl: string;
  setPicUrl: (value: React.SetStateAction<string>) => void;
  screenshots: tScreenshot[];
};

function ScreenshotViewer({
  screenshotViewer,
  setScreenshotViewer,
  picUrl,
  setPicUrl,
  screenshots,
}: tScreenshotViewerProps) {
  const modalScreenshotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    screenshotViewer && modalScreenshotRef.current
      ? modalScreenshotRef.current.focus()
      : null;
  }, [screenshotViewer]);

  const onEscapeDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      setScreenshotViewer(false);
    }
  };

  return (
    <div
      ref={modalScreenshotRef}
      tabIndex={0}
      onKeyDown={onEscapeDown}
      id="screenshot-viewer"
      className="absolute h-screen top-0 left-0 z-50 w-screen py-2 lg:py-4 flex flex-col justify-between items-center"
    >
      <div
        onClick={() => setScreenshotViewer(false)}
        className="self-end border border-white rounded-full w-7 h-7 lg:w-10 lg:h-10 flex items-center justify-center mt-5 mr-10 lg:mr-32 cursor-pointer"
      >
        <i className="fa-solid fa-xmark lg:text-3xl"></i>
      </div>
      <figure className="flex items-center justify-center h-[70%] min-w-fit max-w-[90%] my-5 rounded-sm md:rounded-lg overflow-x-auto overflow-y-hidden">
        <img
          className="w-full h-full object-contain"
          src={picUrl}
          alt="project-screenshot"
        />
      </figure>
      <ul className="flex gap-x-5 justify-center w-[90%]">
        {screenshots.map((s) => (
          <li key={s.id}>
            <figure className="w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-sm md:rounded-lg flex items-center justify-center hover-pic target:border-2 target:border-teal-400">
              <img
                onClick={(e) => setPicUrl(e.currentTarget.src)}
                src={s.url}
                alt="project-screenshot"
                className="w-full h-full object-cover cursor-pointer"
              />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScreenshotViewer;
