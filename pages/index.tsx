import type { NextPage } from "next";
import { useRouter } from "next/router";
import ParticlesComponent from "../components/particles/particles";
import { useAptabase } from "@aptabase/react";
import { useEffect } from "react";
import { Wave1, AboutMan } from "../assets";

import classes from "../styles/index.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  const router = useRouter();
  const { trackEvent } = useAptabase();

  useEffect(() => {
    trackEvent("PAGE_VIEW", { page: "Home" });
  }, []);

  return (
    <>
      <section className={classes.home}>
        <ParticlesComponent />
        <div className={classes.home_items}>
          <embed className={classes.home_item_image} src={"/img/study.svg"} />
          <div className={classes.home_item_text}>
            <h1>TRY OUR GPA CALCULATOR!</h1>
            <p>
              This App provides you with an interface to calculate your GPA and
              CGPA with great flexibility...
            </p>
            <div className={classes.home_item_btn}>
              <button onClick={() => router.push("/calc-gpa")}>
                Calculate GPA
              </button>
              <span />
              <button onClick={() => router.push("/calc-cgpa")}>
                Calculate CGPA
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className={`${classes.wave}`}>
        <Wave1 />
      </div>
      <section className={classes.about_section__wrapper}>
        <div className={`${classes.about_section} container`}>
          <div className={classes.about_heading}>
            <h3>A Little Detail...</h3>
            <h4>What this is About!</h4>
          </div>
          <div className={classes.about}>
            <div className={classes.about_paras}>
              <p>
                Welcome to GPA Calculate, your ultimate tool for streamlining
                GPA and CGPA calculations! Whether you are a student striving to
                monitor your academic progress or someone eager to grasp the
                intricacies of grading systems, our app offers a seamless and
                intuitive experience. Designed with precision and efficiency in
                mind, GPA Calculate allows you to effortlessly input your grades
                and credits to receive instant and accurate GPA results, giving
                you a clear, actionable view of your academic performance.
              </p>
              <p>
                Our mission is to empower students by providing reliable tools
                that facilitate better decision-making and future planning. We
                understand that managing academic performance can be
                challenging, which is why we’ve created a user-friendly platform
                that simplifies grade calculations and makes them accessible to
                everyone. With GPA Calculate, you can confidently track your
                progress and set yourself up for success.
              </p>
              <p>
                Experience the ease and clarity of managing your GPA and CGPA
                today with GPA Calculate, and take control of your academic
                journey with a tool that’s as dedicated to your success as you
                are.
              </p>
              <div className={classes.about_para__btn}>
                <Link href={"/calc-gpa"}>Checkout GPA Calculator</Link>
                <Link href={"/calc-cgpa"}>Checkout CGPA Calculator</Link>
              </div>
            </div>
            <div className={classes.about_img}>
              <AboutMan />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
