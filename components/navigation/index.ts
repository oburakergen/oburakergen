import { type VariantProps, cva } from "class-variance-authority";

export const navigationVariants = cva("flex items-center space-x-4", {
  variants: {
    variant: {
      left: "justify-start",
      right: "justify-center",
    },
    display: {
      hidden: "hidden",
      block: "block",
    },
  },
  defaultVariants: {
    variant: "left",
    display: "block",
  },
});

export type NavigationVariants = VariantProps<typeof navigationVariants>;
