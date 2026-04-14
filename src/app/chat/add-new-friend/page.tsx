"use client";
import AddNewFriend from "../_components/user/AddNewFriend";
import ChatWindow from "../_components/chat/ChatWindow";

const Page = () => {
  return (
    <div className="flex gap-10 w-full">
      <AddNewFriend />
      <ChatWindow />
    </div>
  );
};

export default Page;
