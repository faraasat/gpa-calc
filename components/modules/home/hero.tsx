import dynamic from "next/dynamic";

import AdBanner from "@/components/ui/ads";
import LinkButton from "@/components/ui/link-button";

const ParticlesComponent = dynamic(
  () => import("@/components/ui/particles/particles")
);
const StudySvg = dynamic(() => import("@/assets/study"));

import { homeHeroData } from "@/data/index";

const HomeHero = () => {
  return (
    <section className="flex w-full relative min-h-screen flex-col mt-[70px] items-center justify-center">
      <ParticlesComponent />
      <div
        className={`container flex text-center items-center justify-between`}
      >
        <StudySvg className="flex items-center justify-center w-[10%] h-auto z-50" />
        <div className="flex flex-col items-center justify-center w-full z-50 bg-orange-c text-white rounded-2xl p-5 shadow-[1px_1px_3px_3px_var(--orange)]">
          <h1 className="text-2xl leading-[1] font-potta mb-3">
            {homeHeroData.title}
          </h1>
          <p className="text-md leading-[1] mb-6 max-w-[400px] font-lobster">{homeHeroData.subTitle}</p>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {homeHeroData.navLinks.map(({ href, name }, i) => {
              return (
                <LinkButton
                  key={i}
                  href={href}
                  type={i % 2 == 1 ? "white" : "default"}
                  className="w-[45%]"
                >
                  {name}
                </LinkButton>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="container ad-banner-div"
        style={{
          marginBottom: 80,
          zIndex: 30,
        }}
      >
        <AdBanner slot="6835946019" />
      </div>
    </section>
  );
};

export default HomeHero;
