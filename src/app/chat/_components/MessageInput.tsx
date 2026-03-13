"use client";
import { useRegister } from "@/hooks/useAuth";
import { useSendMessage } from "@/hooks/useChat";
import { toastSuccess } from "@/utils/toast";
import { Field, Form, Formik } from "formik";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import * as Yup from "yup";

const validationSchema = Yup.object({
  message: Yup.string().required("you must enter your full name"),
});
const initialValues = {
  message: "",
};
const MessageInput = () => {
  const createForm = useSendMessage();

  const { mutate: sendMessage, isPending, error, isSuccess } = createForm;
  const onSuccess = () => {
    toastSuccess("تمت الإضافة بنجاح");
  };
  const onError = () => {
    toastSuccess("حدث خطأ ما");
  };
  const onSettled = () => {};
  const handleSubmit = (values: any) => {
    const resourceRequest: ResourceRequest = {
      ...values,
    };

    sendMessage(resourceRequest, {
      onSuccess,
      onError,
      onSettled,
    });
  };

  return (
    <div className="absolute bottom-5 gap-3 w-[95%] mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        key={"formik"}
      >
        <Form key={"form"} className="flex flex-row items-center">
          <Field
            name="message"
            type="text"
            placeholder="Type a message..."
            className="inputs"
          ></Field>
          <button type="submit" className="">
            <FaLocationArrow className="icons rotate-[45deg] hover:rotate-0 transition-all duration-500" />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default MessageInput;
