import React from "react";
import EmptyConversationList from "./_components/EmptyConversationList";
import EmptyChatWindow from "./_components/EmptyChatWindow";
import ChatWindow from "./_components/ChatWindow";

const page = () => {
  return (
    // <div >
      <div className="flex gap-10 w-full">
        <EmptyConversationList />
        {/* <EmptyChatWindow /> */}
        <ChatWindow />
      </div>
    // </div>
  );
};

export default page;
