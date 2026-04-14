"use client";
import CustomForm from "@/components/Forms/CustomForm";
import { CustomFormField } from "@/types/CustomFormField";
import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import * as Yup from "yup";
import Link from "next/link";
import UserItem from "./UserItem";
import { motion } from "framer-motion";
import { useSearchUser } from "@/hooks/useUser";

const validationSchema = Yup.object({
  username: Yup.string().required("you must enter your user name"),
});

const AddNewFriend = () => {
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const trimmedSearchQuery = searchQuery.trim();

  const fields: CustomFormField[] = [
    {
      name: "username",
      label: "",
      placeholder: "enter your user name",
      type: "text",
      handleCustomChange: (value: string) => {
        // Clear previous timer
        if (debounceTimer) {
          clearTimeout(debounceTimer);
        }

        // Set new timer - waits 500ms after user stops typing
        const timer = setTimeout(() => {
          const username = value?.trim();
          console.log(username);
          
          if (username) {
            setSearchQuery(username); // Trigger the query
          } else {
            setSearchQuery(""); // Clear search if input is empty
          }
        }, 500);

        setDebounceTimer(timer);
      },
    },
  ];

  const initialValues = Object.fromEntries(
    fields.map((field) => [field.name, field.defaultValue ?? ""]),
  );

  const {
    data: searchResults,
    isPending,
  } = useSearchUser({
    filters: {
      username: { operator: "like", value: trimmedSearchQuery },
    },
    enabled: !!trimmedSearchQuery,
  });

  console.log(searchResults);
  
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      className="bg-cards-bg flex flex-col w-90 justify-start gap-3 rounded-2xl h-all-components-height mt-20 pb-5"
    >
      <div className="flex justify-between items-center pt-3 px-3">
        <h1 className="text-headers text-2xl font-bold">Add New Friend</h1>
        <Link href={"/chat"}>
          <MdCancel className="icons size-6" />
        </Link>
      </div>
      <CustomForm
        className={"flex w-full px-3 flex-col font-family-en pt-0 pb-0"}
        fields={fields}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => {}} // Not used since submitHide=true
        constructBody={(data) => data} // Not used
        isPending={isPending}
        submitHide={true}
      />
      <UserItem />
    </motion.div>
  );
};

export default AddNewFriend;
