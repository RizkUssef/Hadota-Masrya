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
      key={"formik"}
    >
      {({ values, setFieldValue }) => (
        <Form
          key={"form"}
          className={cn(
            `${fields.length > 3 ? "grid grid-cols-1 bg-cards-bg py-5 px-10 rounded-xl md:grid-cols-2 w-1/3" : "flex flex-col"}`,
            "gap-2",
            className,
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
                <>
                  <div key={name} className="flex flex-col gap-2">
                    {label && (
                      <label
                        key={name}
                        htmlFor={name}
                        className="text-lg text-labels font-bold"
                      >
                        {label}
                      </label>
                    )}

                    {as === "select" ? (
                      <CustomCombobox
                        key={"option"}
                        options={
                          name === "personId" && values.rankId
                            ? options.filter(
                                (option) => option.rankId === values.rankId,
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
                        key={"date"}
                        date={values[name]}
                        setDate={(date: string) => setFieldValue(name, date)}
                      />
                    ) : as === "file" ? (
                      <Field name={name} key={name}>
                        {({ form }) => (
                          <input
                            key={name}
                            id={name}
                            name={name}
                            type="file"
                            className={className || "inputs"}
                            onChange={(event) => {
                              form.setFieldValue(
                                name,
                                event.currentTarget.files[0],
                              );
                            }}
                          />
                        )}
                      </Field>
                    ) : (
                      <Field
                        key={name+"type"}
                        id={name}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        as={as}
                        className={className || "inputs"}
                      />
                    )}
                  </div>
                  <ErrorMessage
                    key={name + "error"}
                    name={name}
                    component="p"
                    className="error-message"
                  />
                </>
              );
            },
          )}

          <button
            key={"submit"}
            type="submit"
            disabled={isPending}
            className="submit-button"
          >
            {isPending ? (
              <div key={"spinner-dev"} className="flex w-full justify-center items-center">
                <Spinner key={"spinner"} className="size-6" />
              </div>
            ) : (
              <p key={"submit-text"} className="leading-normal">Submit</p>
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
