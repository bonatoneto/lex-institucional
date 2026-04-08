import { FC } from "react";

import AnimateOnView from "@/components/animate-on-view";
import GridContainer from "@/components/container";
import Divider from "@/components/divider";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type EcossistemaProps = SliceComponentProps<Content.EcossistemaSlice>;

const Ecossistema: FC<EcossistemaProps> = ({ slice }) => {
  return (
    <section
      id={slice.slice_type}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={
        slice.variation === "secondary"
          ? "relative py-13 lg:pt-52 lg:pb-12"
          : "relative py-13 lg:pt-52 lg:pb-40"
      }
    >
      {/* Mobile */}
      <GridContainer className="lg:hidden">
        <AnimateOnView delay={0} className="col-start-1 col-end-13">
          <div className="text-dark flex flex-col items-center gap-8 text-center">
            <div className="leading-none font-baloo font-semibold text-4xl mx-4">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <Divider variant="gradient" />
            <div className="font-nunito text-lg">
              <PrismicRichText field={slice.primary.text} />
            </div>
          </div>
        </AnimateOnView>
        <AnimateOnView
          delay={0.1}
          className="col-start-1 col-end-13 overflow-hidden"
        >
          <div
            className={`${slice.variation !== "secondary" ? "flex w-full rounded-b-[52px] h-[420px] sm:h-[480px] items-end overflow-hidden" : "mt-8"}`}
          >
            <div
              style={{
                backgroundImage: `url(${slice.primary.background_image.url})`,
              }}
              className="relative rounded-[52px] w-full h-[328px] object-cover bg-no-repeat bg-cover bg-center"
            >
              <PrismicNextImage
                field={slice.primary.image}
                className={`${slice.variation === "secondary" ? "object-contain p-6 object-center h-full mx-auto" : "absolute bottom-0 right-0 object-cover object-top sm:object-center h-[110%] -left-10 sm:mx-auto max-h-none overflow-visible -rotate-12 sm:rotate-0"}`}
                quality={100}
              />
            </div>
          </div>
        </AnimateOnView>
      </GridContainer>
      {/* Desktop */}
      <GridContainer className="hidden lg:grid">
        <AnimateOnView delay={0} className="col-start-1 col-end-7">
          <div className="relative -left-32">
            <PrismicNextImage
              field={slice.primary.background_image}
              className="block"
              fallbackAlt=""
            />
            <PrismicNextImage
              field={slice.primary.image}
              fallbackAlt=""
              className={
                slice.variation === "secondary"
                  ? "absolute right-32 top-1/2 -translate-y-1/2"
                  : "absolute bottom-0 left-0 right-0 h-auto object-contain object-left"
              }
            />
          </div>
        </AnimateOnView>
        <div className="col-start-7 col-end-13 flex flex-col justify-center gap-8 text-dark">
          <AnimateOnView delay={0.1}>
            <div className="leading-none font-baloo font-semibold text-[4rem]">
              <PrismicRichText field={slice.primary.title} />
            </div>
          </AnimateOnView>
          <AnimateOnView delay={0.2}>
            <Divider variant="gradient" />
          </AnimateOnView>
          <AnimateOnView delay={0.3}>
            <div>
              <PrismicRichText field={slice.primary.text} />
            </div>
          </AnimateOnView>
        </div>
      </GridContainer>
    </section>
  );
};

export default Ecossistema;
