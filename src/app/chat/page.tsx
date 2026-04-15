"use client";
import React from "react";
import EmptyConversationList from "./_components/empty-states/EmptyConversationList";
import EmptyChatWindow from "./_components/empty-states/EmptyChatWindow";
import ChatWindow from "./_components/chat/ChatWindow";
import ConversationList from "./_components/chat/ConversationList";
import { useSearchUser } from "@/hooks/useUser";
import AddNewFriend from "./_components/user/AddNewFriend";
import { useMeContext } from "@/hooks/useMeContext";

const Page = () => {
  // const { data } = useAllUsers();
  // const username = "op";
  // const email = "op";
  // const displayName = "op";

  // const { data } = useSearchUser({  displayName });
  // console.log(data);

  const { me } = useMeContext();
  console.log(me);
  

  return (
    // <div >
    <div className="flex gap-10 w-full">
      {/* <EmptyConversationList /> */}
      {/* <AddNewFriend /> */}
      <ConversationList />
      {/* <EmptyChatWindow /> */}
      <ChatWindow />
    </div>
    // </div>
  );
};

export default Page;
