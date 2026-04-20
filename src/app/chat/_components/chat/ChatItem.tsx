import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Conversation } from "@/types/Conversation/ConversationType";

const ChatItem = ({
  hasUnseenMessages = false,
  conversation,
}: {
  hasUnseenMessages?: boolean;
  conversation: Conversation;
}) => {
  console.log(conversation);
  const { otherUsers } = conversation
  const { user } = otherUsers ? otherUsers[0] : { user: null };
  console.log(otherUsers);
  console.log(user);
  
  return (
    <div className="hover:cursor-pointer flex justify-between items-center w-[93.5%] mx-auto mb-3">
      <div className="flex items-center gap-4">
        <div>
          <Avatar className="size-12">
            <AvatarImage src={conversation?.avatarUrl ?? user?.avatarUrl} />
            <AvatarFallback>{conversation?.name?.charAt(0) ?? user?.displayName?.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h1
            className={`text-xl font-bold ${hasUnseenMessages ? "text-unseen-username" : "text-seen-username"}`}
          >
            {conversation?.name ?? user?.displayName}
          </h1>
          <p
            className={`text-sm truncate w-50 ${hasUnseenMessages ? "text-unseen-message" : "text-seen-message"}`}
          >
            {conversation?.description ?? user?.bio}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center text-xs">
        <p
          className={`text-unseen-timestamp ${hasUnseenMessages ? "text-unseen-timestamp" : "text-seen-timestamp"}`}
        >
          12.25 am
        </p>
        {hasUnseenMessages && (
          <div
            className={`bg-unseen-badge-bg rounded-full flex items-center pt-2 justify-center  p-1.5`}
          >
            <p className={`text-unseen-badge-text leading-2.5`}>10</p>
          </div>
        )}
        <p
          className={`text-unseen-tag ${hasUnseenMessages ? "text-unseen-tag" : "text-seen-tag"}`}
        >
          {hasUnseenMessages ? "unseen" : "seen"}
        </p>
      </div>
    </div>
  );
};

export default ChatItem;
