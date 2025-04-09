type THeaderProps = {
  isMobile: boolean;
  navPopUp: boolean;
  setNavPopUp: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ isMobile, navPopUp, setNavPopUp }: THeaderProps) {
  return (
    <header className="py-0 my-0 h-[15vh] bg-none flex justify-between items-center px-2.5">
      <h1 className="text-nowrap font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white">
        WEB PORTFOLIO
      </h1>
      <nav className="flex justify-end items-center h-full w-full">
        {isMobile ? (
          <>
            {!navPopUp ? (
              <i
                onClick={() => setNavPopUp(true)}
                className="fa-solid fa-bars text-white text-2xl"
              ></i>
            ) : (
              <>
                <ul
                  onClick={() => setNavPopUp(false)}
                  className="absolute top-4 right-0 flex flex-col items-end gap-2.5 p-2"
                >
                  <li className="h-full">
                    <a
                      className="text-white font-semibold h-full flex items-center"
                      href="#home"
                    >
                      Home
                    </a>
                  </li>
                  <li className="h-full">
                    <a
                      className="text-white font-semibold h-full flex items-center"
                      href="#personal-experience"
                    >
                      Experience
                    </a>
                  </li>
                  <li className="h-full">
                    <a
                      className="text-white font-semibold h-full flex items-center"
                      href="#technologies"
                    >
                      Technologies
                    </a>
                  </li>
                  <li className="h-full">
                    <a
                      className="text-white font-semibold h-full flex items-center"
                      href="#"
                    >
                      Contact me
                    </a>
                  </li>
                </ul>
              </>
            )}
          </>
        ) : (
          <>
            <ul className="flex justify-end gap-10 items-center h-full">
              <li className="h-full">
                <a
                  className="text-white font-semibold h-full flex items-center lg:text-lg xl:text-xl"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="h-full">
                <a
                  className="text-white font-semibold h-full flex items-center lg:text-lg xl:text-xl"
                  href="#personal-experience"
                >
                  Experience
                </a>
              </li>
              <li className="h-full">
                <a
                  className="text-white font-semibold h-full flex items-center lg:text-lg xl:text-xl"
                  href="#technologies"
                >
                  Technologies
                </a>
              </li>
              <li className="h-full">
                <a
                  className="text-white font-semibold h-full flex items-center lg:text-lg xl:text-xl"
                  href="#"
                >
                  Contact me
                </a>
              </li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
