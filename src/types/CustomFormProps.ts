import { CustomFormField } from "./CustomFormField";

export interface CustomFormProps<ResourceRequest> {
  children?: React.ReactNode;
  fields: CustomFormField[];
  initialValues: any;
  validationSchema: any;
  constructBody: (resourceRequest: ResourceRequest) => any;
  onSubmit: (body: any, options?: any) => void;
  isPending: boolean;
  onSuccess: () => void;
  onError: () => void;
  onSettled: () => void;
  className?: string;
  submitHide?: boolean;
}