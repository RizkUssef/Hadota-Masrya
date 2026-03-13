import LogoImage from "@/components/Layout/LogoImage";
import Link from "next/link";
import React from "react";
import { IoPersonAdd } from "react-icons/io5";

const EmptyConversationList = () => {
  return (
    <div className="bg-cards-bg flex flex-col w-90 justify-center gap-3 items-center rounded-2xl h-all-components-height mt-20 pb-5">
      <LogoImage className=""/>
      <h1 className="w-3/4 text-center text-text">No Conversation, Start a new conversation</h1>
      <Link className="flex gap-2 buttons w-fit items-center" href="/chat/new">
        New Frind <IoPersonAdd className="icons size-5" />
      </Link>
    </div>
  );
};

export default EmptyConversationList;
