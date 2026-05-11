import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Conversation } from "@/types/Conversation/ConversationType";

const ChatItem = ({
  conversation,
  onClick,
}: {
  conversation: Conversation;
  onClick: () => void;
}) => {
  const hasUnseenMessages = conversation?.lastMessage !== null;
  const { otherUsers } = conversation;
  const { lastMessage } = conversation;
  const { user } = otherUsers ? otherUsers[0] : { user: null };

  // console.log("conversation in chat item", lastMessage?.content);

  return (
    <div
      key={conversation.uuid}
      onClick={() => {
        onClick();
      }}
      className="hover:cursor-pointer flex justify-between items-center w-[93.5%] mx-auto mb-3"
    >
      <div className="flex items-center gap-4">
        <div>
          <Avatar className="size-12">
            <AvatarImage src={conversation?.avatarUrl ?? user?.avatarUrl} />
            <AvatarFallback>
              {conversation?.name?.charAt(0) ?? user?.displayName?.charAt(0)}
            </AvatarFallback>
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
            {lastMessage?.content}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center text-xs">
        <p
          key={conversation.id}
          className={`text-unseen-timestamp ${hasUnseenMessages ? "text-unseen-timestamp" : "text-seen-timestamp"}`}
        >
          {lastMessage?.sentAt.time}
        </p>
        {hasUnseenMessages && (
          <div
            className={`bg-unseen-badge-bg rounded-full flex items-center pt-2 justify-center  p-1.5`}
          >
            <p
              className={`text-unseen-badge-text text-[11px] w-1.5 h-1.5 flex items-center justify-center`}
            >
              {otherUsers?.[0]?.unreadCount}
            </p>
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
