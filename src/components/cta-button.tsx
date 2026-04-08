import { cn } from "@/lib/utils";
import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { tv, VariantProps } from "tailwind-variants";

const ctaButton = tv({
  base: "inline-flex items-center w-full justify-center rounded-full px-8 py-3 font-nunito font-semibold text-sm transition-opacity hover:opacity-90 text-nowrap",
  variants: {
    variant: {
      white: "bg-white text-dark",
      orange: "bg-orange-lex text-white",
      gradient: "bg-gradient-cta text-white",
    },
  },
  defaultVariants: {
    variant: "gradient",
  },
});

type CTAButtonProps = VariantProps<typeof ctaButton> & {
  children: React.ReactNode;
  href: LinkField;
  className?: string;
};

export default function CTAButton({
  children,
  href,
  variant,
  className,
  ...props
}: CTAButtonProps) {
  return (
    <PrismicNextLink
      field={href}
      className={cn(ctaButton({ variant }), className)}
      {...props}
    >
      {children}
    </PrismicNextLink>
  );
}
