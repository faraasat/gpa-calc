import { Fragment } from "react";

import Heading from "@/components/ui/heading";
import Wave1 from "@/assets/wave1";
import { homeAboutData } from "@/data/index";
import AdBanner from "@/components/ui/ads";
import LinkButton from "@/components/ui/link-button";

const HomeAbout = () => {
  const { title, subTitle, paras, navLinks, sideAds } = homeAboutData;

  return (
    <section className={"relative flex flex-col w-full z-50 mt-1 text-white"}>
      <Wave1 className="relative -mb-0.5" />
      <div className="w-full  bg-primary-c pb-20 pt-10">
        <div className="flex flex-col gap-16 container">
          <Heading title={title} subTitle={subTitle} />

          <div className="flex items-center justify-center gap-6">
            <div className="w-auto flex flex-col gap-3">
              {paras.map((pa, i) => {
                return (
                  <Fragment key={i}>
                    {pa.includes("ads") ? (
                      <AdBanner slot={pa.split(":")?.[1]} />
                    ) : (
                      <p className="text-xl max-md:text-md">{pa}</p>
                    )}
                  </Fragment>
                );
              })}
            </div>
            {sideAds && sideAds.length > 0 && (
              <aside className="min-w-[300px] flex flex-col items-start self-start gap-2 z-80 relative w-[40%] max-w-[500px] max-sm:hidden">
                {sideAds.map((sa) => (
                  <AdBanner slot={sa} key={sa} />
                ))}
                <AdBanner slot="2081837426" />
              </aside>
            )}
          </div>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            {navLinks.map((n, i) => {
              return (
                <LinkButton
                  key={i}
                  href={n.href}
                  type={i % 2 == 0 ? "white" : "default"}
                >
                  {n.name}
                </LinkButton>
              );
            })}
          </div>

          <AdBanner slot="9605697125" />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
