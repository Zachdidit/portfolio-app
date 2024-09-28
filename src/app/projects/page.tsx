// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import { Text, Flex, Grid, Icon } from "@/once-ui/components";
import { ImageCards } from "@/app/components";
import Link from "next/link";
import { Card } from "../types";

export default function Page() {
  const projects: Card[] = [
    {
      id: 0,
		href: "https://www.netgear.com",
      img: "/images/projects/netgear.png",
      title: "Netgear",
      description:
        "I served as a Senior Consultant for the Netgear brand, where I supported the daily operations of their website and ensured they remained at the forefront of Salesforce Commerce Cloud (SFCC) technology. My responsibilities included integrating and maintaining payment processors within their checkout system, as well as leveraging Salesforce Open Commerce API (OCAPI) to enhance and support their headless sister site.",
    },
    {
		id: 1,
      href: "https://www.vince.com",
      img: "/images/projects/vince.png",
      title: "Vince",
      description:
        "I provided two years of continuous support and expertise to the Vince brand, focusing on enhancing their e-commerce platform. During this time, I developed a custom blogging system called Our Story, upgraded their homepage to support wide-frame responsive videos, and refactored the entire site to ensure full ADA compliance.",
    },
    {
		id: 2,
      href: "https://www.newbalance.com",
      img: "/images/projects/newbalance.png",
      title: "New Balance",
      description:
        "I collaborated with New Balance to support their legacy e-commerce site, leading the release management process. This involved maintaining GitHub and Bitbucket repositories, structuring release branches, and overseeing the build process for test and production environments using Jenkins.",
    },
    {
		id: 3,
      href: "https://www.brookstone.com",
      img: "/images/projects/brookstone.png",
      title: "Brookstone",
      description:
        "I collaborated with New Balance to support their legacy e-commerce site, leading the release management process. This involved maintaining GitHub and Bitbucket repositories, structuring release branches, and overseeing the build process for test and production environments using Jenkins.",
    },
    {
		id: 4,
      href: "https://www.timex.com",
      img: "/images/projects/timex.png",
      title: "Timex",
      description:
        "With Timex, I led a team of developers, providing ongoing support and consulting expertise to ensure the continuous improvement and success of their projects.",
    },
    {
		id: 5,
      href: "https://thecincinnatiherald.com/",
      img: "/images/projects/cincyherald.png",
      title: "The Cincinnati Herald",
      description:
        "I manage the Cincinnati Herald's WordPress site, ensuring it stays updated and accessible to thousands of readers in the Cincinnati area. Additionally, I oversee their social media presence to maintain high levels of engagement with their audience.",
    },
  ];
  return (
    <Flex
      position="relative"
      as="section"
      overflow="hidden"
      fillWidth
      minHeight="0"
      direction="column"
      alignItems="center"
    >
      <ImageCards cards={projects} />
    </Flex>
  );
}
