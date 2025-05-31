import Link from "next/link";
import { Fragment, useState } from "react";
import { NextComponentType } from "next";
import { NextRouter, useRouter } from "next/router";
import { IoMenu } from "react-icons/io5";

import { navigationData } from "@/data/index";

import { FlattenT } from "types";

const NavLinks = ({
  link,
  router,
  isMobile = false,
  index = 0,
}: {
  link: FlattenT<typeof navigationData>;
  router: NextRouter;
  isMobile?: boolean;
  index?: number;
}) => {
  return (
    <Fragment>
      <Link
        href={link.href}
        className={`font-potta text-lg ${
          router && router?.pathname == link.href ? "text-shadow-lg" : ""
        }`}
      >
        {link.name}
      </Link>
      {isMobile && index < navigationData.length - 1 && (
        <hr className="w-full h-0.5 border-1 border-white" />
      )}
    </Fragment>
  );
};

const NavbarComponent: NextComponentType = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <header className="fixed top-0 left-0 min-h-[70px] bg-(--primary-c) flex items-center w-full text-white">
        <div className="container flex justify-between items-center h-full">
          <Link href="/" className="font-potta text-2xl text-shadow-md">
            GPA CALCULATOR
          </Link>
          <nav className="flex items-center justify-center gap-4 max-xl:hidden" style={{wordSpacing: "0px"}}>
            {navigationData.map((link) => (
              <NavLinks key={link.name} link={link} router={router} />
            ))}
          </nav>
          <div className="hidden max-xl:block">
            <IoMenu
              className="text-4xl cursor-pointer text-shadow-md"
              onClick={() => setIsOpen((prev) => !prev)}
            />
            {isOpen && (
              <nav className="fixed top-[70px] left-0 w-full bg-primary-c/50 flex items-center justify-center flex-col z-50 p-5 gap-3">
                {navigationData.map((link, i) => (
                  <NavLinks
                    key={link.name}
                    link={link}
                    router={router}
                    index={i}
                    isMobile={true}
                  />
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
