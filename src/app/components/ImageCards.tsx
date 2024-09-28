"use client";

import React, { forwardRef, useRef, useEffect, RefObject, useMemo, createRef } from "react";
import { Heading, Text} from "@/once-ui/components";
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

const cardOffset: number = 20;
const cardScale: number = 1;

const useCardEffect = (cardsContainerRef : RefObject<HTMLDivElement>, cardsRef : RefObject<HTMLDivElement[]>) => {
	const handleMouseLeave = (e: MouseEvent) => {
		console.log('Mouse Leave');
	};
	const handleScroll = (e: Event) => {
		console.log('Scroll detected: ' + e.target)
	};
	useEffect(() => {
		const cardsContainer = cardsContainerRef.current;
		const cards = cardsRef.current;

		let cardHeight = 50;

		if (cards?.[0]?.clientHeight){
			cardHeight = cards[0].clientHeight;
		}

		cardsContainer?.style.setProperty('--cards-count', String(cards?.length));
		cardsContainer?.style.setProperty('--card-height', String(cardHeight) + 'px')

		cards?.forEach((card,index) => {
			card.style.paddingTop = `${cardOffset + index * cardOffset}px`
			if (index === cards.length - 1) return;
			const toScale = cardScale - (cards.length - 1 - index) * .1;
			const nextCard = cards[index+1];
			const cardInner = card.querySelector('.inner');
		})
		return () => {
		};
	  }, [cardsContainerRef, cardsRef]);
}
const ImageCards = forwardRef<HTMLDivElement, ImageCardsProps>(
  ({ cards }, ref) => {
    const cardContainerRef = useRef<HTMLDivElement>(null);
	const cardsRefsById = useRef<HTMLDivElement[]>([]);

	useCardEffect(cardContainerRef,cardsRefsById);
    return (
      <div className={imageCardsStyle.cards} ref={cardContainerRef}>
        {cards.map((card, i) => (
          <div key={i} className={imageCardsStyle.card} ref={(element) =>
			{
				if (element) {
					cardsRefsById.current.push(element)
				}
			}}>

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
    );
  },
);

export { ImageCards };
