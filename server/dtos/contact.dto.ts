// create dto for contact and use zod to validate the data

import { z } from "zod";

export const ContactCreateDto = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(3),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
  message: z
    .string({
      required_error: "Message is required",
    })
    .min(10, {
      message: "Message is too short",
    }),
});

export type ContactCreateDtoType = z.infer<typeof ContactCreateDto>;
