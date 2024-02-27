import { FieldContextKey, useFieldError, useIsFieldDirty, useIsFieldTouched, useIsFieldValid } from "vee-validate";
import { inject } from "vue";

export function useFormField() {
  const fieldContext = inject(FieldContextKey);

  const fieldState = {
    valid: useIsFieldValid(),
    isDirty: useIsFieldDirty(),
    isTouched: useIsFieldTouched(),
    error: useFieldError(),
  };

  if (!fieldContext) throw new Error("useFormField should be used within <FormField>");

  const { name } = fieldContext;
  const id = inject("FORM_ITEM_INJECTION_KEY");

  return {
    id,
    name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
}
