import { NextComponentType } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment } from "react";
// import { Menu } from "react-feather";

const linkData = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Calculate GPA",
    href: "/calc-gpa",
  },
  {
    name: "Calculate CGPA",
    href: "/calc-cgpa",
  },
  {
    name: "GPA to ECTS",
    href: "/gpa-to-ects",
  },
  {
    name: "German Grade Calculator",
    href: "/german-grade-calculator",
  },
];

const NavbarComponent: NextComponentType = () => {
  const router = useRouter();

  return (
    <Fragment>
      <header className="fixed top-0 left-0 min-h-[70px] bg-(--orange) flex items-center w-full  text-white">
        <div className="container flex justify-between items-center h-full">
          <Link href="/" className="font-potta text-2xl text-shadow-md">
            GPA CALCULATOR
          </Link>
          <nav className="flex items-center justify-center gap-5">
            {linkData.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className={`font-potta text-xl ${
                  router && router?.pathname == link.href
                    ? "text-shadow-lg"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default NavbarComponent;
