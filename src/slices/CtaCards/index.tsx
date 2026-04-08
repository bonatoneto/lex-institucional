"use client";

import { FC, useState } from "react";

import AnimateOnView from "@/components/animate-on-view";
import GridContainer from "@/components/container";
import CtaCardDesktop from "@/components/cta-card/cta-card-desktop";
import CtaCardMobile from "@/components/cta-card/cta-card-mobile";
import Divider from "@/components/divider";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type CtaSectionProps = SliceComponentProps<Content.CtaSectionSlice>;

const CtaSection: FC<CtaSectionProps> = ({ slice }) => {
  const [activeCard, setActiveCard] = useState<number>(1);

  return (
    <section
      id={slice.slice_type}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative py-13 lg:py-32"
    >
      <PrismicNextImage
        className="absolute inset-0 h-full"
        field={slice.primary.background_image}
        fallbackAlt=""
      />
      <GridContainer>
        <div className="relative col-start-1 col-end-13 lg:col-end-7 flex flex-col w-full items-center lg:items-start">
          <AnimateOnView delay={0}>
            <div className="font-baloo text-[2rem] lg:text-5xl font-semibold text-dark mb-8 lg:mb-12">
              <PrismicRichText field={slice.primary.title} />
            </div>
          </AnimateOnView>
          <AnimateOnView
            delay={0.15}
            className="flex justify-center lg:justify-start w-full"
          >
            <Divider variant="gradient" />
          </AnimateOnView>
        </div>

        {/* Mobile */}
        <ul className="col-start-1 col-end-13 flex flex-col gap-4 mt-12 md:hidden">
          {slice.primary.cards.map((item, index) => (
            <AnimateOnView key={index} delay={0.3 + index * 0.15}>
              <CtaCardMobile item={item} />
            </AnimateOnView>
          ))}
        </ul>

        {/* Desktop */}
        <ul
          className="col-start-1 col-end-13 hidden md:flex items-center justify-center gap-4 mt-12"
          onMouseLeave={() => setActiveCard(1)}
        >
          {slice.primary.cards.map((item, index) => (
            <AnimateOnView
              key={index}
              delay={0.3 + index * 0.15}
              className="flex-1 min-w-[calc(33.333%-1rem)]"
            >
              <CtaCardDesktop
                item={item}
                active={activeCard === index}
                onMouseEnter={() => setActiveCard(index)}
              />
            </AnimateOnView>
          ))}
        </ul>
      </GridContainer>
    </section>
  );
};

export default CtaSection;
