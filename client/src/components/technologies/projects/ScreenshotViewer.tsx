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
      className="absolute h-screen top-0 left-0 w-screen flex flex-col justify-center items-center"
    >
      <div
        onClick={() => setScreenshotViewer(false)}
        className="self-end border border-white rounded-full w-7 h-7 lg:w-10 lg:h-10 flex items-center justify-center mr-10 lg:mr-32 cursor-pointer"
      >
        <i className="fa-solid fa-xmark lg:text-3xl"></i>
      </div>
      <figure className="max-h-[50%] max-w-[90%] my-5 rounded-lg overflow-hidden">
        <img className="w-full h-full" src={picUrl} alt="project-screenshot" />
      </figure>
      <ul className="flex gap-x-5 justify-center w-[90%]">
        {screenshots.map((s) => (
          <li key={s.id}>
            <figure className="w-20 h-20 overflow-hidden rounded-lg flex items-center justify-center hover-pic">
              <img
                onClick={(e) => setPicUrl(e.currentTarget.src)}
                src={s.url}
                alt="project-screenshot"
                className="w-full cursor-pointer"
              />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScreenshotViewer;
