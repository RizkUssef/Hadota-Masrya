import React from "react";
import OneUser from "./ChatItem";
import Search from "./Search";
import { IoPersonAdd } from "react-icons/io5";
import ChatItem from "./ChatItem";

const ConversationList = () => {
  return (
    <div className="bg-cards-bg flex flex-col w-90 justify-start gap-3 rounded-2xl h-all-components-height mt-20 pb-5">
      <div className="flex justify-between items-center pt-3 px-3">
        <h1 className="text-headers text-2xl font-bold">Chats</h1>
        <IoPersonAdd className="icons size-6" />
      </div>
      <Search />
      <ChatItem hasUnseenMessages={true} />
      <ChatItem hasUnseenMessages={false} />
    </div>
  );
};

export default ConversationList;
