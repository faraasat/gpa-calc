import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useAptabase } from "@aptabase/react";

import ButtonComponent from "@/components/ui/button/button";
import InputCGPAComponent from "@/components/ui/input/input-cgpa";
import InputModelCGPAComponent from "@/components/ui/input/input-model-cgpa";
import ExportButtons from "@/components/ui/export-buttons";

import classes from "@/styles/calc-cgpa.module.css";

const EctsPage: NextPage = () => {
  const { trackEvent } = useAptabase();

  useEffect(() => {
    trackEvent("PAGE_VIEW", { page: "calculate-ects", name: "Calculate ECTS" });
  }, []);

  return (
    <>
      <Head>
        <title>
          Easily Calculate Overall CGPA with Semester GPA & Credits | Quick
          Export to CSV & JSON Reports
        </title>
        <meta
          name="description"
          content="Easily calculate your overall CGPA by entering GPA and credit hours for each semester. Customize GPA thresholds, and quickly generate detailed reports in CSV or JSON formats. Perfect for students and educators looking for a fast, user-friendly solution to track academic performance across semesters."
        />
        <meta
          name="keywords"
          content="gpa, calculator, gpa calculator, cgpa, cgpa calculator, university, bahria, bahria university, college, marks, grade, education, online GPA calculator, student GPA calculator, academic progress, grade calculation, CGPA calculation, GPA and CGPA, GPA calculation tool, accurate GPA calculation, quick GPA calculation, reliable GPA calculation"
        />
      </Head>
    </>
  );
};

export default EctsPage;
