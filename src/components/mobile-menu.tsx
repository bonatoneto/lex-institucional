"use client";

import Image from "next/image";
import { useState } from "react";

import CTAButton from "./cta-button";

import useActiveSection from "@/hooks/use-active-section";
import { Content } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";

type MobileMenuProps = {
  items: Content.HeaderDocument["data"]["nav_menu"];
  ctaText?: string | null;
  ctaLink: Content.HeaderDocument["data"]["cta_link"];
};

export default function MobileMenu({
  items,
  ctaText,
  ctaLink,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const sectionIds = items
    .map((item) => item.menu_anchor?.replace("#", ""))
    .filter((id): id is string => !!id);
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-7"
      >
        <Image src="/assets/list.svg" alt="Menu" width={32} height={32} />
      </button>

      <div
        className={`absolute left-0 right-0 top-full bg-white shadow-lg rounded-xl transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"} mx-4 mt-3`}
      >
        <nav>
          <ul className="flex flex-col">
            {items.map((item, index) => {
              const isActive = activeId === item.menu_anchor?.replace("#", "");
              return (
                <li key={item.menu_anchor ?? index}>
                  <a
                    href={item.menu_anchor ?? "#"}
                    onClick={() => setOpen(false)}
                    style={
                      isActive
                        ? {
                            background:
                              "linear-gradient(90deg, rgba(40, 73, 152, 0.12) 0%, rgba(124, 81, 161, 0.12) 50%, rgba(218, 103, 82, 0.12) 100%)",
                          }
                        : undefined
                    }
                    className={`block text-center font-nunito text-sm text-dark py-4 transition-all duration-300 ${isActive ? "font-semibold" : ""}`}
                  >
                    <PrismicText field={item.menu_item} />
                  </a>
                </li>
              );
            })}
            <li className="px-12 pb-6">
              <CTAButton variant="orange" href={ctaLink}>
                {ctaText ?? "Portal do Cliente"}
              </CTAButton>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
