import { SlCalculator } from "react-icons/sl";
import { FaFileExport, FaUserFriends } from "react-icons/fa";
import { MdDashboardCustomize, MdPrivacyTip } from "react-icons/md";
import { SiPlatformdotsh } from "react-icons/si";

const navLinks = [
  "/",
  "/calc-gpa",
  "/calc-cgpa",
  "/gpa-to-ects",
  "/german-grade-calculator",
];

const navLinksName = [
  "Home",
  "Calculate GPA",
  "Calculate CGPA",
  "GPA to ECTS",
  "German Grade Calculator",
];

const navLinksTitle2 = [
  "Calculate GPA",
  "Calculate CGPA",
  "GPA to ECTS",
  "German Grade Calculator",
];

export const navigationData = navLinks.map((nl, i) => {
  return {
    href: nl,
    name: navLinksName[i],
  };
});

export const homeHeroData = {
  title:
    "Get to Experience the Easiest Calculator and Calculate GPA, CGPA, ECTS & German Grade with Ease",
  subTitle:
    "Enjoy the Dynamic interface to calculate your GPA, CGPA, ECTS, and German Grade with great flexibility! Convert your CGPA to ECTS and German Grade...",
  navLinks: navLinks
    .filter((x) => x !== "/")
    .map((nl, i) => {
      return {
        href: nl,
        name: navLinksTitle2[i],
      };
    }),
};

const navLinksTitle3 = [
  "Checkout GPA Calculator",
  "Calculate Your CGPA",
  "Convert Your GPA to ECTS",
  "Find Out Your German Grade",
];

export const homeAboutData = {
  title: "What's this About???",
  subTitle:
    "An In-Depth Look Into the Functionality and Real-World Use Cases of This Powerful Tool...",
  paras: [
    "Welcome to the Calculator, your ultimate tool for streamlining GPA & CGPA Calculations, GPA to ECTS conversions & German Grade Calculations! Whether you are a student aiming to monitor your academic progress or someone looking to understand various grading systems, our app provides a seamless, intuitive experience. Now, in addition to GPA and CGPA calculators, you can calculate German grades and convert GPA to ECTS credits for a comprehensive academic assessment.",
    "ads:4444276880",
    "Our mission is to empower students by providing reliable tools for better decision-making and future planning. We have designed an accessible platform that simplifies complex grade calculations, making academic management easier than ever. With GPA Calculate, you can confidently track your progress, convert grades, and set yourself up for success.",
    "ads:4708000768",
    "Experience the convenience of managing GPA, CGPA, and international grade conversions with the Calculator, and take charge of your academic journey with a tool dedicated to your success!",
    "ads:3394919094",
  ],
  navLinks: navLinks
    .filter((x) => x !== "/")
    .map((nl, i) => {
      return {
        href: nl,
        name: navLinksTitle3[i],
      };
    }),
  sideAds: ["9960327449", "2081837426", "5725629036"],
};

const navLinksTitle4 = [
  "Your GPA Around the World",
  "Your CGPA Around the World",
  "Your GPA to ECTS Around the World",
  "Your German Grade Around the World",
];

export const homeFeaturesData = {
  title: "Features at a Glance!!!",
  subTitle:
    "Take a closer look at the standout features built to simplify complex calculations and boost your productivity...",
  featuresList: [
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
      Icon: FaFileExport,
      title: "Instant Calculation & Export",
      description:
        "With our GPA calculator, you get instant results with just a few clicks. Moreover, you can export your results for future reference, making it easy to track your academic performance over time or share it with teachers and counselors.",
    },
    {
      Icon: SiPlatformdotsh,
      title: "Cross-Platform Compatibility",
      description:
        "Our GPA & CGPA calculator is fully responsive and works seamlessly across all devices – from desktops and laptops to tablets and smartphones. You can access it anytime, anywhere, without any performance issues.",
    },
    {
      Icon: MdPrivacyTip,
      title: "Privacy-Focused and Secure",
      description:
        "Your academic data is personal, and we take privacy seriously. Our GPA calculator ensures that your information is processed securely, with no personal data stored or shared. You can calculate your GPA and CGPA with peace of mind, knowing your privacy is protected.",
    },
  ],
  adsList: [
    {
      slot: "8749703037",
    },
    {
      slot: "6048352225",
    },
    {
      slot: "5931968008",
    },
  ],
  navLinks: navLinks
    .filter((x) => x !== "/")
    .map((nl, i) => {
      return {
        href: nl,
        name: navLinksTitle4[i],
      };
    }),
};

export const homeInteractiveData = [
  {
    title: "GPA Calculator Walkthrough",
    subTitle:
      "This quick tutorial will show you exactly how to calculate and track your GPA without confusion.",
    para: "Our interactive GPA & CGPA demo lets you experience the ease of calculating your academic performance in real-time. Input your grades, course credits, and see your GPA instantly adjust. With a user-friendly interface and dynamic calculations, you can quickly experiment with different academic scenarios to plan your future performance. This feature empowers students to understand the impact of their grades and credit hours on their overall GPA and CGPA, giving a clear picture of where they stand academically.",
    linkText: "Checkout GPA Calculator",
    link: "/calc-gpa",
    videoUrl: "calc.webm",
    bgType: "default" as "default" | "primary",
    stripAds: ["8593774450"],
    sidebarAds: ["8907084310", "1282926921"],
  },
  {
    title: "How to Use the CGPA Calculator",
    subTitle:
      "A simple, step-by-step guide to help you calculate your Cumulative GPA accurately and efficiently..",
    para: "Effortlessly translate your GPA into ECTS credits with our user-friendly converter! This tool helps you understand how your grades align with the European Credit Transfer and Accumulation System, making it ideal for students considering study abroad opportunities. Simply input your GPA, and get instant results that facilitate smoother transitions in your academic path. Take the guesswork out of grade conversions and plan your educational journey with confidence!",
    linkText: "Check ECTS Converter",
    link: "/gpa-to-ects",
    videoUrl: "gpa-to-ects.webm",
    bgType: "primary" as "default" | "primary",
    stripAds: ["7589314976"],
    sidebarAds: ["8046037596", "4093741336"],
  },
  {
    title: "Your Guide to the German Grading System",
    subTitle:
      "Understand how to calculate and interpret your academic performance using the German grade conversion method.",
    para: "Unlock the secrets of the German grading system with our easy-to-use calculator! Simply input your scores, and instantly receive your German grade, making it simple to understand how your performance translates across different educational frameworks. Perfect for students aiming to study in Germany or looking to compare their grades internationally, this tool provides clarity and confidence in your academic journey. Start calculating your German grade today!",
    linkText: "Get Your German Grades Now",
    link: "/german-grade-calculator",
    videoUrl: "german-grade.webm",
    bgType: "default" as "default" | "primary",
    stripAds: ["8029116914"],
    sidebarAds: ["8332369244", "6732955926"],
  },
];

export const homeFaqData = {
  title: "Got Questions? We’ve Got Answers.",
  subTitle:
    "Explore our most frequently asked questions to get the help and clarity you need.",
  invert: true,
  stripAds: ["4876339965"],
  sidebarAds: ["1257267961", "1063435071"],
  faqs: [
    {
      question: "What is GPA Calculate?",
      answer:
        "GPA Calculate is an online tool designed to help you calculate your Grade Point Average (GPA) and Cumulative Grade Point Average (CGPA) with precision and ease. It allows users to input their grades and credits to receive accurate results instantly.",
    },
    {
      question: "How do I use the GPA Calculator?",
      answer:
        "Simply navigate to the 'Calculate GPA' or 'Calculate CGPA' section, input your course grades, credit hours, and grading system (4.0, 5.0, or custom), and click the calculate button. The app will do the rest, producing real-time results.",
    },
    {
      question: "Does the calculator support different grading systems?",
      answer:
        "Yes. The calculator supports various grading systems, including 4.0, 5.0, and custom grading scales. It’s versatile enough for students across different educational institutions and countries.",
    },
    {
      question: "Can I calculate both GPA and CGPA?",
      answer:
        "Absolutely. You can calculate both your current GPA for a specific term and your cumulative GPA across multiple terms using the GPA and CGPA calculators.",
    },
    {
      question: "Is the calculator secure?",
      answer:
        "Quite secure, indeed. The app doesn’t store or share any of your academic data. All calculations are processed instantly and privately, so you can rest easy knowing your information remains confidential.",
    },
    {
      question: "Can I export my results?",
      answer:
        "Yes, once your GPA or CGPA is calculated, you can export the results for future reference or share them with academic advisors or peers.",
    },
    {
      question: "Is GPA Calculate available on mobile devices?",
      answer:
        "Of course. The calculator is fully responsive and works flawlessly on desktops, laptops, tablets, and smartphones. You can access it anywhere, anytime.",
    },
    {
      question: "What’s the difference between GPA and CGPA?",
      answer:
        "GPA represents your grade point average for a specific term, while CGPA represents the cumulative average of all your grades across multiple terms. Both are crucial for understanding your overall academic performance.",
    },
    {
      question: "Is there a fee for using GPA Calculate?",
      answer:
        "No, it’s entirely free to use. No hidden costs or annoying paywalls—just the convenience of instant calculations.",
    },
    {
      question: "Who can benefit from GPA Calculate?",
      answer:
        "Any student or academic professional seeking to manage and track academic performance can benefit. Whether you are a student looking to monitor your grades or a professional offering guidance to students, this tool provides clarity and accuracy.",
    },
  ],
};

export const pageHeadingSideAds = ["3791323153", "6349219646"];
export const pageHeadingStripAds = ["9042815681", "1416441250"];
export const pageMultiplex = ["7653728302"];

