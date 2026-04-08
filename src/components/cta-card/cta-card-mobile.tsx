import { FC } from "react";

import CTAButton from "@/components/cta-button";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

type Props = {
  item: Content.CtaSectionSlice["primary"]["cards"][number];
};

const CtaCardMobile: FC<Props> = ({ item }) => {
  return (
    <li className="relative overflow-hidden w-full h-[428px]">
      <PrismicNextImage
        field={item.card_image}
        className="w-full h-full object-cover rounded-[52px]"
        sizes="322px"
        quality={100}
        fallbackAlt=""
      />
      <div className="absolute inset-0 bg-black opacity-40 rounded-[52px]" />
      <div className="absolute inset-0 flex flex-col justify-end gap-5 px-6 py-13 text-white">
        <div className="font-baloo text-[2rem] leading-none font-bold text-center">
          <PrismicRichText field={item.card_title} />
        </div>
        <div className="font-nunito text-lg font-semibold tracking-[0.54px] text-center">
          <PrismicRichText field={item.card_description} />
        </div>
        <div className="w-full sm:max-w-3xs mx-auto">
          <CTAButton href={item.cta_link} variant="orange">
            {item.cta_text}
          </CTAButton>
        </div>
      </div>
    </li>
  );
};

export default CtaCardMobile;
