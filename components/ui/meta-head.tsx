import { FC } from "react";
import Head from "next/head";

const MetaHead: FC<{
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}> = ({ metaTitle, metaDescription, metaKeywords }) => {
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
    </Head>
  );
};
export default MetaHead;
