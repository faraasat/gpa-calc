import Faqs from "@/components/ui/faqs";

const faqs = [
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
];

const HomeFAQs = () => {
  return <Faqs faqs={faqs} />;
};

export default HomeFAQs;
