import styles from "./styles.module.scss";
import ActiveLink from "../ActiveLink";
import TypeIt from "typeit-react";
import { Background } from "../Background";
export function Header() {
  return (
    <>
      <div className="absolute w-full h-screen overflow-hidden flex justify-center items-center">
        <Background />
        <header className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-[94%] mix-blend-screen">
          <div className="flex flex-col h-full gap-5 my-0 mx-auto items-center justify-center max-w-[1020px]">
            <TypeIt
              className="text-black text-center text-9xl font-mono font-semibold antialiased bg-blend-screen"
              options={{
                lifeLike: true,
                speed: 100,
                afterComplete: (instance) => {
                  instance.destroy();
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
            <nav className="flex ml-10 gap-16 text-xl text-black">
              <ActiveLink
                activeClassName="text-black"
                defaultClassName="text-black-100"
                href="/"
              >
                <a>Home</a>
              </ActiveLink>
              <ActiveLink
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
              </ActiveLink>
              <p className="text-cyan-700">BOTÃO DE CONTATO</p>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
