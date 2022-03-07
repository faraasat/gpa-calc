import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Head from "next/head";
import Navbar from "../components/navbar/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>GPA and CGPA Calculator</title>
        <meta
          name="description"
          content="In this app you can calculate your GPA and CGPA with great flexibility"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <Component {...pageProps} />
      <div id="grading-window"></div>
    </Fragment>
  );
}

export default MyApp;
