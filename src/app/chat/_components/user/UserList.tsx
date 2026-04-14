"use client";

import { UserItemData } from "@/types/User/UserItemData";
import UserItem from "./UserItem";
import { Spinner } from "@/components/ui/spinner";

const UserList = ({
  Users = [],
  isLoading,
}: {
  Users: UserItemData[];
  isLoading: boolean;
}) => {
  return (
    <div className="flex flex-col justify-start gap-3 h-full overflow-y-scroll hide-scrollbar">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spinner className="size-8" />
        </div>
      ) : (
        <div className="flex flex-col justify-start gap-3">
          {Users.length > 0 ? (
            Users.map((User) => <UserItem key={User.uuid} User={User} />)
          ) : (
            <h1 className="text-center text-links-danger">No Users Found</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default UserList;
