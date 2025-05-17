import { Fragment } from "react";

import Heading from "@/components/ui/heading";
import Wave1 from "@/assets/wave1";
import { homeAboutData } from "@/data/index";
import AdBanner from "@/components/ui/ads";

const HomeAbout = () => {
  const { title, subTitle, paras } = homeAboutData;

  return (
    <section
      className={
        "relative flex flex-col w-full bg-primary-c z-50 mt-4 text-white"
      }
    >
      <Wave1 className="-translate-y-18" />
      <div className={`flex flex-col gap-16 pb-20 container`}>
        <Heading title={title} subTitle={subTitle} />

        <div className="flex items-center justify-center gap-4">
          <div className="w-full flex flex-col">
            {paras.map((pa, i) => {
              return (
                <Fragment key={i}>
                  {pa.includes("ads") ? (
                    <AdBanner slot={pa.split(":")?.[1]} />
                  ) : (
                    <p>{pa}</p>
                  )}
                </Fragment>
              );
            })}
          </div>
          <aside className="w-[35%]">
            <AdBanner slot="9960327449" />
            <AdBanner slot="2081837426" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
