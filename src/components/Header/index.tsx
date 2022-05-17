
import ActiveLink from "../ActiveLink";
import TypeIt from "typeit-react";
import { Background } from "../Background";
import { useState } from "react";

export function Header() {
  const [hasEnded, setHasEnded] = useState(false)  
  return (
    <>
      <div className="absolute w-full h-screen overflow-hidden flex justify-center items-center">
        <Background />
        <section className="absolute px-2 top-0 left-0 w-full h-full bg-white bg-opacity-[94%] mix-blend-screen">
          <div className="flex flex-col h-full gap-7 my-0 mx-auto items-center justify-center max-w-[1020px]">
            
            <div  className="text-black text-center font-mono font-black antialiased text-5xl sm:text-7xl md:text-8xl lg:text-10xl xl:text-12xl">

            <TypeIt
              options={{
                lifeLike: true,
                speed: 100,
                afterComplete: function (instance: { destroy: () => void; }) {
                  instance.destroy();
                  setHasEnded(true);
                },
              }}
              getBeforeInit={(instance) => {
                instance
                  .type(" ")
                  .pause(1250)
                  .type("Think...")
                  .pause(450)
                  .delete(2)
                  .pause(150)
                  .type(" design.")
                  .pause(200)
                  .move(-5)
                  .delete(2, { speed: 0.1 })
                  .type(" De")
                  .pause(180)
                  .move(5, { speed: 350 })
                  .type(" Create.")
                  .pause(950)
                  .delete(1)
                  .pause(200)
                  .type("!")
                  .pause(500);

                return instance;
              }}
            />
            </div>
            <nav className={`flex px-5 flex-wrap justify-center items-center gap-x-10 gap-y-8 text-black text-xl sm:text-2xl md:text-2xl lg:text-3xl ${hasEnded? "opacity-100" : "opacity-0"} + transition-all ease-in-out duration-500`} >
              {/* <ActiveLink
                activeClassName="text-black"
                defaultClassName="text-black-100"
                href="/"
              >
                <a>Home</a>
              </ActiveLink> */}
              {/* <ActiveLink
                activeClassName="text-black"
                defaultClassName="text-black-100"
                href="/projects"
              >
                <a>Projects</a>
              </ActiveLink>
              <ActiveLink
                activeClassName="text-black"
                defaultClassName="text-black-100"
                href="/contact"
              >
                <a>Contact</a>
              </ActiveLink> */}

              <a
                href="https://drive.google.com/file/d/1_P6PPjlM0DLPS7r1h29P3AG8qdHWtyE3/view?usp=sharing"
                target={"_blank"}
                className=" py-2 px-7 w-fit bg-black text-white hover:text-black rounded-full ring-offset-white ring-offset-3 hover:ring-4 ring-black border-transparent flex justify-center items-center font-medium hover:bg-white focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-offset-white focus:ring-black transition-all" rel="noreferrer"
              >
                Resume
              </a>
            </nav>
        <footer className="absolute bottom-2 text-neutral-500">
          Made by <a 
          className="underline underline-offset-2 hover:text-black"
          target={"_blank"}
          href="https://www.linkedin.com/in/lucarampi/"
          rel="noreferrer">Luca A.R.</a>
        </footer>
          </div>
        </section>
      </div>
    </>
  );
}
