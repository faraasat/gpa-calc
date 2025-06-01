import dynamic from "next/dynamic";

const AdBanner = dynamic(() => import("./ads"), {
  ssr: false,
});

export default AdBanner;
