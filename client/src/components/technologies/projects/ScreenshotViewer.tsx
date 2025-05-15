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
      className="fixed inset-0 z-50 w-full h-full bg-black/90 p-3 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Botón de cerrar flotante */}
      <div className="absolute top-3 right-3 z-50">
        <button
          onClick={() => setScreenshotViewer(false)}
          className="border border-white rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center cursor-pointer bg-black/50 hover:bg-black/70 transition"
        >
          <i className="fa-solid fa-xmark text-white text-lg lg:text-2xl"></i>
        </button>
      </div>

      {/* Imagen principal */}
      <div className="flex flex-col items-center justify-center gap-y-3 w-full md:w-[70%] flex-1 overflow-hidden">
        <figure className="flex items-center justify-center h-full w-full overflow-hidden rounded-sm md:rounded">
          <img
            className="max-h-full max-w-full object-contain"
            src={picUrl}
            alt="project-screenshot"
          />
        </figure>
      </div>

      {/* Miniaturas */}
      <ul className="flex gap-x-2 lg:gap-x-5 justify-start max-w-[90%] h-[85px] overflow-x-auto mt-2">
        {screenshots.map((s) => (
          <li key={s.id}>
            <figure className="w-16 h-16 lg:w-20 lg:h-20 overflow-hidden rounded-sm md:rounded-lg flex items-center justify-center hover-pic">
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
