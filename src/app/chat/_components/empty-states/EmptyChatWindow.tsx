import LogoImage from "@/components/Layout/LogoImage";
import React from "react";

const EmptyChatWindow = () => {
  return (
    <div className="bg-chat-bg flex flex-col flex-2 mr-10 justify-center gap-3 items-center rounded-2xl h-all-components-height mt-20 pb-5 w-full">
      <LogoImage className="" />
      <h1 className="text-center text-text">
        No Conversation Selected, <br/>Please select a conversation to start chatting
      </h1>
    </div>
  );
};

export default EmptyChatWindow;
