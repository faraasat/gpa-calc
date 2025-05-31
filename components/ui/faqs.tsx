import { FC } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

import Heading from "@/components/ui/heading";
import AdBanner from "./ads";

const Faqs: FC<{
  title: string;
  subTitle: string;
  invert?: boolean;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  stripAds: Array<string>;
  sidebarAds: Array<string>;
}> = ({ faqs, title, subTitle, invert = false, stripAds, sidebarAds }) => {
  return (
    <section className="relative z-50 flex w-full py-18">
      <div className={`container flex flex-col gap-14`}>
        <Heading
          title={title}
          subTitle={subTitle}
          titleClass={invert ? "text-primary-c" : "text-primary-c"}
          subTitleClass={invert ? "text-secondary-c" : "text-secondary-c"}
        />

        <div className="flex items-center ">
          {sidebarAds?.[0] && (
            <aside className="min-w-[300px] h-full flex item-center justify-center z-80 relative w-[40%] max-w-[300px] max-sm:hidden max-xl:hidden">
              <AdBanner slot={stripAds[0]} />
            </aside>
          )}

          <Accordion className="w-full">
            {faqs.map((faq, index) => {
              return (
                <AccordionItem
                  headingTag="h4"
                  className={"faq_item"}
                  header={faq.question}
                  key={index}
                >
                  {faq.answer}
                </AccordionItem>
              );
            })}
          </Accordion>

          {sidebarAds?.[1] && (
            <aside className="min-w-[300px] h-full flex item-center justify-center z-80 relative w-[40%] max-w-[300px] max-sm:hidden">
              <AdBanner slot={stripAds[1]} />
            </aside>
          )}
        </div>

        {stripAds?.[0] && <AdBanner slot={stripAds[0]} />}
      </div>
    </section>
  );
};

export default Faqs;
