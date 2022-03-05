import type { NextPage } from "next";
import Link from "next/link";
import ParticlesComponent from "../components/particles/particles";

import classes from "../styles/index.module.css";

// const Home: NextPage = ({
//   hello,
// }: InferGetStaticPropsType<typeof getStaticProps>)

const Home: NextPage = () => {
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
            <button>
              <Link href="/calc-gpa">Calculate GPA</Link>
            </button>
            <span />
            <button>
              <Link href="/calc-cgpa">Calculate CGPA</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps = async (_context) => {
//   return {
//     props: {
//       hello: "hello world",
//     },
//   };
// };
