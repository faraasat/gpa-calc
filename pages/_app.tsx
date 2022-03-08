import type { AppProps } from "next/app";
import { Fragment } from "react";

import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import OverlayComponent from "../components/overlay/overlay";
import GradeSettingComponent from "../components/grade-setting/grade-setting";
import { AppContextProvider } from "../context/app-context";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <AppContextProvider>
        <Head>
          <title>GPA and CGPA Calculator</title>
          <meta
            name="description"
            content="In this app you can calculate your GPA and CGPA with great flexibility"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav>
          <Navbar />
        </nav>
        <Component {...pageProps} />
        <div id="grading-window">
          <OverlayComponent />
          <GradeSettingComponent />
        </div>
      </AppContextProvider>
    </Fragment>
  );
}

export default MyApp;
