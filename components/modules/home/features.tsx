import { SlCalculator } from "react-icons/sl";
import { FaFileExport, FaUserFriends } from "react-icons/fa";
import { MdDashboardCustomize, MdPrivacyTip } from "react-icons/md";
import { SiPlatformdotsh } from "react-icons/si";

import Heading from "@/components/ui/heading";
import classes from "@/styles/index.module.css";
import LinkButton from "@/components/ui/link-button";
import { Fragment } from "react";
import AdBanner from "@/components/ui/ads";

const features = [
  {
    Icon: SlCalculator,
    title: "Accurate Calculation",
    description:
      "Our GPA and CGPA calculator provides precise calculations based on the grading system of your choice. Simply input your grades, credit hours, and course information to receive accurate and real-time results, ensuring that you stay on top of your academic progress.",
  },
  {
    Icon: FaUserFriends,
    title: "User-Friendly Interface",
    description:
      "Designed with simplicity and ease of use in mind, our GPA calculator features an intuitive interface that requires no technical knowledge. Whether you're a student or a professional, you can calculate your GPA or CGPA quickly and without any confusion.",
  },
  {
    Icon: MdDashboardCustomize,
    title: "Multiple Grading Systems",
    description:
      "Whether you're using a 4.0, 5.0, or even a custom grading scale, our calculator supports various international grading systems, making it perfect for students from all educational backgrounds. Customize your inputs to match your institution's specific criteria effortlessly.",
  },
  {
    isAd: true,
    slot: "8749703037",
  },
  {
    Icon: FaFileExport,
    title: "Instant Calculation & Export",
    description:
      "With our GPA calculator, you get instant results with just a few clicks. Moreover, you can export your results for future reference, making it easy to track your academic performance over time or share it with teachers and counselors.",
  },
  {
    isAd: true,
    slot: "6048352225",
  },
  {
    Icon: SiPlatformdotsh,
    title: "Cross-Platform Compatibility",
    description:
      "Our GPA & CGPA calculator is fully responsive and works seamlessly across all devices – from desktops and laptops to tablets and smartphones. You can access it anytime, anywhere, without any performance issues.",
  },
  {
    isAd: true,
    slot: "5931968008",
  },
  {
    Icon: MdPrivacyTip,
    title: "Privacy-Focused and Secure",
    description:
      "Your academic data is personal, and we take privacy seriously. Our GPA calculator ensures that your information is processed securely, with no personal data stored or shared. You can calculate your GPA and CGPA with peace of mind, knowing your privacy is protected.",
  },
];

const HomeFeatures = () => {
  return (
    <section className={classes.wrapper}>
      <div
        className={`${classes.section} ${classes.section_features} container`}
      >
        <Heading
          title="The Features"
          subTitle="What Makes Us Special!"
          styleType="primary"
        />
        <div className={classes.features_list}>
          {features.map((feature: any, index) => {
            return (
              <Fragment key={index}>
                {feature.isAd ? (
                  <div className={classes.feature_card}>
                    <AdBanner {...feature} />
                  </div>
                ) : (
                  <div className={classes.feature_card}>
                    <feature.Icon />
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
        <div className={`container`}>
          <AdBanner slot="8593774450" />
        </div>
        <div className={classes.featured_btns}>
          <LinkButton href={"/calc-gpa"}>Check Your GPA</LinkButton>
          <LinkButton href={"/calc-cgpa"} type="orange">
            Check Your CGPA
          </LinkButton>
          <LinkButton href={"/calc-gpa"}>Convert Your GPA to ECTS</LinkButton>
          <LinkButton href={"/calc-cgpa"} type="orange">
            Calculate Your German Grade
          </LinkButton>
        </div>
        <div className={`container`}>
          <AdBanner slot="4854674141" />
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
