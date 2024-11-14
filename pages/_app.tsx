import type { AppProps } from "next/app";
import { Fragment } from "react";
import { AptabaseProvider } from "@aptabase/react";
import Head from "next/head";
import { AppContextProvider } from "@/context/app-context";

import Navbar from "@/components/ui/navbar/navbar";
import OverlayComponent from "@/components/ui/overlay/overlay";
import GradeSettingComponent from "@/components/ui/grade-setting/grade-setting";

import "@/styles/globals.css";
import Footer from "@/components/ui/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <AppContextProvider>
        <Head>
          <title>GPA and CGPA Calculator</title>
          <meta
            name="google-site-verification"
            content="bX4q7B0hfSZmMZ694hNi-AeZT8GanwWo5zxZI289dec"
          />
          <meta
            name="description"
            content="Calculate your GPA and CGPA effortlessly with our online tool. Quick, reliable and accurate results guaranteed. Simply input your grades and let us do the rest. Our user-friendly interface ensures quick and hassle-free results, making it the ideal solution for students and educators alike. Give it a try today and stay on top of your academic progress!"
          />
          <meta
            name="keywords"
            content="gpa, calculator, gpa calculator, cgpa, cgpa calculator, university, bahria, bahria university, college, marks, grade, education, online GPA calculator, student GPA calculator, academic progress, grade calculation, CGPA calculation, GPA and CGPA, GPA calculation tool, accurate GPA calculation, quick GPA calculation, reliable GPA calculation"
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
        <AptabaseProvider appKey="A-EU-2731344304">
          <Component {...pageProps} />
        </AptabaseProvider>
        <div id="grading-window">
          <OverlayComponent />
          <GradeSettingComponent />
        </div>
        <Footer />
      </AppContextProvider>
    </Fragment>
  );
}

export default MyApp;
