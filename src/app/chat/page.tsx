"use client";
import React from "react";
import EmptyConversationList from "./_components/EmptyConversationList";
import EmptyChatWindow from "./_components/EmptyChatWindow";
import ChatWindow from "./_components/ChatWindow";
import ConversationList from "./_components/ConversationList";
import { useSearchUser } from "@/hooks/useUser";
import AddNewFriend from "./_components/AddNewFriend";

const Page = () => {
  // const { data } = useAllUsers();
  // const username = "op";
  // const email = "op";
  // const displayName = "op";

  // const { data } = useSearchUser({  displayName });
  // console.log(data);

  return (
    // <div >
    <div className="flex gap-10 w-full">
      {/* <EmptyConversationList /> */}
      <AddNewFriend />
      <ConversationList />
      {/* <EmptyChatWindow /> */}
      <ChatWindow />
    </div>
    // </div>
  );
};

export default Page;
