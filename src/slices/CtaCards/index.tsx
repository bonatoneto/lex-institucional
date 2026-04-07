"use client";

import { FC, useState } from "react";

import AnimateOnView from "@/components/animate-on-view";
import GridContainer from "@/components/container";
import CTAButton from "@/components/cta-button";
import Divider from "@/components/divider";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type CtaSectionProps = SliceComponentProps<Content.CtaSectionSlice>;

const CtaSection: FC<CtaSectionProps> = ({ slice }) => {
  const [activeCard, setActiveCard] = useState<number>(1);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative py-32"
    >
      <PrismicNextImage
        className="absolute inset-0 h-full"
        field={slice.primary.background_image}
        fallbackAlt=""
      />
      <GridContainer>
        <div className="relative col-start-1 col-end-7 flex flex-col w-full">
          <AnimateOnView delay={0}>
            <div className="font-baloo text-5xl font-semibold text-dark mb-12">
              <PrismicRichText field={slice.primary.title} />
            </div>
          </AnimateOnView>
          <AnimateOnView delay={0.15}>
            <Divider variant="gradient" />
          </AnimateOnView>
        </div>
        <ul
          className="col-start-1 col-end-13 flex items-center justify-center gap-4 mt-12"
          onMouseLeave={() => setActiveCard(1)}
        >
          {slice.primary.cards.map((item, index) => (
            <AnimateOnView
              key={index}
              delay={0.3 + index * 0.15}
              className="flex-1 min-w-[calc(33.333%-1rem)]"
            >
              <li
                className="relative overflow-hidden transition-all duration-300 ease-in-out w-full"
                style={{
                  height: activeCard === index ? "428px" : "352px",
                }}
                onMouseEnter={() => setActiveCard(index)}
              >
                <PrismicNextImage
                  field={item.card_image}
                  className="w-full h-full object-cover rounded-[52px]"
                  sizes="322px"
                  quality={100}
                  fallbackAlt=""
                />
                <div className="absolute inset-0 bg-black opacity-20 rounded-[52px]"></div>
                <div className="absolute inset-0 w-full flex flex-col justify-end gap-6 px-6 py-13 text-white">
                  <div className="font-baloo text-[1.75rem] leading-none font-bold text-center">
                    <PrismicRichText field={item.card_title} />
                  </div>
                  {activeCard === index && (
                    <AnimateOnView>
                      <div className="font-nunito text-lg tracking-[0.48px] text-center">
                        <PrismicRichText field={item.card_description} />
                      </div>
                    </AnimateOnView>
                  )}
                  <div className="max-w-3xs mx-auto">
                    <CTAButton href={item.cta_link.text ?? ""} variant="orange">
                      {item.cta_text}
                    </CTAButton>
                  </div>
                </div>
              </li>
            </AnimateOnView>
          ))}
        </ul>
      </GridContainer>
    </section>
  );
};

export default CtaSection;