export const calcGpa = {
  metaTitle:
    "CGPA Calculator with Custom Grading System | Adjust GPA Criteria for US, India, Europe | Easily Export Reports in CSV & JSON",
  metaDescription:
    "Accurately calculate your CGPA using our advanced CGPA calculator with a fully customizable grading system tailored for the US, India, Europe, and other regions. Dynamically adjust GPA thresholds, grading scales, and letter grade ranges to fit your unique requirements. Generate detailed reports in both CSV and JSON formats with just a click, making it perfect for students, educators, and institutions. Whether you're adapting to a new grading system or exporting results for academic purposes, our tool simplifies the process with user-friendly features and flexible grading criteria. Try it now to streamline your CGPA calculations! Following Countries & States are supported: India, Pakistan, United States (US), Brazil, Saudi Arabia, United Arab Emirate (UAE), Brazil, China, Japan, Korea, Thailand, Indonesia, Bangladesh, Nigeria, Russia, Mexico, Egypt, Philippines, Iran, Turkey, Canada, South Africa",
  metaKeywords:
    "gpa, calculator, gpa calculator, cgpa, cgpa calculator, university, bahria, bahria university, college, marks, grade, education, online GPA calculator, student GPA calculator, academic progress, grade calculation, CGPA calculation, GPA and CGPA, GPA calculation tool, accurate GPA calculation, quick GPA calculation, reliable GPA calculation",
  pageTitle: "Calculate Your Grade Point Average (GPA) With Ease:",
  desc: "Effortlessly calculate your GPA with our user-friendly tool. Whether you're a student or educator, our calculator simplifies the process, helping you stay on top of your academic progress in just a few clicks.",
  steps: [
    {
      main: "Update grade threshold if you have your Max Grade other than 4.0 GPA System. For example,",
      subLists: [
        {
          title: "United States (US), Pakistan & South Korea uses 4.0 System.",
        },
        {
          title: "Brazil, Thailand & Saudi Arabia uses 5.0 Grade Point Scale.",
        },
        { title: "Australia uses both 6.0 & 7.0 Grade Point System." },
        { title: "France uses 20 GPA Scale." },
        {
          title:
            "The ECTS grading scale is used across Europe. It doesn’t always convert to GPA but rather uses letter grades (A–F) that can be mapped to a GPA system depending on the institution.",
          links: [
            {
              text: "You can calculate for ECTS...",
              link: "/gpa-to-ects",
            },
            {
              text: "You can convert to german grade from GPA...",
              link: "/german-grade-calculator",
            },
          ],
        },
      ],
    },
    {
      main: "You can update your grading scale mapping below by clicking `Change Grade Scale`.",
    },
    {
      main: "Add Your Details under the `Your Details` Section. Following are the what each field represents",
      subLists: [
        {
          title:
            "`Credit Hours` are the number of credits of your particular subject. For example, Theory have usually 2-3 Credits while Labs usually have 1 Credit.",
        },
        {
          title:
            "`Select Grade` gives you the options to select the grade which you have achieved in the subject and these grades are relative to the grading scale above.",
        },
        {
          title:
            "`Grade Marks` are the marks relative to the Grade Selected by You.",
        },
        {
          title:
            "Last field is also calculated by us and it shows the total marks got in the subject which use formula: Credit Hours * Grade Marks",
        },
      ],
    },
    {
      main: "You can add more fields by clicking Green Add button and delete the field by clicking red cross button.",
    },
    {
      main: "After you have added all of your details, you can click `Calculate Result`, which will then calculate your result.",
    },
    {
      main: "Now you can see your total grades under the `Your GPA` Section.",
    },
    {
      main: "Click `Export to CSV` to export your calculation to CSV while click `Export to JSON` to export your calculation to JSON.",
    },
  ],
};

export const calCgpa = {
  metaTitle:
    "Easily Calculate Overall CGPA with Semester GPA & Credits | Quick Export to CSV & JSON Reports",
  metaDescription:
    "Easily calculate your overall CGPA by entering GPA and credit hours for each semester. Customize GPA thresholds, and quickly generate detailed reports in CSV or JSON formats. Perfect for students and educators looking for a fast, user-friendly solution to track academic performance across semesters. Following Countries & States are supported: India, Pakistan, United States (US), Brazil, Saudi Arabia, United Arab Emirate (UAE), Brazil, China, Japan, Korea, Thailand, Indonesia, Bangladesh, Nigeria, Russia, Mexico, Egypt, Philippines, Iran, Turkey, Canada, South Africa",
  metaKeywords:
    "gpa, calculator, gpa calculator, cgpa, cgpa calculator, university, bahria, bahria university, college, marks, grade, education, online GPA calculator, student GPA calculator, academic progress, grade calculation, CGPA calculation, GPA and CGPA, GPA calculation tool, accurate GPA calculation, quick GPA calculation, reliable GPA calculation",
  pageTitle:
    "Calculate Your Cumulative Grade Point Average (CGPA) With Effortlessly:",
  desc: "Easily compute your CGPA using our simple and intuitive calculator. Stay informed about your overall academic performance, track your progress, and plan ahead with just a few steps.",
  steps: [
    {
      main: "Update grade threshold if you have your Max Grade other than 4.0 GPA System. For example,",
      subLists: [
        {
          title: "United States (US), Pakistan & South Korea uses 4.0 System.",
        },
        {
          title: "Brazil, Thailand & Saudi Arabia uses 5.0 Grade Point Scale.",
        },
        { title: "Australia uses both 6.0 & 7.0 Grade Point System." },
        { title: "France uses 20 GPA Scale." },
        {
          title:
            "The ECTS grading scale is used across Europe. It doesn’t always convert to GPA but rather uses letter grades (A–F) that can be mapped to a GPA system depending on the institution.",
          links: [
            {
              text: "You can calculate for ECTS...",
              link: "/gpa-to-ects",
            },
            {
              text: "You can convert to german grade from GPA...",
              link: "/german-grade-calculator",
            },
          ],
        },
      ],
    },
    {
      main: "Add Your Details under the `Your Details` Section. Following are the what each field represents",
      subLists: [
        {
          title:
            "`Credit Hours` are the number of credits of your particular semester. For example, you can have usually 14 - 17 credits per semester.",
        },
        {
          title: "`Grade Marks` are the marks you got in that semester.",
        },
        {
          title:
            "Last field is calculated by us and it shows the total grade got in that semester which use formula: Credit Hours * Grade Marks",
        },
      ],
    },
    {
      main: "You can add more fields by clicking Green Add button and delete the field by clicking red cross button.",
    },
    {
      main: "After you have added all of your details, you can click `Calculate Result`, which will then calculate your result.",
    },
    {
      main: "Now you can see your total grades under the `Your GPA` Section.",
    },
    {
      main: "Click `Export to CSV` to export your calculation to CSV while click `Export to JSON` to export your calculation to JSON.",
    },
  ],
};

export const calcCTE = {
  metaTitle:
    "GPA to ECTS Calculator | CGPA to ECTS Converter | Flexible Conversion for Global Academic Standards | Asia, America, Australia, Africa, Middle East",
  metaDescription:
    "Easily convert your GPA to ECTS credits with our user-friendly tool, designed for students applying to European institutions. Customize the conversion using lecture hours, self-study time, or subject credits for accurate results. Ideal for international academic applications, our tool simplifies the process and ensures your grades align with ECTS requirements. Following Countries & States are supported: India, Pakistan, United States (US), Brazil, Saudi Arabia, United Arab Emirate (UAE), Brazil, China, Japan, Korea, Thailand, Indonesia, Bangladesh, Nigeria, Russia, Mexico, Egypt, Philippines, Iran, Turkey, Canada, South Africa.",
  metaKeywords:
    "CGPA to ECTS converter, convert CGPA to ECTS, ECTS calculator, CGPA conversion tool, European Credit Transfer System, academic grade conversion, international grade conversion, CGPA to European credits, ECTS credit calculator, global academic standards, ECTS for European universities, CGPA grading system, credit transfer system, ECTS credits for students, academic applications ECTS",
  pageTitle:
    "Convert Your Cumulative Grade Point Average (CGPA) to European Credit Transfer System (ECTS) for Your Subjects:",
  desc: "Quickly and accurately convert your CGPA to the European Credit Transfer System (ECTS) using our reliable tool. Whether you're preparing for international studies or need to translate your academic results for European institutions, our converter simplifies the process, ensuring your grades align with the ECTS framework.",
  steps: [
    {
      main: "Understand the ECTS (European Credit Transfer and Accumulation System) grading scale before converting your GPA.",
      subLists: [
        {
          title:
            "ECTS grades are based on the relative performance of students and are usually represented with letters from A to F.",
        },
        {
          title:
            "They are commonly used across European countries to ensure consistency in higher education grading.",
        },
        {
          title:
            "Unlike GPA systems, ECTS does not use cumulative points but rather percentile ranks and letter grades.",
        },
      ],
    },
    {
      main: "Enter your current GPA based on your home country's grading system.",
      subLists: [
        {
          title:
            "Make sure your GPA is on the correct scale (e.g., 4.0, 5.0, 10.0, or 20.0) before entering.",
        },
        {
          title:
            "If you're unsure about your GPA scale, refer to our homepage for country-specific systems.",
        },
      ],
    },
    {
      main: "Select your GPA scale to help us map it accurately to the ECTS format.",
      subLists: [
        {
          title:
            "We support popular GPA systems including 4.0, 5.0, 10.0, and 20.0 scales.",
        },
        {
          title:
            "Custom GPA scales are also supported if your country uses a unique system.",
        },
      ],
    },
    {
      main: "Click `Convert to ECTS` to get your equivalent ECTS letter grade.",
      subLists: [
        {
          title:
            "Your converted result will show the equivalent ECTS grade (A–F) based on performance percentile.",
        },
        {
          title:
            "This mapping is indicative and may vary slightly depending on the university or country.",
        },
      ],
    },
    {
      main: "Need to convert to a specific country's grading format like Germany?",
      subLists: [
        {
          title:
            "Use our dedicated tool for German grade conversion based on the Modified Bavarian Formula.",
          links: [
            {
              text: "Convert to German Grade",
              link: "/german-grade-calculator",
            },
          ],
        },
      ],
    },
    {
      main: "Export your conversion result for record-keeping.",
      subLists: [
        {
          title: "Click `Export to CSV` to download a spreadsheet format.",
        },
        {
          title: "Click `Export to JSON` if you prefer a structured data file.",
        },
      ],
    },
  ],
};

