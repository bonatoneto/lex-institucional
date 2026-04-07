import { FC } from "react";

import AnimateOnView from "@/components/animate-on-view";
import GridContainer from "@/components/container";
import Divider from "@/components/divider";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      id="inicio"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-dvh w-full overflow-hidden"
    >
      <div className="absolute inset-0 min-h-dvh w-full">
        <PrismicNextImage
          className="min-h-dvh"
          field={slice.primary.background_image}
          fallbackAlt=""
          preload
        />
        <PrismicNextImage
          field={slice.primary.addon_image}
          className="absolute inset-0 h-full md:min-h-dvh object-cover rotate-90 md:rotate-0 w-ful overflow-visible z-20 bottom-0 top-0"
          fallbackAlt=""
          preload
        />

        <PrismicNextImage
          field={slice.primary.image_principal}
          className="absolute h-full md:h-dvh w-full z-30 inset-0 object-bottom object-contain md:object-right right-0 top-0 scale-75 sm:scale-85 md:scale-100 origin-bottom"
          fallbackAlt=""
          preload
        />
      </div>
      {/* Mobile text */}
      <div className="md:hidden relative z-40 flex flex-col justify-start gap-8 px-6 pt-32 pb-8 text-dark min-h-dvh">
        <AnimateOnView delay={0}>
          <div className="font-baloo text-[3rem] leading-none font-semibold">
            <PrismicRichText field={slice.primary.title} />
          </div>
        </AnimateOnView>
        <AnimateOnView delay={0.15}>
          <Divider variant="gradient" />
        </AnimateOnView>
        <AnimateOnView delay={0.3}>
          <div className="font-nunito text-xl">
            <PrismicRichText field={slice.primary.subtitle} />
          </div>
        </AnimateOnView>
      </div>
      <GridContainer>
        <div className="hidden relative z-40 md:flex flex-col justify-center gap-13 col-start-1 min-h-dvh col-end-13 lg:col-end-6 text-dark text-center lg:text-left">
          <AnimateOnView delay={0}>
            <div className="font-baloo text-[4rem] leading-none font-semibold">
              <PrismicRichText field={slice.primary.title} />
            </div>
          </AnimateOnView>
          <AnimateOnView delay={0.15} className="flex w-full justify-center">
            <Divider variant="gradient" />
          </AnimateOnView>
          <AnimateOnView delay={0.3}>
            <div className="font-nunito text-2xl">
              <PrismicRichText field={slice.primary.subtitle} />
            </div>
          </AnimateOnView>
        </div>
      </GridContainer>
    </section>
  );
};

export default Hero;
