import GridContainer from "./container";
import CTAButton from "./cta-button";
import DesktopNav from "./desktop-nav";
import MobileMenu from "./mobile-menu";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

type HeaderProps = {
  data: Content.HeaderDocument["data"];
};

export default function Header({ data }: HeaderProps) {
  return (
    <header className="fixed top-7 inset-x-0 z-50 px-4 lg:px-16">
      <div className="rounded-full bg-white py-4 lg:py-0 px-7 lg:px-0">
        <GridContainer className="px-0 lg:px-16">
          <div className="col-start-1 col-end-13 flex items-center justify-between">
            <PrismicNextImage field={data.logo} fallbackAlt="" />
            <div className="hidden lg:block">
              <DesktopNav items={data.nav_menu} />
            </div>
            <div className="col-end-13 flex justify-end lg:hidden">
              <MobileMenu
                items={data.nav_menu}
                ctaText={data.cta ?? "Portal do Cliente"}
                ctaLink={data.cta_link}
              />
            </div>
            <div className="hidden lg:block max-w-46">
              <CTAButton href={data.cta_link} variant="orange">
                {data.cta ?? "Portal do Cliente"}
              </CTAButton>
            </div>
          </div>
        </GridContainer>
      </div>
    </header>
  );
}
