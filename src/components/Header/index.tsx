import styles from "./styles.module.scss";
import ActiveLink from "../ActiveLink";
export function Header() {
  return (
    <header className="bg-zinc-800 px-20 h-16 max-w-[1440px]">
      <div className="flex h-full m-auto items-center justify-between max-w-[1020px]">
        <p className="">LOGO</p>
        <nav className="flex ml-10 h-full items-center gap-16 text-xl">
          <ActiveLink
            activeClassName="text-zinc-100"
            defaultClassName="text-zinc-400"
            href="/"
          >
            <a>Home</a>
          </ActiveLink>
          <ActiveLink
            activeClassName="text-zinc-100"
            defaultClassName="text-zinc-400"
            href="/projects"
          >
            <a>Projects</a>
          </ActiveLink>
          <ActiveLink
            activeClassName="text-zinc-100"
            defaultClassName="text-zinc-400"
            href="/contact"
          >
            <a>Contact</a>
          </ActiveLink>
        <p className="text-cyan-700">BOTÃO DE CONTATO</p>
        </nav>

      </div>
    </header>
  );
}
