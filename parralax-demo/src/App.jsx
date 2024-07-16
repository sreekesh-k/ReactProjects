import Parralax from "./Parralax.jsx"

import glitch from "./assets/glitch.png"
import contentglitch from "./assets/content-glitch.png"
import logo from "./assets/logo.png"
import agents from "./assets/agents.png"
import floor from "./assets/floor.png"
function App() {


  return (
    <main>
      <header className="h-[100svh] w-[100svw] overflow-hidden relative">
        <Parralax>
          <img data-depth="0.5" id="content-glitch" className="w-full h-full object-cover anim-studder" src={contentglitch} alt="" />
          <img data-depth="0.4" id="glitch" className="w-full h-full object-cover anim-studder" src={glitch} alt="" />
          <img data-depth="0.35" id="logo" className="w-full h-full object-cover" src={logo} alt="" />
          <img data-depth="0.1" id="floor" className="w-full h-full object-cover" src={floor} alt="" />
          <div data-depth="0.15">
            <div className="flex w-full h-full items-center justify-end">
              <div className="h-[45%] grid w-3/5 items-start justify-center">
                <h3 className="uppercase text-6xl hidden md:block md:text-4xl lg:block lg:text-6xl xl:block font-bold">South Indias Biggest</h3>
              </div>
            </div>
          </div>
          <img data-depth="0.2" id="agents" className="w-full h-full object-cover" src={agents} alt="" />
          <div data-depth="0.1" className="w-full h-full">
            <div className="flex justify-end items-center w-full h-full">
              <div className="h-[65%] grid w-3/5 justify-start items-end">
                <h3 className="uppercase text-4xl hidden md:block md:text-3xl lg:block xl:block font-bold">Valorant Tournament</h3>
              </div>
            </div>
          </div>
        </Parralax>
        <div className="absolute p-3 top-0 left-0 text-white h-[95%] grid sm:w-1/2 md:w-1/3 lg:w-2/5 xl:w-2/5 place-items-center content-center">
          <div>
            <div className="mb-6">
              <h3 className="uppercase text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold">Rajagairi College of Social Sciences</h3>
              <h3 className="font-semibold">In collaboration with <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl tracking-widest ml-2">AKEF</span></h3>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-300 bg-clip-text text-transparent">
              <h1 className="text-6xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-8xl ml-2">
                EUPHORIA
              </h1>
              <h4 className="flex justify-between text-xl w-[95%] font-semibold">
                <span>R</span>
                <span>E</span>
                <span>S</span>
                <span>P</span>
                <span>A</span>
                <span>W</span>
                <span>N</span>
              </h4>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}

export default App
