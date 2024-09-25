"use client";

import React, { forwardRef, useRef, useEffect, RefObject } from "react";
import Image from "next/image";
import imageTileStyles from "./ImageTile.module.scss";

const sizeMap: Record<string, string> = {
  xs: "var(--static-space-16)",
  s: "var(--static-space-20)",
  m: "var(--static-space-24)",
  l: "var(--static-space-32)",
  xl: "var(--static-space-40)",
};

type ImageTileProps = {
  width: number;
  height: number;
  src: string;
  alt: string;
};

const useGlossEffect = (
  cardRef: RefObject<HTMLDivElement>,
  cardContentRef: RefObject<HTMLDivElement>,
  glossRef: RefObject<HTMLDivElement>,
  imgref: RefObject<HTMLDivElement>,
) => {
  const mapNumberRange = (
    n: number,
    a: number,
    b: number,
    c: number,
    d: number,
  ) => {
    return ((n - a) * (d - c)) / (b - a) + c;
  };

  const addShineClass = () => {
    requestAnimationFrame(() => {
      if (glossRef.current) {
        glossRef.current.classList.add("gloss--shine");
      }
	  if (imgref.current){
		imgref.current.classList.add("gloss--background");
	  }
    });
  };

  const calculateTransformValues = (
    pointerX: number,
    pointerY: number,
    cardRect: DOMRect,
  ) => {
    const halfWidth = cardRect.width / 2;
    const halfHeight = cardRect.height / 2;
    const cardCenterX = cardRect.left + halfWidth;
    const cardCenterY = cardRect.top + halfHeight;
    const deltaX = pointerX - cardCenterX;
    const deltaY = pointerY - cardCenterY;
    const distanceToCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = Math.max(halfWidth, halfHeight);
    const degree = mapNumberRange(distanceToCenter, 0, maxDistance, 0, 10);
    const rx = mapNumberRange(deltaY, 0, halfWidth, 0, 1);
    const ry = mapNumberRange(deltaX, 0, halfHeight, 0, 1);
    return { rx, ry, degree, distanceToCenter, maxDistance };
  };

  const applyTransform = (
    rx: number,
    ry: number,
    degree: number,
    distanceToCenter: number,
    maxDistance: number,
  ) => {
    const cardTransform = `perspective(400px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`;
    const glossTransform = `translate(${-ry * 100}%, ${-rx * 100}%) scale(2.4)`;
    const glossOpacity = mapNumberRange(
      distanceToCenter,
      0,
      maxDistance,
      0,
      0.6,
    );
    if (glossRef.current && cardContentRef.current) {
      cardContentRef.current.style.transform = cardTransform;
      glossRef.current.style.transform = glossTransform;
      glossRef.current.style.opacity = glossOpacity.toString();
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    const cardRect = cardRef.current
      ? cardRef.current.getBoundingClientRect()
      : DOMRect.fromRect({ x: 1, y: 1, width: 10, height: 10 });
    const { rx, ry, degree, distanceToCenter, maxDistance } =
      calculateTransformValues(e.clientX, e.clientY, cardRect);

    applyTransform(rx, ry, degree, distanceToCenter, maxDistance);
  };

  const handleMouseLeave = () => {
    if (cardContentRef.current) cardContentRef.current.style.transform = "";
    if (glossRef.current) glossRef.current.style.opacity = "0";
	if (imgref.current) imgref.current.classList.remove("gloss--background");
  };

  useEffect(() => {
    const card = cardRef;

    addShineClass();
    if (card.current) {
      card.current.addEventListener("mousemove", handleMouseMove);
      card.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (card.current) {
        card.current.removeEventListener("mousemove", handleMouseMove);
        card.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [cardRef, cardContentRef, glossRef]);
};

const ImageTile = forwardRef<HTMLDivElement, ImageTileProps>(
  ({ width, height, src, alt }, ref) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const cardContentRef = useRef<HTMLDivElement>(null);
    const glossRef = useRef<HTMLDivElement>(null);
	const imgref = useRef<HTMLDivElement>(null);
    useGlossEffect(cardRef, cardContentRef, glossRef, imgref);

    return (
      <div className={imageTileStyles["card"]} ref={cardRef}>
        <div className={imageTileStyles["content"]} ref={cardContentRef}>
          <div className={imageTileStyles["gloss"]} ref={glossRef} />
          <Image ref={imgref} src={src} width={width} height={height} alt={alt} />
        </div>
      </div>
    );
  },
);

export { ImageTile };
