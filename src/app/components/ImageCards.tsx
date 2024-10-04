"use client";

import React, {
  forwardRef,
  useRef,
  useEffect,
  RefObject,
} from "react";
import { Heading, Text, Flex } from "@/once-ui/components";
import imageCardsStyle from "./ImageCards.module.scss";
import { Card } from "../types";

import { ScrollObserver, valueAtPercentage } from '@/app/lib/aat';

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

const cardOffset: number = 20;
const cardScale: number = 1;


const useCardEffect = (
  cardsContainerRef: RefObject<HTMLDivElement>,
  cardsRef: RefObject<HTMLDivElement[]>,
) => {
  const handleMouseLeave = (e: MouseEvent) => {
    console.log("Mouse Leave");
  };
  const handleScroll = (e: Event) => {
    console.log("Scroll detected: " + e.target);
  };
  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    const cards = cardsRef.current;

    let cardHeight = 50;

    if (cards?.[0]?.clientHeight) {
      cardHeight = cards[0].clientHeight;
    }

    cardsContainer?.style.setProperty("--cards-count", String(cards?.length));
    cardsContainer?.style.setProperty(
      "--card-height",
      String(cardHeight) + "px",
    );

    cards?.forEach((card, index) => {
      const offsetTop = cardOffset + cardOffset * cardOffset;
	card.style.paddingTop = `${cardOffset + index * cardOffset}px`;
      if (index === cards.length - 1) return;
      const toScale = cardScale - (cards.length - 1 - index) * 0.1;
      const nextCard = cards[index + 1];
      const cardInner = card.children[0] as HTMLElement;

	  new ScrollObserver();
	  ScrollObserver.Element(nextCard, {
		offsetTop: 0,
		offsetBottom: window.innerHeight - card.clientHeight,
		offsetLeft: 0,
		offsetRight: 0,
		addWrapper: false,
		wrapperClass: '',
		container: document.documentElement

	  }).onScroll(({ percentageY }) => {
		if(cardInner === null) return;
		if(cardInner.style === null) return;
		cardInner.style.scale = valueAtPercentage({
		  from: 1,
		  to: toScale,
		  percentage: percentageY
		}).toString();
		cardInner.style.filter = `brightness(${valueAtPercentage({
		  from: 1,
		  to: 0.6,
		  percentage: percentageY
		}).toString()})`;
	  });

    });
    return () => {};
  }, [cardsContainerRef, cardsRef]); // Work here to ensure useEffect runs ONCE
};
const ImageCards = forwardRef<HTMLDivElement, ImageCardsProps>(
  ({ cards }, ref) => {
    const cardContainerRef = useRef<HTMLDivElement>(null);
    const cardsRefsById = useRef<HTMLDivElement[]>([]);

    useCardEffect(cardContainerRef, cardsRefsById);
    return (
	  <Flex
	  position="relative"
      as="section"
      overflow="hidden"
      fillWidth
      minHeight="0"
      direction="column"
      alignItems="center">
	<div className={`${imageCardsStyle.space} ${imageCardsStyle.spacesmall}`}></div>
	  <div className={imageCardsStyle.cards} ref={cardContainerRef}>
        {cards.map((card, i) => (
          <div
            key={i}
            className={imageCardsStyle.card}
            ref={(element) => {
              if (element) {
                cardsRefsById.current.push(element);
              }
            }}
          >
            <div className={imageCardsStyle.inner}>
              <div className={imageCardsStyle.imagecontainer}>
                <img
                  className={imageCardsStyle.image}
                  src={card.img}
                  alt={card.title}
                />
              </div>
              <div className={imageCardsStyle.content}>
                <Heading className={imageCardsStyle.title}>
                  {card.title}
                </Heading>
                <Text className={imageCardsStyle.description}>
                  {card.description}
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div>
	  <div className={imageCardsStyle.space}></div>
	  </Flex>
    );
  },
);

export { ImageCards };