export const calGGC = {
  metaTitle:
    "Convert GPA or Marks to German Grade | Fast & Accurate German Grade Conversion Tool for University Applications",
  metaDescription:
    "Easily convert your GPA or marks to the German grading system using our precise and efficient German Grade Calculator. Perfect for students applying to German universities or professionals translating academic results for career opportunities. Following Countries & States are supported: India, Pakistan, United States (US), Brazil, Saudi Arabia, United Arab Emirate (UAE), Brazil, China, Japan, Korea, Thailand, Indonesia, Bangladesh, Nigeria, Russia, Mexico, Egypt, Philippines, Iran, Turkey, Canada, South Africa",
  metaKeywords:
    "German grade calculator, GPA to German grade, convert marks to German grade, German grading system, GPA conversion, marks to German grade conversion, German university grade converter, academic grade conversion tool, international grade conversion, German university application grade",
  pageTitle:
    "Convert Your Credits/Cumulative Grade Point Average (CGPA) to German Grade Swiftly:",
  desc: "Easily convert your credits or CGPA into the German grading system with our efficient and precise converter. Whether you're applying to a German university or need your academic results translated for career opportunities, our tool streamlines the conversion process, ensuring your grades meet the German academic standards with accuracy and ease.",
  steps: [
    {
      main: "Understand the German grading system and the Modified Bavarian Formula.",
      subLists: [
        {
          title:
            "Germany uses a reverse grading system where 1.0 is the best grade and 4.0 is the lowest passing grade.",
        },
        {
          title:
            "Grades higher than 4.0 (e.g., 4.1 or 5.0) are considered failing.",
        },
        {
          title:
            "To convert your GPA to the German grade, we use the Modified Bavarian Formula, widely accepted by German universities.",
        },
      ],
    },
    {
      main: "Enter your home country's GPA information to begin the conversion.",
      subLists: [
        {
          title:
            "`Maximum Grade` is the highest possible GPA in your system (e.g., 4.0, 10.0, or 20.0).",
        },
        {
          title:
            "`Minimum Passing Grade` is the lowest GPA required to pass in your system.",
        },
        {
          title:
            "`Your Obtained GPA` is your actual GPA score that you wish to convert.",
        },
      ],
    },
    {
      main: "Click on `Calculate` to convert your GPA into the German grading scale.",
      subLists: [
        {
          title:
            "Our tool instantly calculates your German equivalent grade using the official Modified Bavarian Formula:",
        },
        {
          title:
            "`German Grade = 1 + 3 × (Max Grade - Your Grade) / (Max Grade - Min Passing Grade)`",
        },
      ],
    },
    {
      main: "Review your converted German grade displayed below the calculator.",
      subLists: [
        {
          title:
            "You will see your final German grade rounded to two decimal places, which can be used for university applications in Germany.",
        },
      ],
    },
    {
      main: "Need to convert your GPA to ECTS or another European system?",
      subLists: [
        {
          title:
            "Use our ECTS converter to get letter grade equivalents like A, B, C, etc.",
          links: [
            {
              text: "Go to ECTS Calculator",
              link: "/gpa-to-ects",
            },
          ],
        },
      ],
    },
    {
      main: "Export your result for future reference or applications.",
      subLists: [
        {
          title:
            "Click `Export to CSV` to download your result as a spreadsheet.",
        },
        {
          title:
            "Click `Export to JSON` to download in a structured data format.",
        },
      ],
    },
  ],
};

export const cgpaQna = {
  title: "Got Questions? We’ve Got Answers.",
  subTitle:
    "Explore our most frequently asked questions to get the help and clarity you need.",
  stripAds: ["8284283698"],
  sidebarAds: ["3729945104", "2416863431"],
  faqs: [
    {
      question: "What is the purpose of this page?",
      answer:
        "The page allows users to easily calculate their overall CGPA by entering GPA and credit hours for each semester.",
    },
    {
      question: "How does this page help users?",
      answer:
        "It helps users calculate their cumulative CGPA over multiple semesters and provides export options for detailed reports in CSV and JSON formats.",
    },
    {
      question: "Who is the target audience of this page?",
      answer:
        "The target audience includes students and educators who need a quick and efficient way to track academic performance across semesters.",
    },
    {
      question: "What inputs are required from the user?",
      answer:
        "Users need to input their GPA and the corresponding credit hours for each semester.",
    },
    {
      question: "Can users customize GPA thresholds on this page?",
      answer:
        "Yes, users can customize GPA thresholds according to their academic institution's requirements.",
    },
    {
      question: "What types of reports can users generate?",
      answer: "Users can generate detailed reports in CSV or JSON formats.",
    },
    {
      question: "Is the page designed for fast calculations?",
      answer:
        "Yes, the page is designed to offer a fast and user-friendly solution for CGPA calculations.",
    },
    {
      question: "What formats can users export their CGPA reports in?",
      answer: "Users can export their CGPA reports in CSV and JSON formats.",
    },
    {
      question: "Can the page handle multiple semester entries?",
      answer:
        "Yes, users can input GPA and credit hours for multiple semesters to get an overall CGPA calculation.",
    },
    {
      question: "What does CGPA stand for?",
      answer: "CGPA stands for Cumulative Grade Point Average.",
    },
    {
      question: "Is this page only useful for students?",
      answer:
        "No, the page is useful for both students and educators who need to track academic performance.",
    },
    {
      question: "Does the page provide any downloadable reports?",
      answer:
        "Yes, the page allows users to download CGPA reports in CSV or JSON format.",
    },
    {
      question: "What is the primary function of this page?",
      answer:
        "The primary function is to calculate and track CGPA based on the inputted GPA and credit hours from different semesters.",
    },
    {
      question:
        "Is there any mention of how quickly calculations are processed?",
      answer: "Yes, the page promises fast and easy CGPA calculations.",
    },
    {
      question: "Is this tool limited to specific educational systems?",
      answer:
        "No, the tool is customizable, allowing users to set GPA thresholds, making it adaptable to various educational systems.",
    },
  ],
};

export const gpaQna = {
  title: "Got Questions? We’ve Got Answers.",
  subTitle:
    "Explore our most frequently asked questions to get the help and clarity you need.",
  stripAds: ["6318022953"],
  sidebarAds: ["1910447037", "9597365367"],
  faqs: [
    {
      question: "What is this page about?",
      answer:
        "This page provides an advanced CGPA calculator that allows users to calculate their CGPA (Cumulative Grade Point Average) with a fully customizable grading system. The tool is designed to accommodate various grading systems used in the US, India, Europe, and other regions.",
    },
    {
      question: "What makes this CGPA calculator unique?",
      answer:
        "This calculator is unique because it allows users to customize the grading scales, GPA thresholds, and letter grade ranges according to their specific grading system, making it adaptable for different countries and institutions.",
    },
    {
      question: "Who can benefit from this CGPA calculator?",
      answer:
        "Students, educators, academic institutions, and anyone needing to calculate or convert CGPAs across different grading systems can benefit from this tool. It's especially useful for those transitioning between different educational systems.",
    },
    {
      question: "How does the calculator support different grading systems?",
      answer:
        "The calculator allows users to dynamically adjust grading scales, GPA thresholds, and letter grade ranges to match various grading systems such as the 4.0 scale in the US, percentage-based systems in India, and European systems like ECTS.",
    },
    {
      question: "Can users export their CGPA calculations?",
      answer:
        "Yes, users can easily export their CGPA calculations and reports in both CSV and JSON formats, making it convenient for record-keeping and academic submissions.",
    },
    {
      question: "Is this calculator user-friendly?",
      answer:
        "Absolutely! The tool is designed with simplicity and ease of use in mind, offering a user-friendly interface where users can input their grades, adjust settings, and get instant results with minimal effort.",
    },
    {
      question: "Does the calculator offer preset grading systems?",
      answer:
        "Yes, the tool offers preset grading systems for regions like the US, India, and Europe. Users can either choose these presets or fully customize the settings to fit their unique requirements.",
    },
    {
      question: "How does this tool handle letter grades?",
      answer:
        "The calculator allows users to define or adjust the letter grade ranges (A, B, C, etc.) and their corresponding GPA values, ensuring flexibility across different grading systems.",
    },
    {
      question: "Can this tool be used for multiple semesters or subjects?",
      answer:
        "Yes, users can input grades for multiple subjects and semesters to calculate an accurate cumulative CGPA, which is useful for tracking academic progress over time.",
    },
    {
      question: "Is it possible to adjust GPA thresholds?",
      answer:
        "Yes, users can adjust the GPA thresholds to match the requirements of their educational institution or country. This flexibility ensures accurate CGPA results regardless of the grading scale.",
    },
    {
      question: "How does the tool handle percentage-based grading systems?",
      answer:
        "For percentage-based systems like those used in India, the calculator allows users to convert percentage scores into GPA, using custom or preset conversion scales.",
    },
    {
      question: "Is there an option to reset or clear the data entered?",
      answer:
        "Yes, the tool provides an option to reset or clear entered data, allowing users to start fresh with a new set of grades without any hassle.",
    },
    {
      question: "How can users access the exported reports?",
      answer:
        "After calculating the CGPA, users can export their results directly into CSV or JSON formats with just one click, making it easy to download and share.",
    },
    {
      question: "What are the benefits of exporting reports in CSV or JSON?",
      answer:
        "Exporting reports in CSV or JSON formats allows for easy data manipulation, storage, and integration with other systems, making it ideal for academic reporting, analysis, and record-keeping.",
    },
    {
      question: "Is this CGPA calculator free to use?",
      answer:
        "Yes, this CGPA calculator is completely free to use, offering all its features without any cost, making it accessible for students and educators worldwide.",
    },
  ],
};

