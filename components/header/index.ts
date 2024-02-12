import { type VariantProps, cva } from "class-variance-authority";

export const headerVariants = cva("flex items-center space-x-4", {
    variants: {
        align: {
            start: "justify-start",
            center: "justify-center",
            end: "justify-end",
        },
    },
    defaultVariants: {
        align: "start",
    },
});

export type NavigationVariants = VariantProps<typeof headerVariants>;
