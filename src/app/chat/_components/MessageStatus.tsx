import Image from "next/image";
import sent from "../../../../public/assets/sent.svg";
import delivered from "../../../../public/assets/delivered.svg";
import seen from "../../../../public/assets/Logo.svg";
import React from "react";

const MessageStatus = ({ status, time }: { status: string; time: string }) => {
  return (
    <div className="flex gap-1 justify-end items-center">
      <p
        className={
          status === "sent" || "seen" || "delivered"
            ? "text-sent-message-time text-[10px] leading-5"
            : "text-received-message-time text-[10px] leading-5"
        }
      >
        {time}
      </p>
      <Image
        src={
          status === "sent" ? sent : status === "delivered" ? delivered : seen
        }
        alt="sent"
        className={status === "sent" ? "w-[24px] h-[23px]" : ""}
        width={30}
        height={10}
      />
    </div>
  );
};

export default MessageStatus;