export const ectsQna = {
  title: "Got Questions? We’ve Got Answers.",
  subTitle:
    "Explore our most frequently asked questions to get the help and clarity you need.",
  stripAds: ["5658120356"],
  sidebarAds: ["4684768276", "5004941289"],
  faqs: [
    {
      question: "What is CGPA?",
      answer:
        "CGPA stands for Cumulative Grade Point Average, which is the average of a student's grades over a period of time in their academic program.",
    },
    {
      question: "What is ECTS?",
      answer:
        "ECTS stands for European Credit Transfer and Accumulation System. It is a standard used by European universities to measure the workload and achievements of students.",
    },
    {
      question: "How does the GPA to ECTS conversion work?",
      answer:
        "The conversion is based on the number of hours spent in lectures, self-study, and the total weeks per semester. Alternatively, it can be done using your subject credits and total program credits.",
    },
    {
      question: "What is the range of hours required for 1 ECTS credit?",
      answer:
        "Typically, 1 ECTS credit equals 25 to 30 hours of total workload.",
    },
    {
      question: "What is the significance of converting GPA to ECTS?",
      answer:
        "Converting GPA to ECTS helps align your academic achievements with European standards, which is often required for international studies or applications to European institutions.",
    },
    {
      question: "What is the 'Hours Per Week (Lecture)' field?",
      answer:
        "This refers to the number of hours you spent in lectures per week during your academic program.",
    },
    {
      question: "What is the 'Hours Per Week (Self Study)' field?",
      answer:
        "This refers to the number of hours you spent in self-study per week outside of lectures during your academic program.",
    },
    {
      question: "What does 'Weeks/Semester' mean?",
      answer:
        "This refers to the number of weeks in a typical semester during your academic program.",
    },
    {
      question: "How is 'Subject Credits' used in the second method?",
      answer:
        "In the second method, you enter the credit hours assigned to each subject to calculate the equivalent ECTS credits.",
    },
    {
      question: "What does 'Total Credits' mean?",
      answer:
        "This refers to the total credit hours of your entire academic program.",
    },
    {
      question: "What does 'Course Years' refer to?",
      answer:
        "This refers to the total number of years of your academic program.",
    },
    {
      question: "What does 'ECTS/Year' mean?",
      answer:
        "This field refers to the standard ECTS credits assigned per year of study. Typically, it is 60 ECTS credits per academic year.",
    },
    {
      question: "Which method is more accurate for conversion?",
      answer:
        "Both methods can be used, but the first method (based on hours and weeks) is more detailed and accurate for calculating workload.",
    },
    {
      question:
        "Can I use this tool for converting my grades to other credit systems?",
      answer:
        "This tool is specifically designed for converting GPA to ECTS. For other systems, different tools or methods may be required.",
    },
    {
      question: "Is the conversion result recognized by European institutions?",
      answer:
        "The conversion provides an approximation based on standard formulas. It's advisable to check specific institution requirements for grade conversions.",
    },
    {
      question: "Do all European universities use the ECTS system?",
      answer:
        "Most European universities use the ECTS system, but it is always good to confirm the specific requirements of the university you are applying to.",
    },
    {
      question: "Is this tool applicable for postgraduate programs?",
      answer:
        "Yes, the tool can be used for both undergraduate and postgraduate programs, as long as the CGPA and credit hour information is provided.",
    },
    {
      question:
        "What if I don't know my exact hours for lectures or self-study?",
      answer:
        "You can estimate the hours you typically spent each week, but for more accuracy, try to provide the most precise values possible.",
    },
    {
      question: "Can I convert ECTS back to CGPA using this tool?",
      answer:
        "No, this tool is specifically designed for converting GPA to ECTS. Converting ECTS back to CGPA would require a different approach.",
    },
    {
      question:
        "What should I do if my program uses a different grading or credit system?",
      answer:
        "If your program uses a non-CGPA or non-ECTS system, consult with your academic institution or the one you're applying to for specific conversion methods.",
    },
  ],
};

export const ggcQna = {
  title: "Got Questions? We’ve Got Answers.",
  subTitle:
    "Explore our most frequently asked questions to get the help and clarity you need.",
  stripAds: ["9871863389"],
  sidebarAds: ["7286046738", "1523434228"],
  faqs: [
    {
      question: "What is the German grading system?",
      answer:
        "The German grading system typically ranges from 1.0 (excellent) to 5.0 (fail), with 1.0 being the highest achievable grade.",
    },
    {
      question: "How does the GPA to German grade conversion work?",
      answer:
        "Our converter uses a formula that aligns your GPA or marks with the German grading system, ensuring accurate conversion based on your academic performance.",
    },
    {
      question: "What inputs are needed for the German grade conversion?",
      answer:
        "You need to provide your maximum score, minimum score, and the score you achieved in the exam to calculate your equivalent German grade.",
    },
    {
      question: "Can I convert both GPA and marks to a German grade?",
      answer:
        "Yes, our tool allows you to convert either your GPA or marks into the German grading system, depending on the format of your academic results.",
    },
    {
      question: "Why do I need to know my equivalent German grade?",
      answer:
        "If you're applying to German universities or jobs in Germany, your academic results need to be translated into the German grading system to meet application requirements.",
    },
    {
      question: "What is the maximum score I can input for conversion?",
      answer:
        "You can input a maximum score based on the grading scale of your institution, such as 4.0 for GPA or 100 for percentage marks.",
    },
    {
      question: "Is the German grade calculator accurate?",
      answer:
        "Yes, the calculator uses a precise formula to ensure your GPA or marks are accurately converted to the German grading system.",
    },
    {
      question: "Can I use this tool for multiple conversions?",
      answer:
        "Yes, you can use the tool to convert as many scores as needed, whether for GPA or individual exam marks.",
    },
    {
      question: "Does this calculator work for all grading systems?",
      answer:
        "The calculator is designed to work with common GPA and percentage-based systems but may not cover every global grading system. Ensure your inputs match the required format.",
    },
    {
      question: "Is the German grade important for university applications?",
      answer:
        "Yes, many German universities require international applicants to submit their grades in the German grading format for proper evaluation.",
    },
  ],
};

export const ggcGrading = [
  {
    min: 1.0,
    max: 1.5,
    gerText: "sehr gut",
    text: "very good",
    description:
      "A performance that is exceptionally above the standard requirements.",
  },
  {
    min: 1.6,
    max: 2.5,
    gerText: "gut",
    text: "good",
    description:
      "A performance that significantly exceeds the average expectations.",
  },
  {
    min: 2.6,
    max: 3.5,
    gerText: "befriedigend",
    text: "satisfactory",
    description: "A performance that meets the standard requirements.",
  },
  {
    min: 3.6,
    max: 4.0,
    gerText: "ausreichend",
    text: "sufficient",
    description: "A performance that barely meets the minimum requirements.",
  },
  {
    min: 5.0,
    max: "above",
    gerText: "nicht ausreichend / nicht bestanden",
    text: "not sufficient / failed",
    description:
      "A performance that does not meet the required standards for passing.",
  },
];

