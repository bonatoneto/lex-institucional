import { FC } from "react";

import AnimateOnView from "@/components/animate-on-view";
import GridContainer from "@/components/container";
import Divider from "@/components/divider";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type QrCodeProps = SliceComponentProps<Content.QrCodeSlice>;

const QrCode: FC<QrCodeProps> = ({ slice }) => {
  return (
    <section
      id={slice.slice_type}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full h-full py-13 lg:py-40"
    >
      <PrismicNextImage
        className="absolute inset-0 w-full h-full"
        field={slice.primary.background_image}
        fallbackAlt=""
      />
      <GridContainer>
        <div className="hidden lg:block relative col-start-1 col-end-4 h-full">
          <div className="flex flex-col h-full justify-center gap-10 text-dark">
            <AnimateOnView delay={0}>
              <div className="font-baloo font-semibold text-[4rem] leading-none">
                <PrismicRichText field={slice.primary.title} />
              </div>
            </AnimateOnView>
            <AnimateOnView delay={0.1}>
              <Divider />
            </AnimateOnView>
            <AnimateOnView delay={0.2}>
              <div className="font-nunito text-lg leading-none">
                <PrismicRichText field={slice.primary.description} />
              </div>
            </AnimateOnView>
          </div>
        </div>
        <div className="relative col-start-1 col-end-13 lg:col-start-6 xl:col-start-8 xl:col-end-13">
          <ul className="flex flex-col gap-8 lg:gap-12">
            {slice.primary.qr_codes.map((item, index) => (
              <AnimateOnView key={index} delay={index * 0.15}>
                <li className="flex lg:justify-between items-center font-nunito text-lg leading-none bg-white p-7 rounded-[40px] w-full justify-center">
                  <div className="flex flex-col gap-6">
                    <div className="font-baloo font-semibold text-2xl text-center lg:text-left">
                      <PrismicRichText field={item.title} />
                    </div>
                    <div className="flex items-center justify-between w-full gap-3">
                      <PrismicNextImage
                        className="w-full"
                        field={item.playstore}
                        fallbackAlt=""
                      />
                      <PrismicNextImage
                        className="w-full"
                        field={item.app_store}
                        fallbackAlt=""
                      />
                    </div>
                  </div>
                  <PrismicNextImage
                    className="hidden lg:block "
                    field={item.qr_code}
                    fallbackAlt=""
                  />
                </li>
              </AnimateOnView>
            ))}
          </ul>
        </div>
        <div className="lg:hidden relative col-start-1 col-end-13 mt-8">
          <div className="flex flex-col item-center w-full gap-5 text-dark text-center">
            <AnimateOnView delay={0}>
              <div className="font-baloo font-semibold text-4xl leading-none">
                <PrismicRichText field={slice.primary.title} />
              </div>
            </AnimateOnView>
            <AnimateOnView delay={0.1} className="flex justify-center w-full">
              <Divider />
            </AnimateOnView>
            <AnimateOnView delay={0.2}>
              <div className="font-nunito text-lg leading-none">
                <PrismicRichText field={slice.primary.description} />
              </div>
            </AnimateOnView>
          </div>
        </div>
      </GridContainer>
    </section>
  );
};

export default QrCode;
