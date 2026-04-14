import React from "react";
import Search from "../user/Search";
import { IoPersonAdd } from "react-icons/io5";
import ChatItem from "./ChatItem";
import Link from "next/link";
import { motion } from "framer-motion";

const ConversationList = () => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      className="bg-cards-bg flex flex-col w-90 justify-start gap-3 rounded-2xl h-all-components-height mt-20 pb-5"
    >
      <div className="flex justify-between items-center pt-3 px-3">
        <h1 className="text-headers text-2xl font-bold">Chats</h1>
        <Link href={"/chat/add-new-friend"}>
          <IoPersonAdd className="icons size-6" />
        </Link>
      </div>
      <Search />
      <ChatItem hasUnseenMessages={true} />
      <ChatItem hasUnseenMessages={false} />
    </motion.div>
  );
};

export default ConversationList;