export const countries = [
  {
    name: "Ascension Island",
    emoji: "🇦🇨",
  },
  {
    name: "Andorra",
    emoji: "🇦🇩",
  },
  {
    name: "United Arab Emirates",
    emoji: "🇦🇪",
  },
  {
    name: "Afghanistan",
    emoji: "🇦🇫",
  },
  {
    name: "Antigua & Barbuda",
    emoji: "🇦🇬",
  },
  {
    name: "Anguilla",
    emoji: "🇦🇮",
  },
  {
    name: "Albania",
    emoji: "🇦🇱",
  },
  {
    name: "Armenia",
    emoji: "🇦🇲",
  },
  {
    name: "Angola",
    emoji: "🇦🇴",
  },
  {
    name: "Antarctica",
    emoji: "🇦🇶",
  },
  {
    name: "Argentina",
    emoji: "🇦🇷",
  },
  {
    name: "American Samoa",
    emoji: "🇦🇸",
  },
  {
    name: "Austria",
    emoji: "🇦🇹",
  },
  {
    name: "Australia",
    emoji: "🇦🇺",
  },
  {
    name: "Aruba",
    emoji: "🇦🇼",
  },
  {
    name: "Åland Islands",
    emoji: "🇦🇽",
  },
  {
    name: "Azerbaijan",
    emoji: "🇦🇿",
  },
  {
    name: "Bosnia & Herzegovina",
    emoji: "🇧🇦",
  },
  {
    name: "Barbados",
    emoji: "🇧🇧",
  },
  {
    name: "Bangladesh",
    emoji: "🇧🇩",
  },
  {
    name: "Belgium",
    emoji: "🇧🇪",
  },
  {
    name: "Burkina Faso",
    emoji: "🇧🇫",
  },
  {
    name: "Bulgaria",
    emoji: "🇧🇬",
  },
  {
    name: "Bahrain",
    emoji: "🇧🇭",
  },
  {
    name: "Burundi",
    emoji: "🇧🇮",
  },
  {
    name: "Benin",
    emoji: "🇧🇯",
  },
  {
    name: "St. Barthélemy",
    emoji: "🇧🇱",
  },
  {
    name: "Bermuda",
    emoji: "🇧🇲",
  },
  {
    name: "Brunei",
    emoji: "🇧🇳",
  },
  {
    name: "Bolivia",
    emoji: "🇧🇴",
  },
  {
    name: "Caribbean Netherlands",
    emoji: "🇧🇶",
  },
  {
    name: "Brazil",
    emoji: "🇧🇷",
  },
  {
    name: "Bahamas",
    emoji: "🇧🇸",
  },
  {
    name: "Bhutan",
    emoji: "🇧🇹",
  },
  {
    name: "Bouvet Island",
    emoji: "🇧🇻",
  },
  {
    name: "Botswana",
    emoji: "🇧🇼",
  },
  {
    name: "Belarus",
    emoji: "🇧🇾",
  },
  {
    name: "Belize",
    emoji: "🇧🇿",
  },
  {
    name: "Canada",
    emoji: "🇨🇦",
  },
  {
    name: "Cocos (Keeling) Islands",
    emoji: "🇨🇨",
  },
  {
    name: "Congo - Kinshasa",
    emoji: "🇨🇩",
  },
  {
    name: "Central African Republic",
    emoji: "🇨🇫",
  },
  {
    name: "Congo - Brazzaville",
    emoji: "🇨🇬",
  },
  {
    name: "Switzerland",
    emoji: "🇨🇭",
  },
  {
    name: "Côte d’Ivoire",
    emoji: "🇨🇮",
  },
  {
    name: "Cook Islands",
    emoji: "🇨🇰",
  },
  {
    name: "Chile",
    emoji: "🇨🇱",
  },
  {
    name: "Cameroon",
    emoji: "🇨🇲",
  },
  {
    name: "China",
    emoji: "🇨🇳",
  },
  {
    name: "Colombia",
    emoji: "🇨🇴",
  },
  {
    name: "Clipperton Island",
    emoji: "🇨🇵",
  },
  {
    name: "Costa Rica",
    emoji: "🇨🇷",
  },
  {
    name: "Cuba",
    emoji: "🇨🇺",
  },
  {
    name: "Cape Verde",
    emoji: "🇨🇻",
  },
  {
    name: "Curaçao",
    emoji: "🇨🇼",
  },
  {
    name: "Christmas Island",
    emoji: "🇨🇽",
  },
  {
    name: "Cyprus",
    emoji: "🇨🇾",
  },
  {
    name: "Czechia",
    emoji: "🇨🇿",
  },
  {
    name: "Germany",
    emoji: "🇩🇪",
  },
  {
    name: "Diego Garcia",
    emoji: "🇩🇬",
  },
  {
    name: "Djibouti",
    emoji: "🇩🇯",
  },
  {
    name: "Denmark",
    emoji: "🇩🇰",
  },
  {
    name: "Dominica",
    emoji: "🇩🇲",
  },
  {
    name: "Dominican Republic",
    emoji: "🇩🇴",
  },
  {
    name: "Algeria",
    emoji: "🇩🇿",
  },
  {
    name: "Ceuta & Melilla",
    emoji: "🇪🇦",
  },
  {
    name: "Ecuador",
    emoji: "🇪🇨",
  },
  {
    name: "Estonia",
    emoji: "🇪🇪",
  },
  {
    name: "Egypt",
    emoji: "🇪🇬",
  },
  {
    name: "Western Sahara",
    emoji: "🇪🇭",
  },
  {
    name: "Eritrea",
    emoji: "🇪🇷",
  },
  {
    name: "Spain",
    emoji: "🇪🇸",
  },
  {
    name: "Ethiopia",
    emoji: "🇪🇹",
  },
  {
    name: "European Union",
    emoji: "🇪🇺",
  },
  {
    name: "Finland",
    emoji: "🇫🇮",
  },
  {
    name: "Fiji",
    emoji: "🇫🇯",
  },
  {
    name: "Falkland Islands",
    emoji: "🇫🇰",
  },
  {
    name: "Micronesia",
    emoji: "🇫🇲",
  },
  {
    name: "Faroe Islands",
    emoji: "🇫🇴",
  },
  {
    name: "France",
    emoji: "🇫🇷",
  },
  {
    name: "Gabon",
    emoji: "🇬🇦",
  },
  {
    name: "United Kingdom",
    emoji: "🇬🇧",
  },
  {
    name: "Grenada",
    emoji: "🇬🇩",
  },
  {
    name: "Georgia",
    emoji: "🇬🇪",
  },
  {
    name: "French Guiana",
    emoji: "🇬🇫",
  },
  {
    name: "Guernsey",
    emoji: "🇬🇬",
  },
  {
    name: "Ghana",
    emoji: "🇬🇭",
  },
  {
    name: "Gibraltar",
    emoji: "🇬🇮",
  },
  {
    name: "Greenland",
    emoji: "🇬🇱",
  },
  {
    name: "Gambia",
    emoji: "🇬🇲",
  },
  {
    name: "Guinea",
    emoji: "🇬🇳",
  },
  {
    name: "Guadeloupe",
    emoji: "🇬🇵",
  },
  {
    name: "Equatorial Guinea",
    emoji: "🇬🇶",
  },
  {
    name: "Greece",
    emoji: "🇬🇷",
  },
  {
    name: "South Georgia & South Sandwich Islands",
    emoji: "🇬🇸",
  },
  {
    name: "Guatemala",
    emoji: "🇬🇹",
  },
  {
    name: "Guam",
    emoji: "🇬🇺",
  },
  {
    name: "Guinea-Bissau",
    emoji: "🇬🇼",
  },
  {
    name: "Guyana",
    emoji: "🇬🇾",
  },
  {
    name: "Hong Kong SAR China",
    emoji: "🇭🇰",
  },
  {
    name: "Heard & McDonald Islands",
    emoji: "🇭🇲",
  },
  {
    name: "Honduras",
    emoji: "🇭🇳",
  },
  {
    name: "Croatia",
    emoji: "🇭🇷",
  },
  {
    name: "Haiti",
    emoji: "🇭🇹",
  },
  {
    name: "Hungary",
    emoji: "🇭🇺",
  },
  {
    name: "Canary Islands",
    emoji: "🇮🇨",
  },
  {
    name: "Indonesia",
    emoji: "🇮🇩",
  },
  {
    name: "Ireland",
    emoji: "🇮🇪",
  },
  {
    name: "Isle of Man",
    emoji: "🇮🇲",
  },
  {
    name: "India",
    emoji: "🇮🇳",
  },
  {
    name: "British Indian Ocean Territory",
    emoji: "🇮🇴",
  },
  {
    name: "Iraq",
    emoji: "🇮🇶",
  },
  {
    name: "Iran",
    emoji: "🇮🇷",
  },
  {
    name: "Iceland",
    emoji: "🇮🇸",
  },
  {
    name: "Italy",
    emoji: "🇮🇹",
  },
  {
    name: "Jersey",
    emoji: "🇯🇪",
  },
  {
    name: "Jamaica",
    emoji: "🇯🇲",
  },
  {
    name: "Jordan",
    emoji: "🇯🇴",
  },
  {
    name: "Japan",
    emoji: "🇯🇵",
  },
  {
    name: "Kenya",
    emoji: "🇰🇪",
  },
  {
    name: "Kyrgyzstan",
    emoji: "🇰🇬",
  },
  {
    name: "Cambodia",
    emoji: "🇰🇭",
  },
  {
    name: "Kiribati",
    emoji: "🇰🇮",
  },
  {
    name: "Comoros",
    emoji: "🇰🇲",
  },
  {
    name: "St. Kitts & Nevis",
    emoji: "🇰🇳",
  },
  {
    name: "North Korea",
    emoji: "🇰🇵",
  },
  {
    name: "South Korea",
    emoji: "🇰🇷",
  },
  {
    name: "Kuwait",
    emoji: "🇰🇼",
  },
  {
    name: "Cayman Islands",
    emoji: "🇰🇾",
  },
  {
    name: "Kazakhstan",
    emoji: "🇰🇿",
  },
  {
    name: "Laos",
    emoji: "🇱🇦",
  },
  {
    name: "Lebanon",
    emoji: "🇱🇧",
  },
  {
    name: "St. Lucia",
    emoji: "🇱🇨",
  },
  {
    name: "Liechtenstein",
    emoji: "🇱🇮",
  },
  {
    name: "Sri Lanka",
    emoji: "🇱🇰",
  },
  {
    name: "Liberia",
    emoji: "🇱🇷",
  },
  {
    name: "Lesotho",
    emoji: "🇱🇸",
  },
  {
    name: "Lithuania",
    emoji: "🇱🇹",
  },
  {
    name: "Luxembourg",
    emoji: "🇱🇺",
  },
  {
    name: "Latvia",
    emoji: "🇱🇻",
  },
  {
    name: "Libya",
    emoji: "🇱🇾",
  },
  {
    name: "Morocco",
    emoji: "🇲🇦",
  },
  {
    name: "Monaco",
    emoji: "🇲🇨",
  },
  {
    name: "Moldova",
    emoji: "🇲🇩",
  },
  {
    name: "Montenegro",
    emoji: "🇲🇪",
  },
  {
    name: "St. Martin",
    emoji: "🇲🇫",
  },
  {
    name: "Madagascar",
    emoji: "🇲🇬",
  },
  {
    name: "Marshall Islands",
    emoji: "🇲🇭",
  },
  {
    name: "North Macedonia",
    emoji: "🇲🇰",
  },
  {
    name: "Mali",
    emoji: "🇲🇱",
  },
  {
    name: "Myanmar (Burma)",
    emoji: "🇲🇲",
  },
  {
    name: "Mongolia",
    emoji: "🇲🇳",
  },
  {
    name: "Macao SAR China",
    emoji: "🇲🇴",
  },
  {
    name: "Northern Mariana Islands",
    emoji: "🇲🇵",
  },
  {
    name: "Martinique",
    emoji: "🇲🇶",
  },
  {
    name: "Mauritania",
    emoji: "🇲🇷",
  },
  {
    name: "Montserrat",
    emoji: "🇲🇸",
  },
  {
    name: "Malta",
    emoji: "🇲🇹",
  },
  {
    name: "Mauritius",
    emoji: "🇲🇺",
  },
  {
    name: "Maldives",
    emoji: "🇲🇻",
  },
  {
    name: "Malawi",
    emoji: "🇲🇼",
  },
  {
    name: "Mexico",
    emoji: "🇲🇽",
  },
  {
    name: "Malaysia",
    emoji: "🇲🇾",
  },
  {
    name: "Mozambique",
    emoji: "🇲🇿",
  },
  {
    name: "Namibia",
    emoji: "🇳🇦",
  },
  {
    name: "New Caledonia",
    emoji: "🇳🇨",
  },
  {
    name: "Niger",
    emoji: "🇳🇪",
  },
  {
    name: "Norfolk Island",
    emoji: "🇳🇫",
  },
  {
    name: "Nigeria",
    emoji: "🇳🇬",
  },
  {
    name: "Nicaragua",
    emoji: "🇳🇮",
  },
  {
    name: "Netherlands",
    emoji: "🇳🇱",
  },
  {
    name: "Norway",
    emoji: "🇳🇴",
  },
  {
    name: "Nepal",
    emoji: "🇳🇵",
  },
  {
    name: "Nauru",
    emoji: "🇳🇷",
  },
  {
    name: "Niue",
    emoji: "🇳🇺",
  },
  {
    name: "New Zealand",
    emoji: "🇳🇿",
  },
  {
    name: "Oman",
    emoji: "🇴🇲",
  },
  {
    name: "Panama",
    emoji: "🇵🇦",
  },
  {
    name: "Peru",
    emoji: "🇵🇪",
  },
  {
    name: "French Polynesia",
    emoji: "🇵🇫",
  },
  {
    name: "Papua New Guinea",
    emoji: "🇵🇬",
  },
  {
    name: "Philippines",
    emoji: "🇵🇭",
  },
  {
    name: "Pakistan",
    emoji: "🇵🇰",
  },
  {
    name: "Poland",
    emoji: "🇵🇱",
  },
  {
    name: "St. Pierre & Miquelon",
    emoji: "🇵🇲",
  },
  {
    name: "Pitcairn Islands",
    emoji: "🇵🇳",
  },
  {
    name: "Puerto Rico",
    emoji: "🇵🇷",
  },
  {
    name: "Palestinian Territories",
    emoji: "🇵🇸",
  },
  {
    name: "Portugal",
    emoji: "🇵🇹",
  },
  {
    name: "Palau",
    emoji: "🇵🇼",
  },
  {
    name: "Paraguay",
    emoji: "🇵🇾",
  },
  {
    name: "Qatar",
    emoji: "🇶🇦",
  },
  {
    name: "Réunion",
    emoji: "🇷🇪",
  },
  {
    name: "Romania",
    emoji: "🇷🇴",
  },
  {
    name: "Serbia",
    emoji: "🇷🇸",
  },
  {
    name: "Russia",
    emoji: "🇷🇺",
  },
  {
    name: "Rwanda",
    emoji: "🇷🇼",
  },
  {
    name: "Saudi Arabia",
    emoji: "🇸🇦",
  },
  {
    name: "Solomon Islands",
    emoji: "🇸🇧",
  },
  {
    name: "Seychelles",
    emoji: "🇸🇨",
  },
  {
    name: "Sudan",
    emoji: "🇸🇩",
  },
  {
    name: "Sweden",
    emoji: "🇸🇪",
  },
  {
    name: "Singapore",
    emoji: "🇸🇬",
  },
  {
    name: "St. Helena",
    emoji: "🇸🇭",
  },
  {
    name: "Slovenia",
    emoji: "🇸🇮",
  },
  {
    name: "Svalbard & Jan Mayen",
    emoji: "🇸🇯",
  },
  {
    name: "Slovakia",
    emoji: "🇸🇰",
  },
  {
    name: "Sierra Leone",
    emoji: "🇸🇱",
  },
  {
    name: "San Marino",
    emoji: "🇸🇲",
  },
  {
    name: "Senegal",
    emoji: "🇸🇳",
  },
  {
    name: "Somalia",
    emoji: "🇸🇴",
  },
  {
    name: "Suriname",
    emoji: "🇸🇷",
  },
  {
    name: "South Sudan",
    emoji: "🇸🇸",
  },
  {
    name: "São Tomé & Príncipe",
    emoji: "🇸🇹",
  },
  {
    name: "El Salvador",
    emoji: "🇸🇻",
  },
  {
    name: "Sint Maarten",
    emoji: "🇸🇽",
  },
  {
    name: "Syria",
    emoji: "🇸🇾",
  },
  {
    name: "Eswatini",
    emoji: "🇸🇿",
  },
  {
    name: "Tristan da Cunha",
    emoji: "🇹🇦",
  },
  {
    name: "Turks & Caicos Islands",
    emoji: "🇹🇨",
  },
  {
    name: "Chad",
    emoji: "🇹🇩",
  },
  {
    name: "French Southern Territories",
    emoji: "🇹🇫",
  },
  {
    name: "Togo",
    emoji: "🇹🇬",
  },
  {
    name: "Thailand",
    emoji: "🇹🇭",
  },
  {
    name: "Tajikistan",
    emoji: "🇹🇯",
  },
  {
    name: "Tokelau",
    emoji: "🇹🇰",
  },
  {
    name: "Timor-Leste",
    emoji: "🇹🇱",
  },
  {
    name: "Turkmenistan",
    emoji: "🇹🇲",
  },
  {
    name: "Tunisia",
    emoji: "🇹🇳",
  },
  {
    name: "Tonga",
    emoji: "🇹🇴",
  },
  {
    name: "Turkey",
    emoji: "🇹🇷",
  },
  {
    name: "Trinidad & Tobago",
    emoji: "🇹🇹",
  },
  {
    name: "Tuvalu",
    emoji: "🇹🇻",
  },
  {
    name: "Taiwan",
    emoji: "🇹🇼",
  },
  {
    name: "Tanzania",
    emoji: "🇹🇿",
  },
  {
    name: "Ukraine",
    emoji: "🇺🇦",
  },
  {
    name: "Uganda",
    emoji: "🇺🇬",
  },
  {
    name: "U.S. Outlying Islands",
    emoji: "🇺🇲",
  },
  {
    name: "United Nations",
    emoji: "🇺🇳",
  },
  {
    name: "United States",
    emoji: "🇺🇸",
  },
  {
    name: "Uruguay",
    emoji: "🇺🇾",
  },
  {
    name: "Uzbekistan",
    emoji: "🇺🇿",
  },
  {
    name: "Vatican City",
    emoji: "🇻🇦",
  },
  {
    name: "St. Vincent & Grenadines",
    emoji: "🇻🇨",
  },
  {
    name: "Venezuela",
    emoji: "🇻🇪",
  },
  {
    name: "British Virgin Islands",
    emoji: "🇻🇬",
  },
  {
    name: "U.S. Virgin Islands",
    emoji: "🇻🇮",
  },
  {
    name: "Vietnam",
    emoji: "🇻🇳",
  },
  {
    name: "Vanuatu",
    emoji: "🇻🇺",
  },
  {
    name: "Wallis & Futuna",
    emoji: "🇼🇫",
  },
  {
    name: "Samoa",
    emoji: "🇼🇸",
  },
  {
    name: "Kosovo",
    emoji: "🇽🇰",
  },
  {
    name: "Yemen",
    emoji: "🇾🇪",
  },
  {
    name: "Mayotte",
    emoji: "🇾🇹",
  },
  {
    name: "South Africa",
    emoji: "🇿🇦",
  },
  {
    name: "Zambia",
    emoji: "🇿🇲",
  },
  {
    name: "Zimbabwe",
    emoji: "🇿🇼",
  },
  {
    name: "England",
    emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  },
  {
    name: "Scotland",
    emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  },
  {
    name: "Wales",
    emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
  },
];

