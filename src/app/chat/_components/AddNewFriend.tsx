"use client";
import CustomForm from "@/components/Forms/CustomForm";
import { useLogin } from "@/hooks/useAuth";
import { CustomFormField } from "@/types/CustomFormField";
import { toastError, toastSuccess } from "@/utils/toast";
import React from "react";
import { MdCancel } from "react-icons/md";
import * as Yup from "yup";
import UserItem from "./UserItem";

const validationSchema = Yup.object({
  userName: Yup.string().required("you must enter your user name"),
});
const AddNewFriend = () => {
  const fields: CustomFormField[] = [
    {
      name: "userName",
      label: "",
      placeholder: "enter your user name",
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
    <div className="bg-cards-bg flex flex-col w-90 justify-start gap-3 rounded-2xl h-all-components-height mt-20 pb-5">
      <div className="flex justify-between items-center pt-3 px-3">
        <h1 className="text-headers text-2xl font-bold">Add New Friend</h1>
        <MdCancel className="icons size-6" />
      </div>
      <CustomForm
        className={"flex w-full px-3 flex-col font-family-en pt-0 pb-0"}
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
      />
      <UserItem />
    </div>
  );
};

export default AddNewFriend;
