"use client";
import React, { useEffect, useRef } from "react";
import MessageStatus from "./MessageStatus";
import { useMeContext } from "@/hooks/useMeContext";

const MessageItem = ({ message }: { message: any }) => {
  const { me } = useMeContext();
  const chatRef = useRef(null);
  console.log("message in message item:", me?.data.id);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, []);
  console.log("message item:", message);
  return (
    message.content !== null && (
      <div ref={chatRef}>
        {message?.userId === me?.data.id ? (
          <div className="px-3 py-2 overflow-hidden w-fit h-fit max-w-[60%] self-end bg-sent-message-bg text-received-message-text  rounded-lg">
            <p>{message.content}</p>
            <MessageStatus status={"sent"} time={message.sentAt.time} />
          </div>
        ) : (
          <div className="px-3 py-2 overflow-hidden w-fit h-fit max-w-[60%] self-start bg-received-message-bg text-received-message-text  rounded-lg">
            <p>{message.content}</p>
            <MessageStatus status={"delivered"} time={message.sentAt.time} />
          </div>
        )}
      </div>
    )
  );
};

export default MessageItem;
