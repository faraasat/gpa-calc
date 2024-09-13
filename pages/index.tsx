import type { NextPage } from "next";
import { useRouter } from "next/router";
import ParticlesComponent from "../components/particles/particles";
import { useAptabase } from "@aptabase/react";
import { useEffect } from "react";

import classes from "../styles/index.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  const { trackEvent } = useAptabase();

  useEffect(() => {
    trackEvent("PAGE_VIEW", { page: "Home" });
  }, []);

  return (
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
  );
};

export default Home;