export const africa = [
  { name: "Algeria", emoji: "🇩🇿" },
  { name: "Angola", emoji: "🇦🇴" },
  { name: "Benin", emoji: "🇧🇯" },
  { name: "Botswana", emoji: "🇧🇼" },
  { name: "Burkina Faso", emoji: "🇧🇫" },
  { name: "Burundi", emoji: "🇧🇮" },
  { name: "Cabo Verde", emoji: "🇨🇻" },
  { name: "Cameroon", emoji: "🇨🇲" },
  { name: "Central African Republic", emoji: "🇨🇫" },
  { name: "Chad", emoji: "🇹🇩" },
  { name: "Comoros", emoji: "🇰🇲" },
  { name: "Congo - Brazzaville", emoji: "🇨🇬" },
  { name: "Congo - Kinshasa", emoji: "🇨🇩" },
  { name: "Djibouti", emoji: "🇩🇯" },
  { name: "Egypt", emoji: "🇪🇬" },
  { name: "Equatorial Guinea", emoji: "🇬🇶" },
  { name: "Eritrea", emoji: "🇪🇷" },
  { name: "Eswatini", emoji: "🇸🇿" },
  { name: "Ethiopia", emoji: "🇪🇹" },
  { name: "Gabon", emoji: "🇬🇦" },
  { name: "Gambia", emoji: "🇬🇲" },
  { name: "Ghana", emoji: "🇬🇭" },
  { name: "Guinea", emoji: "🇬🇳" },
  { name: "Guinea-Bissau", emoji: "🇬🇼" },
  { name: "Ivory Coast", emoji: "🇨🇮" },
  { name: "Kenya", emoji: "🇰🇪" },
  { name: "Lesotho", emoji: "🇱🇸" },
  { name: "Liberia", emoji: "🇱🇷" },
  { name: "Libya", emoji: "🇱🇾" },
  { name: "Madagascar", emoji: "🇲🇬" },
  { name: "Malawi", emoji: "🇲🇼" },
  { name: "Mali", emoji: "🇲🇱" },
  { name: "Mauritania", emoji: "🇲🇷" },
  { name: "Mauritius", emoji: "🇲🇺" },
  { name: "Morocco", emoji: "🇲🇦" },
  { name: "Mozambique", emoji: "🇲🇿" },
  { name: "Namibia", emoji: "🇳🇦" },
  { name: "Niger", emoji: "🇳🇪" },
  { name: "Nigeria", emoji: "🇳🇬" },
  { name: "Rwanda", emoji: "🇷🇼" },
  { name: "Senegal", emoji: "🇸🇳" },
  { name: "Seychelles", emoji: "🇸🇨" },
  { name: "Sierra Leone", emoji: "🇸🇱" },
  { name: "Somalia", emoji: "🇸🇴" },
  { name: "South Africa", emoji: "🇿🇦" },
  { name: "South Sudan", emoji: "🇸🇸" },
  { name: "Sudan", emoji: "🇸🇩" },
  { name: "Tanzania", emoji: "🇹🇿" },
  { name: "Togo", emoji: "🇹🇬" },
  { name: "Tunisia", emoji: "🇹🇳" },
  { name: "Uganda", emoji: "🇺🇬" },
  { name: "Zambia", emoji: "🇿🇲" },
  { name: "Zimbabwe", emoji: "🇿🇼" },
];

