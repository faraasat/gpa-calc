import Link from "next/link";
import { SiLinktree } from "react-icons/si";
import { TfiLinkedin } from "react-icons/tfi";
import { BsGlobe } from "react-icons/bs";
import { TbBrandGithubFilled } from "react-icons/tb";

import classes from "./style.module.css";

const socialData = [
  {
    name: "Linktree",
    url: "https://www.linktr.ee/faraasat",
    Icon: SiLinktree,
    color: "#39E09B",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/faraasat",
    Icon: TfiLinkedin,
    color: "#0077B5",
  },
  {
    name: "Portfolio",
    url: "https://www.farasat.me",
    Icon: BsGlobe,
    color: "#FF885B",
  },
  {
    name: "GitHub",
    url: "https://github.com/faraasat",
    Icon: TbBrandGithubFilled,
    color: "#000",
  },
];

const SocialSide = () => {
  return (
    <div className={classes.socialSide}>
      {socialData.map((social, index) => (
        <Link
          href={social.url}
          target="_blank"
          key={index}
          className={classes.social}
          style={{ backgroundColor: social.color }}
        >
          <div>{social.name}</div>
          <div>
            <social.Icon />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialSide;
