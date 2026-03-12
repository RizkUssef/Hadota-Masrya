"use client";
import CustomForm from "@/components/Forms/CustomForm";
import { useForgetPassword, useLogin, useVerifyAccount } from "@/hooks/useAuth";
import { CustomFormField } from "@/types/CustomFormField";
import { toastError, toastSuccess } from "@/utils/toast";
import React from "react";
import * as Yup from "yup";
import { cn } from "@/lib/utils";
import { verify } from "crypto";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import Link from "next/link";
import { ROUTES } from "@/routers/router";

const validationSchema = Yup.object({
  verifyCode: Yup.string().required("you must enter your verify code"),
});
const VerifyAccountPage = ({ className }: string) => {
  const fields: CustomFormField[] = [
    {
      name: "verifyCode",
      label: "Verify Code",
      placeholder: "enter your verify code",
      type: "text",
      as: "verfiy",
      defaultValue: "",
    },
  ];

  const initialValues = Object.fromEntries(
    fields.map((field) => [field.name, field.defaultValue ?? undefined]),
  );

  const constructBody = (resourceRequest: any) => resourceRequest;

  const createForm = useVerifyAccount();

  const { mutate: verifyAccountForm, isPending, error, isSuccess } = createForm;
  return (
    <div
      className={cn(
        "flex flex-col mx-auto my-auto justify-center items-center w-full h-screen",
        className,
      )}
    >
      <h1 className="font-family-en-logo text-headers mb-10 text-4xl">
        Verify Account
      </h1>
      <CustomForm
        className={"flex flex-col font-family-en"}
        fields={fields}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={verifyAccountForm}
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
        <Link className="text-links mb-3 font-bold self-end" href={ROUTES.resendVerifyCode}>Resend Verify Code</Link>
      </CustomForm>
    </div>
  );
};

export default VerifyAccountPage;
