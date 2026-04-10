import React from "react";
import EmptyConversationList from "./_components/EmptyConversationList";
import EmptyChatWindow from "./_components/EmptyChatWindow";
import ChatWindow from "./_components/ChatWindow";
import AddUser from "./_components/AddUser";
import ConversationList from "./_components/ConversationList";

const page = () => {
  return (
    // <div >
      <div className="flex gap-10 w-full">
        {/* <EmptyConversationList /> */}
        {/* <AddUser /> */}
        <ConversationList />
        {/* <EmptyChatWindow /> */}
        <ChatWindow />
      </div>
    // </div>
  );
};

export default page;
