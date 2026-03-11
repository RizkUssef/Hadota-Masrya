import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import CustomCombobox from "./CustomCombobox";
import { cn } from "@/lib/utils";
import { CustomFormProps } from "@/types/CustomFormProps";
import CustomDatePicker from "./CustomDatePicker";
import { Spinner } from "@/components/ui/spinner";

const CustomForm = <ResourceRequest,>({
  fields = [],
  initialValues,
  validationSchema,
  constructBody,
  onSubmit,
  isPending,
  onSuccess,
  onError,
  onSettled,
  className,
}: CustomFormProps<ResourceRequest>) => {
  const handleSubmit = (values: any) => {
    const resourceRequest: ResourceRequest = {
      ...values,
    };
    const body = constructBody(resourceRequest);
    onSubmit(body, {
      onSuccess,
      onError,
      onSettled,
    });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form
          className={cn(
            `${fields.length > 3 ? "grid grid-cols-1 md:grid-cols-2" : "flex flex-col"}`,
            "gap-2",
            className
          )}
        >
          {fields.map(
            ({
              name,
              label,
              type = "text",
              as = "input",
              placeholder = "",
              options = [],
              className,
            }) => {
              return (
                <div key={name} className="flex flex-col gap-2">
                  {label && (
                    <label htmlFor={name} className="text-lg font-bold">
                      {label}
                    </label>
                  )}

                  {as === "select" ? (
                    <CustomCombobox
                      options={
                        name === "personId" && values.rankId
                          ? options.filter(
                              (option) => option.rankId === values.rankId
                            )
                          : options
                      }
                      value={values[name]}
                      setValue={(value) => {
                        setFieldValue(name, value);
                        if (name === "rankId")
                          setFieldValue("personId", undefined);
                      }}
                    />
                  ) : as === "date" ? (
                    <CustomDatePicker
                      date={values[name]}
                      setDate={(date: string) => setFieldValue(name, date)}
                    />
                  ) : as === "file" ? (
                    <Field name={name}>
                      {({ form }) => (
                        <input
                          id={name}
                          name={name}
                          type="file"
                          className={
                            className ||
                            "bg-[rgb(225,229,234)] w-full py-2 px-2 rounded-xl text-[#1B365D] border-none focus:outline-none mb-1"
                          }
                          onChange={(event) => {
                            form.setFieldValue(
                              name,
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                      )}
                    </Field>
                  ) : (
                    <Field
                      id={name}
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      as={as}
                      className={
                        className ||
                        "bg-[rgb(225,229,234)] w-full py-2 px-2 rounded-xl text-[#1B365D] border-none focus:outline-none mb-1"
                      }
                    />
                  )}

                  <ErrorMessage
                    name={name}
                    component="div"
                    className="error-message"
                  />
                </div>
              );
            }
          )}

          <button
            type="submit"
            disabled={isPending}
            className="submit-button col-span-full"
          >
            {isPending ? (
              <div className="flex w-full justify-center items-center">
                <Spinner className="size-6" />
              </div>
            ) : (
              <p>إرسال</p>
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