export const asia = [
  { name: "Afghanistan", emoji: "🇦🇫" },
  { name: "Armenia", emoji: "🇦🇲" },
  { name: "Azerbaijan", emoji: "🇦🇿" },
  { name: "Bahrain", emoji: "🇧🇭" },
  { name: "Bangladesh", emoji: "🇧🇩" },
  { name: "Bhutan", emoji: "🇧🇹" },
  { name: "Brunei", emoji: "🇧🇳" },
  { name: "Cambodia", emoji: "🇰🇭" },
  { name: "China", emoji: "🇨🇳" },
  { name: "Cyprus", emoji: "🇨🇾" },
  { name: "Georgia", emoji: "🇬🇪" },
  { name: "India", emoji: "🇮🇳" },
  { name: "Indonesia", emoji: "🇮🇩" },
  { name: "Iran", emoji: "🇮🇷" },
  { name: "Iraq", emoji: "🇮🇶" },
  { name: "Japan", emoji: "🇯🇵" },
  { name: "Jordan", emoji: "🇯🇴" },
  { name: "Kazakhstan", emoji: "🇰🇿" },
  { name: "Kuwait", emoji: "🇰🇼" },
  { name: "Kyrgyzstan", emoji: "🇰🇬" },
  { name: "Laos", emoji: "🇱🇦" },
  { name: "Lebanon", emoji: "🇱🇧" },
  { name: "Malaysia", emoji: "🇲🇾" },
  { name: "Maldives", emoji: "🇲🇻" },
  { name: "Mongolia", emoji: "🇲🇳" },
  { name: "Myanmar (Burma)", emoji: "🇲🇲" },
  { name: "Nepal", emoji: "🇳🇵" },
  { name: "North Korea", emoji: "🇰🇵" },
  { name: "Oman", emoji: "🇴🇲" },
  { name: "Pakistan", emoji: "🇵🇰" },
  { name: "Palestine", emoji: "🇵🇸" },
  { name: "Philippines", emoji: "🇵🇭" },
  { name: "Qatar", emoji: "🇶🇦" },
  { name: "Saudi Arabia", emoji: "🇸🇦" },
  { name: "Singapore", emoji: "🇸🇬" },
  { name: "South Korea", emoji: "🇰🇷" },
  { name: "Sri Lanka", emoji: "🇱🇰" },
  { name: "Syria", emoji: "🇸🇾" },
  { name: "Taiwan", emoji: "🇹🇼" },
  { name: "Tajikistan", emoji: "🇹🇯" },
  { name: "Thailand", emoji: "🇹🇭" },
  { name: "Timor-Leste", emoji: "🇹🇱" },
  { name: "Turkey", emoji: "🇹🇷" },
  { name: "Turkmenistan", emoji: "🇹🇲" },
  { name: "United Arab Emirates", emoji: "🇦🇪" },
  { name: "Uzbekistan", emoji: "🇺🇿" },
  { name: "Vietnam", emoji: "🇻🇳" },
  { name: "Yemen", emoji: "🇾🇪" },
];

export const europe = [
  { name: "Albania", emoji: "🇦🇱" },
  { name: "Andorra", emoji: "🇦🇩" },
  { name: "Armenia", emoji: "🇦🇲" },
  { name: "Austria", emoji: "🇦🇹" },
  { name: "Azerbaijan", emoji: "🇦🇿" },
  { name: "Belarus", emoji: "🇧🇾" },
  { name: "Belgium", emoji: "🇧🇪" },
  { name: "Bosnia and Herzegovina", emoji: "🇧🇦" },
  { name: "Bulgaria", emoji: "🇧🇬" },
  { name: "Croatia", emoji: "🇭🇷" },
  { name: "Cyprus", emoji: "🇨🇾" },
  { name: "Czechia", emoji: "🇨🇿" },
  { name: "Denmark", emoji: "🇩🇰" },
  { name: "Estonia", emoji: "🇪🇪" },
  { name: "Finland", emoji: "🇫🇮" },
  { name: "France", emoji: "🇫🇷" },
  { name: "Georgia", emoji: "🇬🇪" },
  { name: "Germany", emoji: "🇩🇪" },
  { name: "Greece", emoji: "🇬🇷" },
  { name: "Hungary", emoji: "🇭🇺" },
  { name: "Iceland", emoji: "🇮🇸" },
  { name: "Ireland", emoji: "🇮🇪" },
  { name: "Italy", emoji: "🇮🇹" },
  { name: "Kosovo", emoji: "🇽🇰" },
  { name: "Latvia", emoji: "🇱🇻" },
  { name: "Lithuania", emoji: "🇱🇹" },
  { name: "Luxembourg", emoji: "🇱🇺" },
  { name: "Malta", emoji: "🇲🇹" },
  { name: "Moldova", emoji: "🇲🇩" },
  { name: "Monaco", emoji: "🇲🇨" },
  { name: "Montenegro", emoji: "🇲🇪" },
  { name: "Netherlands", emoji: "🇳🇱" },
  { name: "North Macedonia", emoji: "🇲🇰" },
  { name: "Norway", emoji: "🇳🇴" },
  { name: "Poland", emoji: "🇵🇱" },
  { name: "Portugal", emoji: "🇵🇹" },
  { name: "Romania", emoji: "🇷🇴" },
  { name: "Russia", emoji: "🇷🇺" },
  { name: "San Marino", emoji: "🇸🇲" },
  { name: "Serbia", emoji: "🇷🇸" },
  { name: "Slovakia", emoji: "🇸🇰" },
  { name: "Slovenia", emoji: "🇸🇮" },
  { name: "Spain", emoji: "🇪🇸" },
  { name: "Sweden", emoji: "🇸🇪" },
  { name: "Switzerland", emoji: "🇨🇭" },
  { name: "Ukraine", emoji: "🇺🇦" },
  { name: "United Kingdom", emoji: "🇬🇧" },
  { name: "Vatican City", emoji: "🇻🇦" },
];

export const nAmerica = [
  { name: "Antigua and Barbuda", emoji: "🇦🇬" },
  { name: "Bahamas", emoji: "🇧🇸" },
  { name: "Barbados", emoji: "🇧🇧" },
  { name: "Belize", emoji: "🇧🇿" },
  { name: "Canada", emoji: "🇨🇦" },
  { name: "Costa Rica", emoji: "🇨🇷" },
  { name: "Cuba", emoji: "🇨🇺" },
  { name: "Dominica", emoji: "🇩🇲" },
  { name: "Dominican Republic", emoji: "🇩🇴" },
  { name: "El Salvador", emoji: "🇸🇻" },
  { name: "Grenada", emoji: "🇬🇩" },
  { name: "Guatemala", emoji: "🇬🇹" },
  { name: "Haiti", emoji: "🇭🇹" },
  { name: "Honduras", emoji: "🇭🇳" },
  { name: "Jamaica", emoji: "🇯🇲" },
  { name: "Mexico", emoji: "🇲🇽" },
  { name: "Nicaragua", emoji: "🇳🇮" },
  { name: "Panama", emoji: "🇵🇦" },
  { name: "Saint Kitts and Nevis", emoji: "🇰🇳" },
  { name: "Saint Lucia", emoji: "🇱🇨" },
  { name: "Saint Vincent and the Grenadines", emoji: "🇻🇨" },
  { name: "Trinidad and Tobago", emoji: "🇹🇹" },
  { name: "United States", emoji: "🇺🇸" },
];

export const sAmerica = [
  { name: "Argentina", emoji: "🇦🇷" },
  { name: "Bolivia", emoji: "🇧🇴" },
  { name: "Brazil", emoji: "🇧🇷" },
  { name: "Chile", emoji: "🇨🇱" },
  { name: "Colombia", emoji: "🇨🇴" },
  { name: "Ecuador", emoji: "🇪🇨" },
  { name: "Guyana", emoji: "🇬🇾" },
  { name: "Paraguay", emoji: "🇵🇾" },
  { name: "Peru", emoji: "🇵🇪" },
  { name: "Suriname", emoji: "🇸🇷" },
  { name: "Uruguay", emoji: "🇺🇾" },
  { name: "Venezuela", emoji: "🇻🇪" },
];

export const oceania = [
  { name: "Australia", emoji: "🇦🇺" },
  { name: "Fiji", emoji: "🇫🇯" },
  { name: "Kiribati", emoji: "🇰🇮" },
  { name: "Marshall Islands", emoji: "🇲🇭" },
  { name: "Micronesia", emoji: "🇫🇲" },
  { name: "Nauru", emoji: "🇳🇷" },
  { name: "New Zealand", emoji: "🇳🇿" },
  { name: "Palau", emoji: "🇵🇼" },
  { name: "Papua New Guinea", emoji: "🇵🇬" },
  { name: "Samoa", emoji: "🇼🇸" },
  { name: "Solomon Islands", emoji: "🇸🇧" },
  { name: "Tonga", emoji: "🇹🇴" },
  { name: "Tuvalu", emoji: "🇹🇻" },
  { name: "Vanuatu", emoji: "🇻🇺" },
];

