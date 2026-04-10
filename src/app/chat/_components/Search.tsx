"use client";
import CustomForm from "@/components/Forms/CustomForm";
import { Spinner } from "@/components/ui/spinner";
import { useLogin } from "@/hooks/useAuth";
import { CustomFormField } from "@/types/CustomFormField";
import { toastError, toastSuccess } from "@/utils/toast";
import React from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  userName: Yup.string(),
});
const Search = () => {
  const fields: CustomFormField[] = [
    {
      name: "userName",
      label: "",
      placeholder: "Search user name",
      type: "text",
    },
  ];
  const initialValues = Object.fromEntries(
    fields.map((field) => [field.name, field.defaultValue ?? undefined]),
  );

  const constructBody = (resourceRequest: any) => resourceRequest;
  const createForm = useLogin();

  const { mutate: loginForm, isPending, error, isSuccess } = createForm;
  return (
    // <div className="bg-cards-bg flex flex-col w-90 justify-start gap-3 rounded-2xl h-all-components-height mt-20 pb-5">
    <CustomForm
      className={"flex w-full px-3 flex-col font-family-en pb-0"}
      fields={fields}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={loginForm}
      constructBody={constructBody}
      isPending={isPending}
      submitHide={true}
      onSuccess={() => {
        toastSuccess("تم تسجيل الدخول بنجاح");
      }}
      onError={() => {
        toastError(error?.response?.data.message);
      }}
      onSettled={() => {}}
    >

    </CustomForm>
    // </div>
  );
};

export default Search;
