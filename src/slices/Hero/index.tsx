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
      id={slice.slice_type}
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
          className="absolute inset-0 h-full lg:min-h-dvh object-cover rotate-90 lg:rotate-0 min-w-full overflow-visible z-20 bottom-0 top-0"
          fallbackAlt=""
          preload
        />

        <PrismicNextImage
          field={slice.primary.image_principal}
          // className="absolute h-full md:h-dvh w-full z-30 inset-0 object-bottom object-contain md:object-right right-0 top-0 sm:scale-85 md:scale-100 origin-bottom"
          className="absolute h-full lg:h-dvh bottom-0 z-30 object-bottom object-contain lg:object-right inset-x-0 mx-auto lg:mx-0 lg:right-0 lg:left-auto max-w-96 max-h-[484px] lg:max-w-full lg:max-h-full lg:scale-100 origin-bottom"
          fallbackAlt=""
          preload
        />
      </div>
      {/* Mobile text */}
      <div className="lg:hidden relative z-40 flex flex-col justify-start gap-8 px-6 pt-32 pb-8 text-dark text-center min-h-dvh">
        <AnimateOnView delay={0}>
          <div className="font-baloo text-4xl leading-none font-semibold">
            <PrismicRichText field={slice.primary.title} />
          </div>
        </AnimateOnView>
        <AnimateOnView delay={0.15} className="flex w-full justify-center">
          <Divider variant="gradient" />
        </AnimateOnView>
        <AnimateOnView delay={0.3}>
          <div className="font-nunito text-xl">
            <PrismicRichText field={slice.primary.subtitle} />
          </div>
        </AnimateOnView>
      </div>
      <GridContainer className="hidden lg:grid">
        <div className="relative z-40 md:flex flex-col justify-center gap-13 col-start-1 min-h-dvh col-end-13 lg:col-end-6 text-dark text-center lg:text-left">
          <AnimateOnView delay={0}>
            <div className="font-baloo text-[4rem] leading-none font-semibold">
              <PrismicRichText field={slice.primary.title} />
            </div>
          </AnimateOnView>
          <AnimateOnView
            delay={0.15}
            className="flex w-full justify-center lg:justify-start"
          >
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
