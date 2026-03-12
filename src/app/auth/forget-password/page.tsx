'use client'
import CustomForm from "@/components/Forms/CustomForm";
import { useForgetPassword, useLogin } from "@/hooks/useAuth";
import { CustomFormField } from "@/types/CustomFormField";
import { toastError, toastSuccess } from "@/utils/toast";
import React from "react";
import * as Yup from "yup";
import { cn } from "@/lib/utils";


const validationSchema = Yup.object({
  userName: Yup.string().required("you must enter your user name"),
});
const ForgetPasswordPage = ({ className }: string) => {
  const fields: CustomFormField[] = [
    {
      name: "userName",
      label: "User Name",
      placeholder: "enter your user name",
      type: "text",
    },
  ];

  const initialValues = Object.fromEntries(
    fields.map((field) => [field.name, field.defaultValue ?? undefined]),
  );

  const constructBody = (resourceRequest: any) => resourceRequest;

  const createForm = useForgetPassword();

  const { mutate: forgetPasswordForm, isPending, error, isSuccess } = createForm;
  return (
    <div className={cn("flex flex-col mx-auto my-auto justify-center items-center w-full h-screen", className)}>
      <h1 className="font-family-en-logo text-headers mb-10 text-4xl">Forget Password</h1>
      <CustomForm
        className={'flex flex-col font-family-en'}
        fields={fields}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={forgetPasswordForm}
        constructBody={constructBody}
        isPending={isPending}
        onSuccess={() => {
          toastSuccess("تم تسجيل الدخول بنجاح");
          // onSuccess?.();
          // setOpen(false);
        }}
        onError={() => {
          toastError(error?.response?.data.message);
        }}
        onSettled={() => {}}
      />
    </div>
  );
};

export default ForgetPasswordPage;
