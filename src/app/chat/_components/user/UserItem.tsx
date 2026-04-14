import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import Av from "../../assets/hero.jpeg";
import { UserItemData } from "@/types/User/UserItemData";

const UserItem = ({User}: {User: UserItemData}) => {
  return (
    <div key={User.uuid} className="hover:cursor-pointer flex justify-between items-center w-[93.5%] mx-auto mb-3">
      <div className="flex items-center gap-4">
        <div>
          <Avatar className="size-12">
            <AvatarImage src={Av.src} />
            <AvatarFallback>DF</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h1 className={`text-xl font-bold text-seen-username`}>{User.displayName}</h1>
          <p className={`text-sm truncate w-50 text-seen-message`}>
            {User.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
