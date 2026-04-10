import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import Av from "../assets/hero.jpeg";

const OneUser = ({
  hasUnseenMessages = false,
}: {
  hasUnseenMessages?: boolean;
}) => {
  return (
    <div className="hover:cursor-pointer flex justify-between items-center w-[95%] mx-auto mb-3">
      <div className="flex items-center gap-4">
        <div>
          <Avatar className="size-12">
            <AvatarImage src={Av.src} />
            <AvatarFallback>DF</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h1
            className={`text-xl font-bold ${hasUnseenMessages ? "text-unseen-username" : "text-seen-username"}`}
          >
            Pokib vgtg
          </h1>
          <p
            className={`text-sm truncate w-50 ${hasUnseenMessages ? "text-unseen-message" : "text-seen-message"}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing.
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

export default OneUser;
