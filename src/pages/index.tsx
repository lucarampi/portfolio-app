/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="flex px-10 pt-10 justify-center">
        <main className="flex flex-1 flex-row justify-evenly">
          <section className="bg-zinc-800 max-h-[550px] max-w-md py-7 px-10 rounded-xl flex flex-col items-center gap-5">
            <img
              className="h-28 rounded-full"
              src="https://avatars.githubusercontent.com/u/85653578?v=4"
              alt="My github avatar image"
            />
            <section className="grid grid-cols-3 gap-3">
              <div className="text-center col-span-3">I code</div>
              <span>code: 10%</span>
              <span>code: 10%</span>
              <span>code: 10%</span>
              <span>code: 10%</span>
              <span>code: 10%</span>
              <span>code: 10%</span>
              <span>code: 10%</span>
              <span>code: 10%</span>
              <span>code: 10%</span>
            </section>

            <section className="grid grid-cols-3 gap-3">
              <div className="text-center col-span-3">Best Stacks:</div>
              <span>code: 10%</span>
              <span>code: 10%</span>
              <span>code: 10%</span>
              <span>code: 10%</span>
              <span>code: 10%</span>
              <span>code: 10%</span>
            </section>

            <section className="grid grid-cols-3 gap-3">
              <div className="text-center col-span-3">I Speak:</div>
              <span>code: 10%</span>
              <span>code: 10%</span>
              <span>code: 10%</span>
            </section>
          </section>
          <section className="bg-zinc-800 max-h-[550px] max-w-xl py-7 px-10 rounded-xl flex flex-col items-center gap-5">
          <article>
              <h2>Title</h2>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa
              tempora aliquid debitis alias a error autem quia incidunt culpa!
              Omnis blanditiis eius id saepe illo esse, totam facere placeat!
            </p>
            </article>

            <article>
              <h2>Title</h2>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa
              tempora aliquid debitis alias a error autem quia incidunt culpa!
              Omnis blanditiis eius id saepe illo esse, totam facere placeat!
            </p>
            </article>

            <article>
              <h2>Title</h2>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa
              tempora aliquid debitis alias a error autem quia incidunt culpa!
              Omnis blanditiis eius id saepe illo esse, totam facere placeat!
            </p>
            </article>

            <article>
              <h2>Title</h2>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa
              tempora aliquid debitis alias a error autem quia incidunt culpa!
              Omnis blanditiis eius id saepe illo esse, totam facere placeat!
            </p>
            </article>

            <div>
              <Link href='/'>
              <a> See more...</a>
              </Link>
            </div>
            
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
