import type { StringSchema, AnyObject, NumberSchema } from "yup";

export const formValidate = async(form: FormValidate) => {
  const isValid = form.map(async(field) => {
    const { schema, value } = field;
    console.log('valid', value)
    try {
      await schema.validate(value);
      return true;
    } catch (error: any) {
      const label = error.params.label as string;
      const message = error.errors[0] as string ;
      return { label, message };
    }
  })
  const result = await Promise.all(isValid);
  const formValid = result.every((value) => value === true);
  if (formValid) return { isFormValid: true, errors: [] };
  else {
    const errors = result.filter((value) => value !== true);
    return { isFormValid: false, errors };
  }
}

export type FormValidate = ({
  schema: StringSchema<string, AnyObject, undefined, "">;
  value: FormDataEntryValue | null;
} | {
  schema: NumberSchema<number, AnyObject, undefined, "">;
  value: FormDataEntryValue | number | null;
})[]