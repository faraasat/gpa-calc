import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

const Home: NextPage = ({
  hello,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{hello}</div>;
};

export default Home;

export const getStaticProps: GetStaticProps = async (_context) => {
  return {
    props: {
      hello: "hello world",
    },
  };
};
