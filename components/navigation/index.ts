import { type VariantProps, cva } from "class-variance-authority";

export const navigationVariants = cva("flex h-full items-center space-x-4", {
    variants: {
        variant: {
            left: "justify-start",
            right: "justify-center",
        },
    },
    defaultVariants: {
        variant: "left",
    },
});

export type NavigationVariants = VariantProps<typeof navigationVariants>;
