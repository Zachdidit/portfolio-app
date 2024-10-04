"use client";

import React from "react";
import { Card } from "./types";
import { ImageCards } from "@/app/components";
import {
  Heading,
  Text,
  Flex,
  Button,
  Grid,
  Icon,
  Background,
  Avatar,
  LetterFx,
} from "@/once-ui/components";
import Link from "next/link";

export default function Home() {
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
      <Flex
        as="main"
        direction="column"
        justifyContent="center"
        fillWidth
        fillHeight
        padding="l"
        gap="l"
      >
        <Flex
          mobileDirection="column"
          direction="column"
          fillWidth
          gap="24"
          alignItems="center"
          align="center"
        >
          <Flex position="relative" flex={2} paddingTop="0" paddingX="xl">
            <Avatar size="xl" src="/images/zachheadshot.png" />
          </Flex>
          <Flex
            position="relative"
            flex={4}
            gap="24"
            marginBottom="104"
            maxWidth={60}
            direction="column"
          >
            <Heading wrap="balance" variant="display-strong-s">
              <span className="font-code">
                <LetterFx trigger="instant">
                  Your vision, perfectly coded
                </LetterFx>
              </span>
            </Heading>
            <Text style={{ flex: 1, flexWrap: "wrap" }}>
              With over a decade of experience in web development, I specialize
              in creating and optimizing robust e-commerce solutions for
              high-profile clients. I have a proven track record in managing and
              leading development teams, enhancing legacy systems, and
              streamlining release processes. My expertise spans across
              platforms like Shopify & Salesforce Commerce Cloud, with a strong
              command of JavaScript, Node.js, React, and more. I excel at
              solving complex technical challenges and delivering seamless
              digital experiences that drive business success. Let's collaborate
              to elevate your online presence with precision and innovation.
            </Text>
          </Flex>

      <ImageCards cards={projects} />
    </Flex>
        </Flex>
      </Flex>

  );
}
