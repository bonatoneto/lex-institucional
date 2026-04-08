import { FC } from "react";

import MockupDesktop from "@/components/mockup/mockup-desktop";
import MockupMobile from "@/components/mockup/mockup-mobile";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

export type MockupProps = SliceComponentProps<Content.MockupSlice>;

const Mockup: FC<MockupProps> = ({ slice }) => {
  return (
    <section
      id={slice.slice_type}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative py-13 lg:py-32 overflow-visible"
    >
      <PrismicNextImage
        className="absolute inset-0 h-full w-full object-cover"
        field={slice.primary.background_image}
        fallbackAlt=""
      />
      <MockupMobile slice={slice} />
      <MockupDesktop slice={slice} />
    </section>
  );
};

export default Mockup;
