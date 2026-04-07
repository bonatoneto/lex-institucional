import GridContainer from "./container";
import CTAButton from "./cta-button";
import DesktopNav from "./desktop-nav";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

type HeaderProps = {
  data: Content.HeaderDocument["data"];
};

export default function Header({ data }: HeaderProps) {
  return (
    <header className="fixed top-7 inset-x-0 z-50 px-4 lg:px-16">
      <div className="rounded-full bg-white py-4 px-7">
        <GridContainer className="px-0 lg:px-16">
          <div className="col-start-1 col-end-13 flex items-center justify-between">
            <PrismicNextImage field={data.logo} fallbackAlt="" />
            <div className="hidden lg:block">
              <DesktopNav items={data.nav_menu} />
            </div>
            <div className="hidden lg:block max-w-46">
              <CTAButton href="#" variant="orange">
                Portal do Cliente
              </CTAButton>
            </div>
          </div>
        </GridContainer>
      </div>
    </header>
  );
}
