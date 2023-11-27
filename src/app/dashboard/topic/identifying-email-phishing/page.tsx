import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";

const tips = [
  {
    header: "Check the Sender's Email Address",
    content:
      "Examine the sender's email address carefully. Phishing emails often use addresses that resemble, but do not exactly match, the official domain.",
  },
  {
    header: "Look for Spelling and Grammar Errors",
    content:
      "Phishing emails may contain spelling and grammar mistakes. Legitimate organizations usually maintain a high level of professionalism in their communications.",
  },
  {
    header: "Verify Email Greetings",
    content:
      'Generic greetings like "Dear Customer" instead of your actual name can be a red flag. Legitimate organizations often personalize their emails.',
  },
];

export default function TopicTwoPage() {
  return (
    <>
      <Navbar type="back" />
      <MaxWidthWrapper>
        <h1 className="my-10">Identifying Email Phishing</h1>
        <h2 className="mb-5 text-3xl">Tips</h2>
        <div className="space-y-5">
          {tips.map((tip, index) => (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{tip.header}</AccordionTrigger>
                <AccordionContent>{tip.content}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <h2 className="mb-5 mt-14 text-3xl">Example</h2>
        <Image
          src="/topics/identifying_email_phishing_example.jpg"
          alt="identifying email phishing example"
          width={500}
          height={700}
        />
      </MaxWidthWrapper>
    </>
  );
}
