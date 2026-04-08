import GridContainer from "../container";
import Divider from "../divider";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

type Props = {
  slice: Content.MockupSlice;
};

export default function MockupMobile({ slice }: Props) {
  return (
    <GridContainer className="lg:hidden">
      <div className="relative col-start-1 col-end-13">
        <div className="flex flex-col w-full justify-center gap-8 items-center text-center text-dark">
          <div className="font-baloo leading-none font-semibold text-4xl text-center">
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className="flex w-full justify-center">
            <Divider />
          </div>
          <div className="font-nunito text-lg flex flex-col items-center gap-4 tracking-[0.54px]">
            <PrismicRichText field={slice.primary.text} />
          </div>
          <div className="relative rounded-[52px] h-[580px] sm:h-[540px] w-full flex items-end overflow-hidden">
            <div
              className="flex items-start overflow-visible top-0 w-full max-h-[480px] min-h-[480px] bg-cover bg-center bg-no-repeat rounded-[52px]"
              style={{
                backgroundImage: `url('${slice.primary.gradient_image.url}')`,
              }}
            >
              <PrismicNextImage
                field={slice.primary.image}
                className="w-1/2 absolute top-0 left-1/2 -translate-x-1/2 max-w-[203px] max-h-[400px]"
              />
              <div className="absolute bottom-13 px-5 font-nunito text-white font-bold text-lg tracking-[0.54px]">
                <PrismicRichText field={slice.primary.description} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GridContainer>
  );
}
