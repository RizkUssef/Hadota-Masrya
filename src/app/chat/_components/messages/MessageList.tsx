import React from "react";
import MessageInput from "./MessageInput";
import MessageItem from "./MessageItem";

const MessageList = ({ conversationMessages }) => {
  return (
    <div>
      <div className="bg-chat-bg relative flex flex-col mr-10 py-5 pt-2 gap-3 items-center rounded-b-2xl h-[calc(100vh-172px)] w-full">
        <div className="flex flex-col gap-2 w-[97%] mx-auto hide-scrollbar  h-[65dvh] max-h-[65dvh]  overflow-y-scroll">
          {conversationMessages?.data?.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
        </div>
        {/* <MessageItem /> */}
        <MessageInput />
      </div>
    </div>
  );
};

export default MessageList;
