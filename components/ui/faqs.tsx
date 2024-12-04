import { FC } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

import Heading from "@/components/ui/heading";

import classes from "@/styles/index.module.css";

const Faqs: FC<{
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}> = ({ faqs }) => {
  return (
    <section className={classes.wrapper}>
      <div
        className={`${classes.section} ${classes.section_features} container`}
      >
        <Heading
          title="The FAQs"
          subTitle="Know What it Does!"
          styleType="primary"
        />
        <div className={classes.faqs_wrapper}>
          <Accordion className={classes.faqs}>
            {faqs.map((faq, index) => {
              return (
                <AccordionItem
                  headingTag="h4"
                  className={classes.faq_item}
                  header={faq.question}
                  key={index}
                >
                  {faq.answer}
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
