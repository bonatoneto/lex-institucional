import { FC } from "react";

import AnimateOnView from "@/components/animate-on-view";
import Carousel from "@/components/carousel/carousel";
import CarouselMobile from "@/components/carousel/carousel-mobile";
import GridContainer from "@/components/container";
import Divider from "@/components/divider";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type CarrosselProps = SliceComponentProps<Content.CarrosselSlice>;

const Carrossel: FC<CarrosselProps> = ({ slice }) => {
  return (
    <section
      id={slice.slice_type}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-13 lg:py-52"
    >
      {/* Mobile */}
      <GridContainer className="lg:hidden">
        <div className="col-start-1 col-end-13">
          <div className="flex flex-col gap-8 sm:mt-12">
            <AnimateOnView>
              <div className="font-baloo text-3xl font-semibold text-center leading-[100%] text-dark">
                <PrismicRichText field={slice.primary.title} />
              </div>
            </AnimateOnView>
            <AnimateOnView delay={0.1} className="flex w-full justify-center">
              <Divider variant="gradient" />
            </AnimateOnView>
          </div>
        </div>
      </GridContainer>
      <div className="overflow-x-clip mt-12 lg:hidden">
        <CarouselMobile items={slice.primary.carousel} />
      </div>

      {/* Desktop */}
      <GridContainer className="items-center hidden lg:grid">
        <div className="flex flex-col gap-8 col-start-1 col-end-6 text-dark">
          <AnimateOnView>
            <div className="font-baloo text-5xl leading-none font-semibold">
              <PrismicRichText field={slice.primary.title} />
            </div>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <Divider
              variant="gradient"
              className="w-full flex justify-center"
            />
          </AnimateOnView>
        </div>
        <div className="col-start-7 col-end-13 overflow-visible -mt-8 -mr-32">
          <Carousel items={slice.primary.carousel} />
        </div>
      </GridContainer>
    </section>
  );
};

export default Carrossel;
