import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

const relativePath = "/dashboard/topic";
const TopicLinks = [
  {
    href: `${relativePath}/types-of-phishing-attacks`,
    label: "Types of Phishing Attacks",
  },
  {
    href: `${relativePath}/identifying-email-phishing`,
    label: "Identifying Email Phishing",
  },
  { href: `${relativePath}/impact-of-phising`, label: "Impact of Phishing" },
];

export default function ExploreTopicPage() {
  return (
    <>
      <Navbar type="back" />
      <MaxWidthWrapper>
        <h1 className="mt-10 text-center">Choose a Topic</h1>
        <div className="mx-auto mt-20 flex w-full max-w-xs flex-col gap-5">
          {TopicLinks.map(({ href, label }) => (
            <Link key={href} href={href}>
              <Button className="h-auto w-full justify-center py-10 text-xl font-medium">
                <span className="break-words">{label}</span>
              </Button>
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
}
