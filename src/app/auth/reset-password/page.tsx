"use client";
import CustomForm from "@/components/Forms/CustomForm";
import { useResetPassword } from "@/hooks/useAuth";
import { CustomFormField } from "@/types/CustomFormField";
import { toastError, toastSuccess } from "@/utils/toast";
import React from "react";
import * as Yup from "yup";
import { cn } from "@/lib/utils";

const validationSchema = Yup.object({
  currentPassword: Yup.string().required("you must enter your password"),
  password: Yup.string().required("you must enter your password"),
  passwordConfirmation: Yup.string().required("you must confirm your password"),
});
const ResetPasswordPage = ({ className }: string) => {
  const fields: CustomFormField[] = [
    {
      name: "currentPassword",
      label: "Current Password",
      placeholder: "enter your current password",
      type: "password",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "enter your password",
      type: "password",
    },
    {
      name: "passwordConfirmation",
      label: "Confirm Password",
      placeholder: "confirm your password",
      type: "password",
    },
  ];

  const initialValues = Object.fromEntries(
    fields.map((field) => [field.name, field.defaultValue ?? undefined]),
  );

  const constructBody = (resourceRequest: any) => resourceRequest;

  const createForm = useResetPassword();

  const { mutate: resetPasswordForm, isPending, error, isSuccess } = createForm;
  return (
    <div
      className={cn(
        "flex flex-col mx-auto my-auto justify-center items-center w-full h-screen",
        className,
      )}
    >
      <h1 className="font-family-en-logo text-headers mb-10 text-4xl">Reset Password</h1>
      <CustomForm
        className={"flex flex-col font-family-en"}
        fields={fields}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={resetPasswordForm}
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

export default ResetPasswordPage;
