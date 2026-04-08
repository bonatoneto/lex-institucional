"use client";

import { FC } from "react";

import CTAButton from "@/components/cta-button";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

type Props = {
  item: Content.CtaSectionSlice["primary"]["cards"][number];
  active: boolean;
  onMouseEnter: () => void;
};

const CtaCardDesktop: FC<Props> = ({ item, active, onMouseEnter }) => {
  return (
    <li
      className="relative overflow-hidden transition-all duration-300 ease-in-out w-full"
      style={{ height: active ? "428px" : "352px" }}
      onMouseEnter={onMouseEnter}
    >
      <PrismicNextImage
        field={item.card_image}
        className="w-full h-full object-cover rounded-[52px]"
        sizes="322px"
        quality={100}
        fallbackAlt=""
      />
      <div className="absolute inset-0 bg-black opacity-20 rounded-[52px]" />
      <div className="absolute inset-0 flex flex-col justify-end gap-6 px-6 py-13 text-white">
        <div className="font-baloo text-[1.75rem] leading-none font-bold text-center">
          <PrismicRichText field={item.card_title} />
        </div>
        {active && (
          <div className="font-nunito text-lg tracking-[0.48px] text-center">
            <PrismicRichText field={item.card_description} />
          </div>
        )}
        <div className="lg:max-w-3xs w-full mx-auto">
          <CTAButton href={item.cta_link} variant="orange">
            {item.cta_text}
          </CTAButton>
        </div>
      </div>
    </li>
  );
};

export default CtaCardDesktop;
