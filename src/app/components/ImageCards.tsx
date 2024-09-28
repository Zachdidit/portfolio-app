"use client";

import React, { forwardRef, useRef, useEffect, RefObject } from "react";
import {
	Heading,
	Text,
	Flex,
  } from "@/once-ui/components";
import Image from "next/image";
import imageCardsStyle from "./ImageCards.module.scss";

import { Card } from "../types";
import { inherits } from "util";

const sizeMap: Record<string, string> = {
  xs: "var(--static-space-16)",
  s: "var(--static-space-20)",
  m: "var(--static-space-24)",
  l: "var(--static-space-32)",
  xl: "var(--static-space-40)",
};

type ImageCardsProps = {
  cards: Array<Card>;
};

const ImageCards = forwardRef<HTMLDivElement, ImageCardsProps>(
  ({ cards }, ref) => {
    const cardsRef = useRef<HTMLDivElement>(null);
    return (
      <Flex
	  position="relative"
      overflow="hidden"
      minHeight="0"
      direction="column"
      alignItems="center"
	  className={imageCardsStyle.cards}
	  ref={cardsRef}>
        {cards.map((card, i) => (
          <Flex key={i} className={imageCardsStyle.card} alignItems="start" direction="row" data-index="0">
            <Flex key={i}  className={imageCardsStyle.imagecontainer}>
              <Flex key={i}  className={imageCardsStyle.imagecontainer} flex={0}>
                <img key={i}
				  className={imageCardsStyle.image}
                  src={card.img}
                  alt={card.title}
                />
              </Flex>
              <Flex key={i} direction="column" className={imageCardsStyle.content}>
                <h1 key={i} className={imageCardsStyle.title}>{card.title}</h1>
                <p key={i} className={imageCardsStyle.description}>
                  {card.description}
                </p>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    );
  },
);

export { ImageCards };
