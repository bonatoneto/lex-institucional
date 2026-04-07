"use client";

import useActiveSection from "@/hooks/use-active-section";
import { asText, Content } from "@prismicio/client";

type DesktopNavProps = {
  items: Content.HeaderDocument["data"]["nav_menu"];
};

export default function DesktopNav({ items }: DesktopNavProps) {
  const sectionIds = items
    .map((item) => item.menu_anchor?.replace("#", ""))
    .filter((id): id is string => !!id);
  const activeId = useActiveSection(sectionIds);

  return (
    <nav>
      <ul className="flex justify-end gap-8 font-nunito font-sm text-nowrap text-dark">
        {items.map((item) => {
          const anchor = item.menu_anchor ?? "#";
          const label = asText(item.menu_item);
          const isActive = activeId === item.menu_anchor?.replace("#", "");

          return (
            <li key={anchor}>
              <a href={anchor} className="relative block py-8 text-dark">
                <span className={isActive ? "font-bold" : ""}>{label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-[4px] bg-[#7c51a1] transition-all duration-300 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
