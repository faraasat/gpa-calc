import Heading from "@/components/ui/heading";
import LinkButton from "@/components/ui/link-button";
import AdBanner from "@/components/ui/ads";

import { homeFeaturesData } from "@/data/index";

const HomeFeatures = () => {
  const { title, subTitle, featuresList, adsList, navLinks } = homeFeaturesData;

  return (
    <section className="relative flex justify-center w-full z-50 pt-24 pb-12">
      <div
        className={`container flex flex-col items-center justify-center gap-14 text-white`}
      >
        <Heading
          title={title}
          subTitle={subTitle}
          subTitleClass="text-secondary-c"
          titleClass="text-primary-c"
        />

        <div className="grid grid-cols-12 gap-4">
          {featuresList.map((feature, index) => {
            return (
              <div
                className="col-span-4 flex flex-col items-center justify-center gap-4 bg-primary-c/70 p-5 rounded-md cursor-pointer text-center transition-all hover:scale-105 max-lg:col-span-6 max-md:col-span-12"
                key={index}
              >
                <feature.Icon className="text-6xl" />
                <h4 className="font-potta text-2xl font-bold text-secondary-c">
                  {feature.title}
                </h4>
                <p className="text-lg text-shadow-2xs leading-5">
                  {feature.description}
                </p>
              </div>
            );
          })}
          {adsList.map((ads, i) => {
            return (
              <div
                className="col-span-4 flex max-lg:col-span-6 max-md:col-span-12"
                key={i}
              >
                <AdBanner slot={ads.slot} />
              </div>
            );
          })}
        </div>

        {/* <AdBanner slot="8593774450" /> */}

        <div className="flex items-center justify-center gap-3 flex-wrap">
          {navLinks.map((n, i) => {
            return (
              <LinkButton
                key={i}
                href={n.href}
                type={i % 2 == 0 ? "orange" : "default"}
              >
                {n.name}
              </LinkButton>
            );
          })}
        </div>

        <AdBanner slot="4854674141" />
      </div>
    </section>
  );
};

export default HomeFeatures;
