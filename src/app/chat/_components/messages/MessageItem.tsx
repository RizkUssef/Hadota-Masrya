"use client";
import React, { useEffect, useRef } from "react";
import MessageStatus from "./MessageStatus";

const MessageItem = () => {
  const chatRef = useRef(null);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, []);
  return (
    <div
      ref={chatRef}
      className="flex flex-col gap-2 w-[97%] mx-auto hide-scrollbar  h-[65dvh] max-h-[65dvh] flex-1 overflow-y-scroll"
    >
      <div className="px-3 py-2 w-fit max-w-[60%] self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>
          oopp Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Tempora, illum voluptates atque deleniti culpa exercitationem velit
          accusamus, autem recusandae deserunt quod cupiditate vitae vero non
          ratione quis odio alias? Repellendus?
        </p>
        <MessageStatus status={"sent"} time="12.25 am" />
      </div>
      <div className="px-3 py-2 w-fit max-w-[60%] self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>
          oopp Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          impedit sint dicta illum non id quibusdam totam reprehenderit mollitia
          rerum. Quisquam illum quaerat soluta rem ad laborum minima impedit
          architecto?
        </p>
        <MessageStatus status={"delivered"} time="12.25 am" />
      </div>
      <div className="px-3 py-2 w-fit max-w-[60%] self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>
          oopp Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          impedit sint dicta illum non id quibusdam totam reprehenderit mollitia
          rerum. Quisquam illum quaerat soluta rem ad laborum minima impedit
          architecto?
        </p>
        <MessageStatus status={"delivered"} time="12.25 am" />
      </div>
      <div className="px-3 py-2 w-fit max-w-[60%] self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>
          oopp Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          impedit sint dicta illum non id quibusdam totam reprehenderit mollitia
          rerum. Quisquam illum quaerat soluta rem ad laborum minima impedit
          architecto?
        </p>
        <MessageStatus status={"delivered"} time="12.25 am" />
      </div>
      <div className="px-3 py-2 w-fit max-w-[60%] self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>
          oopp Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          impedit sint dicta illum non id quibusdam totam reprehenderit mollitia
          rerum. Quisquam illum quaerat soluta rem ad laborum minima impedit
          architecto?
        </p>
        <MessageStatus status={"delivered"} time="12.25 am" />
      </div>
      <div className="px-3 py-2 w-fit max-w-[60%] self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>
          oopp Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          impedit sint dicta illum non id quibusdam totam reprehenderit mollitia
          rerum. Quisquam illum quaerat soluta rem ad laborum minima impedit
          architecto?
        </p>
        <MessageStatus status={"delivered"} time="12.25 am" />
      </div>
      <div className="px-3 py-2 w-fit max-w-[60%] self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>
          oopp Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          impedit sint dicta illum non id quibusdam totam reprehenderit mollitia
          rerum. Quisquam illum quaerat soluta rem ad laborum minima impedit
          architecto?
        </p>
        <MessageStatus status={"delivered"} time="12.25 am" />
      </div>
      <div className="px-3 py-2 w-fit max-w-[60%] self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>
          oopp Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          impedit sint dicta illum non id quibusdam totam reprehenderit mollitia
          rerum. Quisquam illum quaerat soluta rem ad laborum minima impedit
          architecto?
        </p>
        <MessageStatus status={"delivered"} time="12.25 am" />
      </div>
      <div className="px-3 py-2 w-fit max-w-[60%] self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>
          oopp Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          impedit sint dicta illum non id quibusdam totam reprehenderit mollitia
          rerum. Quisquam illum quaerat soluta rem ad laborum minima impedit
          architecto?
        </p>
        <MessageStatus status={"delivered"} time="12.25 am" />
      </div>
      <div className="px-3 py-2 w-fit max-w-[60%] self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>
          oopp Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          impedit sint dicta illum non id quibusdam totam reprehenderit mollitia
          rerum. Quisquam illum quaerat soluta rem ad laborum minima impedit
          architecto?
        </p>
        <MessageStatus status={"delivered"} time="12.25 am" />
      </div>
      <div className="px-3 py-2 w-fit max-w-[60%] self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>
          oopp Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          impedit sint dicta illum non id quibusdam totam reprehenderit mollitia
          rerum. Quisquam illum quaerat soluta rem ad laborum minima impedit
          architecto?
        </p>
        <MessageStatus status={"delivered"} time="12.25 am" />
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
        <MessageStatus status={"seen"} time="12.25 am" /> 
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
        <MessageStatus status={"seen"} time="12.25 am" /> 
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
        <MessageStatus status={"seen"} time="12.25 am" /> 
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
        <MessageStatus status={"seen"} time="12.25 am" /> 
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
        <MessageStatus status={"seen"} time="12.25 am" /> 
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
        <MessageStatus status={"seen"} time="12.25 am" /> 
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
        <MessageStatus status={"seen"} time="12.25 am" /> 
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
        <MessageStatus status={"seen"} time="12.25 am" /> 
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
        <MessageStatus status={"seen"} time="12.25 am" /> 
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
        <MessageStatus status={"seen"} time="12.25 am" /> 
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
        <MessageStatus status={"seen"} time="12.25 am" /> 
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
        <MessageStatus status={"seen"} time="12.25 am" /> 
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
        <MessageStatus status={"seen"} time="12.25 am" /> 
      </div>
      {/* <div className="px-3 py-2 w-fit self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-start bg-received-message-bg text-received-message-text  rounded-lg">
        <p>oopp</p>
      </div>
      <div className="px-3 py-2 w-fit self-end bg-sent-message-bg text-sent-message-text  rounded-lg">
        <p>oopp</p>
      </div> */}
    </div>
  );
};

export default MessageItem;
