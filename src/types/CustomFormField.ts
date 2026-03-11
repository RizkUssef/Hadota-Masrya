import type { FormikErrors } from "formik";
import { ComboboxOption } from "./ComboboxOption";

export interface CustomFormField {
  name: string;
  label: string;
  type?: string;
  defaultValue?: any;
  placeholder?: string;
  as?: string | React.ElementType;
  options?: ComboboxOption[];
  className?: string;
  handleCustomChange?: (
    value: any,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined,
    ) => Promise<void | FormikErrors<any>>,
  ) => void;
}
