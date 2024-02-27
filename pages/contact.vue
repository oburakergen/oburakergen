<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { Form, Field as FormField, useForm } from "vee-validate";
import { FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const { t } = useI18n();
const formSchema = toTypedSchema(
  z.object({
    name: z
      .string({
        required_error: t("form.name_required"),
      })
      .min(2, {
        message: t("form.name_too_short"),
      })
      .max(150, {
        message: t("form.name_too_long"),
      }),
    email: z
      .string({
        required_error: t("form.email_required"),
      })
      .email({
        message: t("form.email_invalid"),
      })
      .max(150, {
        message: t("form.email_too_long"),
      }),
    message: z
      .string({
        required_error: t("form.message_required"),
      })
      .min(10, {
        message: t("form.message_too_short"),
      })
      .max(2500, {
        message: t("form.message_too_long"),
      }),
  }),
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values: any) => {});
</script>

<template>
  <div class="relative w-full h-auto flex flex-col gap-8 py-16 font-['Montserrat'] text-gray-500">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="font-bold text-3xl text-primary subpixel-antialiased">About Me</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us
        know.
      </p>
      <form class="space-y-8" @submit.prevent="onSubmit">
        <FormField v-slot="{ componentField }" name="name" class="my-4">
          <FormItem>
            <FormLabel class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Name" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="email" class="my-4">
          <FormItem>
            <FormLabel class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="Email" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="message" class="my-4">
          <FormItem>
            <FormLabel class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</FormLabel>
            <FormControl>
              <Textarea placeholder="Text Me" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <Button type="submit"> Send message </Button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
