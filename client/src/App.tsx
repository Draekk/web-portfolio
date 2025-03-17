import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [navPopUp, setNavPopUp] = useState(false);
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 640px)").matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    const handleResize = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => {
      setIsMobile(e.matches); // Actualiza el estado cuando cambia el tamaño de la pantalla
      setNavPopUp(false);
    };

    mediaQuery.addEventListener("change", handleResize); // Escucha cambios de tamaño
    return () => mediaQuery.removeEventListener("change", handleResize); // Limpia el evento
  }, []);

  return (
    <>
      <header className='py-0 my-0 h-16 bg-none flex justify-between items-center px-2.5'>
        <h1 className='text-nowrap font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white'>WEB PORTFOLIO</h1>
        <nav className='flex justify-end items-center h-full w-full'>
          {isMobile ?
          <>
            {!navPopUp ?
              <>
                <div onClick={() => setNavPopUp(true)} className='menu-ico overflow-hidden rounded-full py-0.5 hover:cursor-pointer hue-rotate-60 hover:hue-rotate-390 hover:-rotate-720 duration-700'>
                  <p className='font-black text-3xl pb-0.5'>🌀</p>
                </div>
              </>
              :
              <>
                <ul onClick={() => setNavPopUp(false)} className='absolute top-6 flex flex-col gap-2.5'>
                  <li className='h-full'><a className='text-white font-semibold h-full flex items-center' href="#">Home</a></li>
                  <li className='h-full'><a className='text-white font-semibold h-full flex items-center' href="#">Technologies</a></li>
                  <li className='h-full'><a className='text-white font-semibold h-full flex items-center' href="#">Contact me</a></li>
                </ul>
              </>
            }
          </>
          :
          <>
            <ul className='flex justify-end gap-10 items-center h-full'>
              <li className='h-full'><a className='text-white font-semibold h-full flex items-center lg:text-lg xl:text-xl' href="#">Home</a></li>
              <li className='h-full'><a className='text-white font-semibold h-full flex items-center lg:text-lg xl:text-xl' href="#">Technologies</a></li>
              <li className='h-full'><a className='text-white font-semibold h-full flex items-center lg:text-lg xl:text-xl' href="#">Contact me</a></li>
            </ul>
          </>
          }
        </nav>
        
      </header>
      <main  onClick={() => setNavPopUp(false)} className='h-full'>

      </main>
    </>
  )
}

export default App
