import React from "react";
import MessageInput from "./MessageInput";

const MessageList = () => {
  return (
    <div>
      <div className="bg-chat-bg relative flex flex-col flex-2 mr-10 py-5 gap-3 items-center rounded-b-2xl h-[calc(100vh-172px)] w-full">
        <MessageInput />
      </div>
    </div>
  );
};

export default MessageList;