export const antarctica = [{ name: "Antarctica", emoji: "🇦🇶" }];

const africaDesc = [
  "Africa, the second-largest continent, is known for its rich diversity of cultures, landscapes, and wildlife, spanning deserts, savannas, and tropical rainforests.",
  "The cradle of humankind, Africa is home to ancient civilizations, vibrant cultures, and extraordinary biodiversity, from the Sahara to the Serengeti.",
  "Famous for its wildlife and scenic beauty, Africa offers vast plains, diverse ecosystems, and unique cultural traditions deeply rooted in history.",
  "Africa is a continent of contrasts, from the ancient pyramids of Egypt to the bustling urban centers of South Africa, showcasing unparalleled diversity.",
  "Known for its immense natural resources, Africa features stunning landscapes, from mountains to coasts, alongside deeply rooted cultural heritage.",
];

const asiaDesc = [
  "Asia, the largest continent, boasts the world’s highest mountains, oldest civilizations, and diverse cultures across a wide range of environments.",
  "Known for its vibrant traditions and rapid economic growth, Asia combines ancient heritage with modern innovation, spanning deserts to rainforests.",
  "Asia is home to a vast diversity of languages, religions, and landscapes, from the steppes of Central Asia to the islands of Southeast Asia.",
  "With booming metropolises and rich cultural heritage, Asia offers a blend of ancient traditions and cutting-edge technology.",
  "Encompassing everything from arid deserts to snowy mountains, Asia’s landscapes and cultures are as vast and varied as its history.",
];

const europeDesc = [
  "Europe, known for its cultural heritage, is a continent of historic landmarks, artistic achievements, and diverse landscapes, from the Alps to the Mediterranean.",
  "A center of art, philosophy, and science, Europe has influenced the world with its history and achievements across many fields.",
  "Europe offers diverse landscapes and a mosaic of cultures, with historic cities, medieval castles, and modern, cosmopolitan centers.",
  "Famous for its contributions to art, architecture, and literature, Europe is a cultural hub with a rich, storied past.",
  "With a variety of languages, traditions, and cuisines, Europe’s nations collectively showcase a fascinating blend of history and modernity.",
];

const naDesc = [
  "North America spans vast wilderness areas, bustling cities, and a range of cultures from Canada to Central America.",
  "Known for its natural beauty and multicultural societies, North America offers diverse landscapes, from coastal beaches to mountain ranges.",
  "A continent of diverse ecosystems, North America is home to iconic landmarks, technological innovations, and a melting pot of cultures.",
  "North America offers a blend of cultural influences, featuring towering cities, natural parks, and rich historical sites.",
  "With influences from indigenous cultures to modern multicultural societies, North America combines history, innovation, and natural beauty.",
];

const saDesc = [
  "South America, known for its vibrant cultures and lush landscapes, spans the Amazon rainforest, the Andes Mountains, and stunning coastal areas.",
  "With diverse ecosystems and lively cultural traditions, South America is home to ancient civilizations and some of the world's most famous natural wonders.",
  "South America combines breathtaking scenery, from tropical jungles to mountain peaks, with a rich blend of indigenous and colonial heritage.",
  "A land of passion and color, South America is renowned for its music, dance, and iconic landscapes like the Amazon and the Andes.",
  "Known for its biodiversity and warm cultures, South America features rich histories, world-famous festivals, and incredible scenic diversity.",
];

const oDesc = [
  "Oceania, covering Australasia, Polynesia, Micronesia, and Melanesia, offers stunning islands, diverse cultures, and unique wildlife.",
  "Known for its isolated ecosystems, Oceania includes Australia’s vast outback, New Zealand’s landscapes, and the rich traditions of the Pacific islands.",
  "Oceania combines modern cities with ancient indigenous cultures, diverse islands, and beautiful coastal and underwater ecosystems.",
  "With vast, remote landscapes, Oceania is home to diverse climates, from Australia’s deserts to Fiji’s tropical beaches.",
  "Oceania features both the ancient traditions of the Pacific islands and cosmopolitan cities, with stunning coral reefs and biodiversity.",
];

const aDesc = [
  "Antarctica, the coldest, driest, and windiest continent, is a frozen wilderness covered by ice sheets that hold most of the world’s freshwater.",
  "Known for its extreme conditions, Antarctica is the only continent without a native human population, primarily inhabited by researchers and scientists.",
  "Antarctica's vast icy expanse and surrounding icy waters are home to unique wildlife, including penguins, seals, and a rich array of marine life.",
  "Despite its harsh climate, Antarctica plays a crucial role in Earth's climate system and is a primary focus of global environmental research.",
  "Antarctica is a pristine, remote continent where icy landscapes, towering glaciers, and untouched wilderness attract scientists from around the world.",
];

const sideAds = [
  "4696392476",
  "9003287239",
  "5443924985",
  "5064042220",
  "2187206253",
  "2817761649",
];

const stripAds = [
  "7498649781",
  "5239302042",
  "3611134418",
  "1688512805",
  "9375431135",
  "8062349468",
  "2122184116",
];

export const homeCountries = {
  title: "Supported Countries",
  subTitle: "Calculator supported for the following:",
  headingType: "default" as "default" | "primary",
  bgType: "default" as "default" | "primary",
  countryList: [
    {
      continent: "Asia",
      countries: asia,
      desc: asiaDesc[0],
    },
    {
      continent: "Europe",
      countries: europe,
      desc: europeDesc[0],
    },
    {
      continent: "Africa",
      countries: africa,
      desc: africaDesc[0],
    },
    {
      continent: "South America",
      countries: sAmerica,
      desc: saDesc[0],
    },
    {
      continent: "North America",
      countries: sAmerica,
      desc: naDesc[0],
    },
    {
      continent: "Australia (Oceania)",
      countries: oceania,
      desc: oDesc[0],
    },
    {
      continent: "Antarctica",
      countries: antarctica,
      desc: aDesc[0],
    },
  ],
  sideAds: sideAds,
  stripAds: stripAds,
};

export const gpaCountries = {
  title: "Supported Countries",
  subTitle: "Calculator supported for the following:",
  headingType: "default" as "default" | "primary",
  bgType: "default" as "default" | "primary",
  countryList: [
    {
      continent: "Asia",
      countries: asia,
      desc: asiaDesc[1],
    },
    {
      continent: "Europe",
      countries: europe,
      desc: europeDesc[1],
    },
    {
      continent: "Africa",
      countries: africa,
      desc: africaDesc[1],
    },
    {
      continent: "South America",
      countries: sAmerica,
      desc: saDesc[1],
    },
    {
      continent: "North America",
      countries: sAmerica,
      desc: naDesc[1],
    },
    {
      continent: "Australia (Oceania)",
      countries: oceania,
      desc: oDesc[1],
    },
    {
      continent: "Antarctica",
      countries: antarctica,
      desc: aDesc[1],
    },
  ],
  sideAds: sideAds,
  stripAds: stripAds,
};

export const cgpaCountries = {
  title: "Supported Countries",
  subTitle: "Calculator supported for the following:",
  headingType: "default" as "default" | "primary",
  bgType: "default" as "default" | "primary",
  countryList: [
    {
      continent: "Asia",
      countries: asia,
      desc: asiaDesc[2],
    },
    {
      continent: "Europe",
      countries: europe,
      desc: europeDesc[2],
    },
    {
      continent: "Africa",
      countries: africa,
      desc: africaDesc[2],
    },
    {
      continent: "South America",
      countries: sAmerica,
      desc: saDesc[2],
    },
    {
      continent: "North America",
      countries: sAmerica,
      desc: naDesc[2],
    },
    {
      continent: "Australia (Oceania)",
      countries: oceania,
      desc: oDesc[2],
    },
    {
      continent: "Antarctica",
      countries: antarctica,
      desc: aDesc[2],
    },
  ],
  sideAds: sideAds,
  stripAds: stripAds,
};

export const ectsCountries = {
  title: "Supported Countries",
  subTitle: "Calculator supported for the following:",
  headingType: "default" as "default" | "primary",
  bgType: "default" as "default" | "primary",
  countryList: [
    {
      continent: "Asia",
      countries: asia,
      desc: asiaDesc[2],
    },
    {
      continent: "Africa",
      countries: africa,
      desc: africaDesc[2],
    },
    {
      continent: "South America",
      countries: sAmerica,
      desc: saDesc[2],
    },
    {
      continent: "North America",
      countries: sAmerica,
      desc: naDesc[2],
    },
    {
      continent: "Australia (Oceania)",
      countries: oceania,
      desc: oDesc[2],
    },
    {
      continent: "Antarctica",
      countries: antarctica,
      desc: aDesc[2],
    },
  ],
  sideAds: sideAds,
  stripAds: stripAds,
};

export const germanCountries = {
  title: "Supported Countries",
  subTitle: "Calculator supported for the following:",
  headingType: "default" as "default" | "primary",
  bgType: "default" as "default" | "primary",
  countryList: [
    {
      continent: "Asia",
      countries: asia,
      desc: asiaDesc[2],
    },
    {
      continent: "Europe",
      countries: europe,
      desc: europeDesc[2],
    },
    {
      continent: "Africa",
      countries: africa,
      desc: africaDesc[2],
    },
    {
      continent: "South America",
      countries: sAmerica,
      desc: saDesc[2],
    },
    {
      continent: "North America",
      countries: sAmerica,
      desc: naDesc[2],
    },
    {
      continent: "Australia (Oceania)",
      countries: oceania,
      desc: oDesc[2],
    },
    {
      continent: "Antarctica",
      countries: antarctica,
      desc: aDesc[2],
    },
  ],
  sideAds: sideAds,
  stripAds: stripAds,
};
