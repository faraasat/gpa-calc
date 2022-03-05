import { NextComponentType } from "next";
import Link from "next/link";
import { Fragment } from "react";

import classes from "./navbar.module.css";

const NavbarComponent: NextComponentType = () => {
  return (
    <Fragment>
      <section className={classes.navbar}>
        <h1 className={classes.navbar_brand}>GPA CALCULATOR</h1>
        <div className={classes.navbar_links}>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/calc-gpa'>Calculate GPA</Link>
          <Link href='/calc-cgpa'>Calculate CGPA</Link>
        </div>
      </section>
    </Fragment>
  );
};

export default NavbarComponent;
