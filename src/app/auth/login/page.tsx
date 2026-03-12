"use client";
import CustomForm from "@/components/Forms/CustomForm";
import { useLogin } from "@/hooks/useAuth";
import { CustomFormField } from "@/types/CustomFormField";
import { toastError, toastSuccess } from "@/utils/toast";
import React from "react";
import * as Yup from "yup";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ROUTES } from "@/routers/router";

const validationSchema = Yup.object({
  userName: Yup.string().required("you must enter your user name"),
  password: Yup.string().required("you must enter your password"),
});
const LoginPage = ({ className }: string) => {
  const fields: CustomFormField[] = [
    {
      name: "userName",
      label: "User Name",
      placeholder: "enter your user name",
      type: "text",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "enter your password",
      type: "password",
    },
  ];

  const initialValues = Object.fromEntries(
    fields.map((field) => [field.name, field.defaultValue ?? undefined]),
  );

  const constructBody = (resourceRequest: any) => resourceRequest;

  const createForm = useLogin();

  const { mutate: loginForm, isPending, error, isSuccess } = createForm;
  return (
    <div
      className={cn(
        "flex flex-col mx-auto my-auto justify-center items-center w-full h-screen",
        className,
      )}
    >
      <h1 className="font-family-en-logo text-headers mb-10 text-4xl">Login</h1>
      <CustomForm
        className={"flex flex-col font-family-en"}
        fields={fields}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={loginForm}
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
      >
        <div className="flex justify-between items-center">
          <Link
            className="text-links font-bold self-end"
            href={ROUTES.register}
          >
            Not a member SignUp?
          </Link>
          <Link
            className="text-links-danger font-bold self-end"
            href={ROUTES.forgetPassword}
          >
            Forget Password?
          </Link>
        </div>
      </CustomForm>
    </div>
  );
};

export default LoginPage;
