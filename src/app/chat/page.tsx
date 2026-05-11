"use client";
import React, { useState } from "react";
import EmptyConversationList from "./_components/empty-states/EmptyConversationList";
import EmptyChatWindow from "./_components/empty-states/EmptyChatWindow";
import ChatWindow from "./_components/chat/ChatWindow";
import ConversationList from "./_components/chat/ConversationList";
import { useSearchUser } from "@/hooks/useUser";
import AddNewFriend from "./_components/user/AddNewFriend";
import { useMeContext } from "@/hooks/useMeContext";

const Page = () => {
  // const { me } = useMeContext();
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <div className="flex gap-10 w-full">
      {/* <EmptyConversationList /> */}
      {/* <AddNewFriend /> */}
      <ConversationList onSelect={setSelectedConversation} />
      {selectedConversation ? (
        <ChatWindow conversation={selectedConversation} />
      ) : (
        <EmptyChatWindow />
      )}
    </div>
  );
};

export default Page;
