import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Menu } from "react-feather";

import classes from "./navbar.module.css";

import { INavbar } from "./navbar.d";
import { NextComponentType } from "next";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<INavbar>({
    width: undefined,
    height: undefined,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

const NavbarComponent: NextComponentType = () => {
  const router = useRouter();
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Fragment>
      {typeof width != "undefined" && width > 900 ? (
        <section className={classes.navbar}>
          <h1 className={classes.navbar_brand}>
            <Link href="/">GPA CALCULATOR</Link>
          </h1>
          <div className={classes.navbar_links}>
            <span
              className={
                router && router?.pathname == "/"
                  ? `${classes.navbar_link_active}`
                  : ""
              }
            >
              <Link href="/">Home</Link>
            </span>
            <span
              className={
                router && router?.pathname == "/calc-gpa"
                  ? `${classes.navbar_link_active}`
                  : ""
              }
              onClick={() => setIsOpen(false)}
            >
              <Link href="/calc-gpa">Calculate GPA</Link>
            </span>
            <span
              className={
                router && router?.pathname == "/calc-cgpa"
                  ? `${classes.navbar_link_active}`
                  : ""
              }
              onClick={() => setIsOpen(false)}
            >
              <Link href="/calc-cgpa">Calculate CGPA</Link>
            </span>
          </div>
        </section>
      ) : (
        <section className={classes.subnavbar} id="subnav">
          <div className={classes.subnavbar_top}>
            <h1 className={classes.subnavbar_brand}>
              <Link href="/">GPA CALCULATOR</Link>
            </h1>
            <h2
              className={classes.subnavbar_menu}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={40} fontFamily="Potta One" />
            </h2>
          </div>
          <div
            className={`${classes.subnavbar_links} ${
              !isOpen ? classes.display_none : ""
            }`}
          >
            <span
              className={
                router && router.pathname == "/"
                  ? `${classes.navbar_link_active}`
                  : ""
              }
            >
              <Link href="/">
                <a onClick={() => setIsOpen(false)}>Home</a>
              </Link>
            </span>
            <hr />
            <span
              className={
                router && router.pathname == "/calc-gpa"
                  ? `${classes.navbar_link_active}`
                  : ""
              }
            >
              <Link href="/calc-gpa">
                <a onClick={() => setIsOpen(false)}>Calculate GPA</a>
              </Link>
            </span>
            <hr />
            <span
              className={
                router && router.pathname == "/calc-cgpa"
                  ? `${classes.navbar_link_active}`
                  : ""
              }
            >
              <Link href="/calc-cgpa">
                <a onClick={() => setIsOpen(false)}>Calculate CGPA</a>
              </Link>
            </span>
            <hr />
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default NavbarComponent;
