import { FC } from "react";

import AnimateOnView from "@/components/animate-on-view";
import GridContainer from "@/components/container";
import CTAButton from "@/components/cta-button";

import { asLink, Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type VideoProps = SliceComponentProps<Content.VideoSlice>;

const Video: FC<VideoProps> = ({ slice }) => {
  const videoUrl = asLink(slice.primary.video);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full overflow-hidden min-h-dvh rounded-b-[52px]"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoUrl ?? undefined}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      />
      <div className="absolute inset-0 bg-black opacity-25" />
      <GridContainer>
        <div className="col-start-2 col-end-12">
          <div className="relative flex flex-col gap-14 justify-center items-center min-h-dvh w-full text-white px-6 z-30">
            <div className="flex flex-col items-center gap-5">
              <AnimateOnView delay={0}>
                <div className="font-baloo text-[4rem] leading-none font-semibold text-center">
                  <PrismicRichText field={slice.primary.title} />
                </div>
              </AnimateOnView>
              <AnimateOnView delay={0.15}>
                <div className="font-nunito text-2xl font-medium text-center">
                  <PrismicRichText field={slice.primary.description} />
                </div>
              </AnimateOnView>
            </div>
            <AnimateOnView delay={0.3}>
              <div className="max-w-3xs">
                <CTAButton
                  href={asLink(slice.primary.cta_link) ?? ""}
                  variant="orange"
                >
                  {slice.primary.cta_text}
                </CTAButton>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </GridContainer>
    </section>
  );
};

export default Video;
