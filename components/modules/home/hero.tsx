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
    <section className="flex w-full relative min-h-screen flex-col mt-[90px] items-center justify-center">
      <ParticlesComponent />
      <div
        className={`container-responsive flex text-center items-center justify-between max-lg:flex-col`}
      >
        <StudySvg className="flex items-center w-[50%] -translate-x-3 justify-center h-auto z-55 max-lg:w-[65%]" />
        <div className="flex flex-col items-center w-[55%] justify-center gap-2 z-50 bg-primary-c text-white rounded-2xl p-8 max-lg:w-[90%] max-lg:pt-20 max-lg:-translate-y-24">
          <h1 className="text-2xl leading-[1] font-potta mb-3 max-sm:text-xl">
            {homeHeroData.title}
          </h1>
          <p className="text-lg leading-[1.2] mb-6 max-w-[500px] max-sm:text-sm">
            {homeHeroData.subTitle}
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap max-sm:flex-col max-sm:w-full">
            {homeHeroData.navLinks.map(({ href, name }, i) => {
              return (
                <LinkButton
                  key={i}
                  href={href}
                  type={i % 2 == 1 ? "white" : "default"}
                  className="w-[45%] max-sm:w-full"
                >
                  {name}
                </LinkButton>
              );
            })}
          </div>
        </div>
      </div>
      <AdBanner slot="6835946019" className="lg:-mt-8 max-lg:-mt-16" />
    </section>
  );
};

export default HomeHero;
