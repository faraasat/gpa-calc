import type { AppProps } from "next/app";
import { Fragment } from "react";

import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import OverlayComponent from "../components/overlay/overlay";
import GradeSettingComponent from "../components/grade-setting/grade-setting";

import { IGrade } from "./../components/grading/grading.d";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const grade_list: Array<IGrade> = [
    { text: "A", min: 85, max: 100, value: 4 },
    { text: "A-", min: 80, max: 84, value: 3.67 },
    { text: "B+", min: 75, max: 79, value: 3.33 },
    { text: "B", min: 71, max: 74, value: 3 },
    { text: "B-", min: 68, max: 70, value: 2.67 },
    { text: "C+", min: 64, max: 67, value: 2.33 },
    { text: "C", min: 60, max: 63, value: 2 },
    { text: "C-", min: 57, max: 59, value: 1.87 },
    { text: "D+", min: 53, max: 56, value: 1.33 },
    { text: "D", min: 50, max: 52, value: 1 },
    { text: "F", min: 0, max: 49, value: 0 },
  ];

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
      <div id="grading-window">
        <OverlayComponent />
        <GradeSettingComponent gradings={grade_list} />
      </div>
    </Fragment>
  );
}

export default MyApp;
