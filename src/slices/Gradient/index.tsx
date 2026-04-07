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
      id="ecossistema"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={
        slice.variation === "secondary"
          ? "relative pt-52 pb-12"
          : "relative pt-52 pb-40"
      }
    >
      <GridContainer>
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
