import React from "react";
import MessageInput from "./MessageInput";
import MessageItem from "./MessageItem";

const MessageList = () => {
  return (
    <div>
      <div className="bg-chat-bg relative flex flex-col flex-2 mr-10 py-5 pt-2 gap-3 items-center rounded-b-2xl h-[calc(100vh-172px)] w-full">
        <MessageItem />
        <MessageInput />
      </div>
    </div>
  );
};

export default MessageList;
