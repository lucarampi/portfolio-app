/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Luca A.R. | Home</title>
      <link rel="shortcut icon" type="image/svg+xml" href="house.svg" />
    </Head>
      <Header/>
    </>
  );
};

export default Home;
