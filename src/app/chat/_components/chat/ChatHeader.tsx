import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Conversation } from "@/types/Conversation/ConversationType";
import React from "react";
import { BiSolidArchiveIn, BiSolidBellRing } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";

const ChatHeader = ({ conversation }: { conversation: Conversation }) => {
  const otherUsers = conversation?.otherUsers;
  const { user } = otherUsers ? otherUsers[0] : { user: null };
  return (
    <div
      key={conversation?.uuid}
      className="bg-chat-header-bg p flex flex-2 justify-center gap-3 items-center rounded-t-2xl mt-20 py-3 px-5 w-full"
    >
      <div className="flex-1 flex gap-3 items-center text-text">
        <Avatar className="size-12">
          <AvatarImage src={conversation?.avatarUrl ?? user?.avatarUrl} />
          <AvatarFallback>
            {conversation?.name?.charAt(0) ?? user?.displayName?.charAt(0)}
          </AvatarFallback>
          <AvatarBadge className="bg-green-600 dark:bg-green-800" />
        </Avatar>
        <h1 className="text-text text-lg font-semibold">
          {conversation?.name ?? user?.displayName}
        </h1>
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
