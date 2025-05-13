import "../../../App.css";
import { tScreenshot } from "../../../types/tProject";

type tScreenshotViewerProps = {
  setScreenshotViewer: (value: React.SetStateAction<boolean>) => void;
  picUrl: string;
  setPicUrl: (value: React.SetStateAction<string>) => void;
  screenshots: tScreenshot[];
};

function ScreenshotViewer({
  setScreenshotViewer,
  picUrl,
  setPicUrl,
  screenshots,
}: tScreenshotViewerProps) {
  return (
    <div
      id="screenshot-viewer"
      className="absolute h-screen top-0 left-0 z-50 w-screen flex flex-col items-center justify-around"
    >
      <div className="flex flex-col items-center md:w-[70%] justify-center gap-y-5 max-h-[80%]">
        <div
          onClick={() => setScreenshotViewer(false)}
          className="self-end border border-white rounded-full w-5 h-5 lg:w-8 lg:h-8 flex items-center justify-center cursor-pointer"
        >
          <i className="fa-solid fa-xmark lg:text-2xl"></i>
        </div>
        <figure className="flex items-center justify-center h-fit max-h-[90%] rounded-sm md:rounded overflow-hidden">
          <img
            className="w-full h-full object-contain"
            src={picUrl}
            alt="project-screenshot"
          />
        </figure>
      </div>
      <ul className="flex gap-x-2 lg:gap-x-5 justify-start max-w-[90%] max-h-[85px] overflow-x-auto">
        {screenshots.map((s) => (
          <li key={s.id}>
            <figure className="w-16 h-16 lg:w-20 lg:h-20 overflow-hidden rounded-sm md:rounded-lg flex items-center justify-center hover-pic target:border-2 target:border-teal-400">
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
