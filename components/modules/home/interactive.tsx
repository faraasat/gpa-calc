import { FC } from "react";
import { LuLoader } from "react-icons/lu";

import Heading from "@/components/ui/heading";
import LinkButton from "@/components/ui/link-button";

import Wave1 from "@/assets/wave1";

import classes from "@/styles/index.module.css";
import AdBanner from "@/components/ui/ads";

const HomeInteractive: FC<{
  title: string;
  subTitle: string;
  videoUrl: string;
  para: string;
  linkText: string;
  link: string;
  bgType: "default" | "primary";
  stripAds: Array<string>;
  sidebarAds: Array<string>;
}> = ({
  title,
  subTitle,
  videoUrl,
  para,
  linkText,
  link,
  bgType,
  stripAds,
  sidebarAds,
}) => {
  return (
    <section className="relative z-50 w-full">
      {bgType === "default" && <Wave1 className="relative -mb-0.5" />}

      <div
        className={`flex flex-col gap-18 w-full pb-7 pt-18 ${
          bgType === "default" ? "bg-primary-c text-white" : ""
        }`}
      >
        <Heading
          title={title}
          subTitle={subTitle}
          titleClass={`${bgType === "default" ? "" : "text-primary-c"}`}
          subTitleClass={`${bgType === "default" ? "" : "text-secondary-c"}`}
        />

        <div className="flex items-center justify-center gap-5 container">
          {sidebarAds?.[0] && (
            <aside className="min-w-[300px] h-full flex item-center justify-center z-80 relative w-[40%] max-w-[300px] max-sm:hidden max-xl:hidden">
              <AdBanner slot={sidebarAds[0]} />
            </aside>
          )}

          <div className="flex flex-col items-center justify-center gap-9">
            <div
              className={`relative flex items-center justify-center w-full aspect-video rounded-lg border-2 ${
                bgType === "default" ? "border-white" : "border-primary-c"
              }`}
            >
              <LuLoader className="absolute animate-spin text-6xl" />
              <video
                className="relative w-full h-auto aspect-video rounded-xl"
                autoPlay={true}
                loop={true}
                controls={false}
                muted={true}
              >
                <source src={videoUrl} type="video/webm" />
              </video>
            </div>
            <p className="text-xl text-center w-[105%]">{para}</p>
            <div className={classes.about_para__btn}>
              <LinkButton
                href={link}
                btnStyle="rounded"
                type={bgType === "primary" ? "orange" : "default"}
              >
                {linkText}
              </LinkButton>
            </div>
          </div>

          {sidebarAds?.[1] && (
            <aside className="min-w-[300px] h-full flex item-center justify-center z-80 relative w-[40%] max-w-[300px] max-sm:hidden">
              <AdBanner slot={sidebarAds[1]} />
            </aside>
          )}
        </div>

        {stripAds?.[0] && <AdBanner slot={stripAds[0]} />}
      </div>
    </section>
  );
};

export default HomeInteractive;
