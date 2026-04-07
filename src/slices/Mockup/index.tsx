import { FC } from "react";

import AnimateOnView from "@/components/animate-on-view";
import GridContainer from "@/components/container";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type MockupProps = SliceComponentProps<Content.MockupSlice>;

const Mockup: FC<MockupProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative py-32 overflow-visible"
    >
      <PrismicNextImage
        className="absolute inset-0 h-full w-full object-cover"
        field={slice.primary.background_image}
        fallbackAlt=""
      />
      <GridContainer className="items-center">
        <div className="col-start-1 col-end-5 relative z-10 flex flex-col gap-8 h-full justify-end">
          <AnimateOnView delay={0}>
            <div className="leading-none font-baloo font-semibold text-[4rem] text-dark">
              <PrismicRichText field={slice.primary.title} />
            </div>
          </AnimateOnView>
          <AnimateOnView delay={0.15}>
            <div className="relative -left-32 w-[160%]">
              <PrismicNextImage
                field={slice.primary.gradient_image}
                className="block w-full object-cover min-h-52 max-h-52"
                fallbackAlt=""
              />
              <div className="absolute inset-0 left-32 flex items-center font-nunito font-bold text-lg text-white pr-24">
                <PrismicRichText field={slice.primary.description} />
              </div>
            </div>
          </AnimateOnView>
        </div>
        <AnimateOnView
          delay={0.3}
          className="col-start-5 col-end-9 relative z-20 flex justify-center"
        >
          <PrismicNextImage
            field={slice.primary.image}
            className="w-full h-auto max-h-[560px] object-contain"
            fallbackAlt=""
          />
        </AnimateOnView>
        <AnimateOnView
          delay={0.45}
          className="col-start-9 col-end-13 relative z-10 font-nunito text-lg text-dark flex flex-col gap-8"
        >
          <PrismicRichText field={slice.primary.text} />
        </AnimateOnView>
      </GridContainer>
    </section>
  );
};

export default Mockup;
