import type { AppProps } from "next/app";
import { Fragment } from "react";
import { AptabaseProvider } from "@aptabase/react";
import Script from "next/script";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Cabin, Lilita_One } from "next/font/google";

import { AppContextProvider } from "@/context/app-context";
import Navbar from "@/components/ui/navbar/navbar";
import OverlayComponent from "@/components/ui/overlay/overlay";
import GradeSettingComponent from "@/components/ui/grade-setting/grade-setting";
import Footer from "@/components/ui/footer";
import { CookieConsent } from "react-consent-management-banner";

import "@/styles/globals.css";

const potta_one = Lilita_One({
  weight: "400",
  variable: "--font-potta",
  subsets: ["latin"],
});

const cabin = Cabin({
  weight: ["400", "500", "600", "700"],
  variable: "--font-cabin",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <AppContextProvider>
        <Head>
          <title>
            Best GPA, CGPA, and ECTS Calculator | Quick GPA to ECTS Conversion |
            Ideal for Students & Educators
          </title>
          <meta
            name="google-site-verification"
            content="bX4q7B0hfSZmMZ694hNi-AeZT8GanwWo5zxZI289dec"
          />
          <meta
            name="google-adsense-account"
            content="ca-pub-7834120314991304"
          ></meta>
          <meta
            name="description"
            content="Calculate your GPA, CGPA, and ECTS quickly and accurately with our powerful online tool. Simply input your grades for instant, reliable results, including seamless GPA to ECTS conversion. Designed for students, teachers, and educators, our user-friendly platform guarantees fast, hassle-free calculations to help you track academic progress with ease. Try it now and stay ahead in your studies!"
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

        <style jsx global>{`
          :root {
            --font-potta: ${potta_one.variable};
            --font-cabin: ${cabin.variable};
          }

          .font-potta {
            font-family: ${potta_one.style.fontFamily};
          }

          .font-cabin {
            font-family: ${cabin.style.fontFamily};
          }
        `}</style>

        {/* PAGE */}
        <Navbar />

        {/* <SocialSide /> */}
        <AptabaseProvider appKey={process.env.NEXT_PUBLIC_APTABASE_APP_ID!}>
          <Component {...pageProps} />
        </AptabaseProvider>

        <div id="grading-window">
          <OverlayComponent />
          <GradeSettingComponent />
        </div>

        <Footer />
      </AppContextProvider>

      <CookieConsent />

      {/* ANALYTICS AND SCRIPTS */}
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID!}
      />
      <Script
        id="gg-ads"
        async
        crossOrigin="anonymous"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7834120314991304"
      ></Script>
    </Fragment>
  );
}

export default MyApp;
