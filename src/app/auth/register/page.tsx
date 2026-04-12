"use client";
import CustomForm from "@/components/Forms/CustomForm";
import { useRegister } from "@/hooks/useAuth";
import { CustomFormField } from "@/types/CustomFormField";
import React from "react";
import * as Yup from "yup";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ROUTES } from "@/routers/router";

const validationSchema = Yup.object({
  username: Yup.string().required("you must enter your user name"),
  email: Yup.string()
    .email("you must enter a valid email")
    .required("you must enter your email"),
  password: Yup.string().required("you must enter your password"),
  passwordConfirmation: Yup.string().required("you must confirm your password"),
});
const RegisterPage = ({ className }: string) => {
  const fields: CustomFormField[] = [
    {
      name: "username",
      label: "User Name",
      placeholder: "enter your user name",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "enter your email",
      type: "email",
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

  const createForm = useRegister();

  const { mutate: registerForm, isPending, error, isSuccess } = createForm;
  return (
    <div
      className={cn(
        "flex flex-col mx-auto my-auto justify-center items-center w-full h-screen",
        className,
      )}
    >
      <h1 className="font-family-en-logo text-headers mb-10 text-4xl">
        Register
      </h1>
      <CustomForm
        className={"flex flex-col font-family-en"}
        fields={fields}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={registerForm}
        constructBody={constructBody}
        isPending={isPending}
      >
        <Link
          className="text-links font-bold self-end"
          href={ROUTES.login}
          prefetch={true}
        >
          Already have an account SignIn?
        </Link>{" "}
      </CustomForm>
    </div>
  );
};

export default RegisterPage;
