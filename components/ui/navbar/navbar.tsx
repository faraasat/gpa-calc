import { NextComponentType } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment, useState } from "react";
import { IoMenu } from "react-icons/io5";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <header className="fixed top-0 left-0 min-h-[70px] bg-(--orange) flex items-center w-full  text-white">
        <div className="container flex justify-between items-center h-full">
          <Link href="/" className="font-potta text-2xl text-shadow-md">
            GPA CALCULATOR
          </Link>
          <nav className="flex items-center justify-center gap-5 max-xl:hidden">
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
          <div className="hidden max-xl:block">
            <IoMenu
              className="text-4xl cursor-pointer text-shadow-md"
              onClick={() => setIsOpen((prev) => !prev)}
            />
            {isOpen && (
              <nav className="fixed top-[70px] left-0 w-full bg-orange-c/50 flex items-center justify-center flex-col z-50 p-5 gap-3">
                {linkData.map((link, i) => (
                  <Fragment key={link.name}>
                    <Link
                      href={link.href}
                      className={`font-potta text-2xl ${
                        router && router?.pathname == link.href
                          ? "text-shadow-lg"
                          : ""
                      }`}
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      {link.name}
                    </Link>
                    {i < linkData.length - 1 && (
                      <hr className="w-full h-0.5 border-1 border-white" />
                    )}
                  </Fragment>
                ))}
              </nav>
            )}
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default NavbarComponent;
