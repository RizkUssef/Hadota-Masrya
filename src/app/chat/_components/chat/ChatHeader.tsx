import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { BiSolidArchiveIn, BiSolidBellRing } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";

const ChatHeader = () => {
  return (
    <div className="bg-chat-header-bg p flex flex-2 justify-center gap-3 items-center rounded-t-2xl mt-20 py-3 px-5 w-full">
      <div className="flex-1 flex gap-3 items-center text-text">
        <Avatar className="size-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
          <AvatarBadge className="bg-green-600 dark:bg-green-800" />
        </Avatar>
         <h1 className="text-text text-lg font-semibold">John Doe</h1>
      </div>
      <div className="flex-1 flex gap-5 justify-end items-center">
        <BiSolidBellRing className="icons size-6" />
        <BiSolidArchiveIn className="icons size-6" />
        <FaTrashAlt className="icons size-6" />
      </div>
    </div>
  );
};

export default ChatHeader;
