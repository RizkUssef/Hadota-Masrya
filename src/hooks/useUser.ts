import { allUsers, searchUser } from "@/services/api/userApi";
import { useQuery } from "@tanstack/react-query";

export const useAllUsers = () => {
  return useQuery({
    queryKey: ["allUsers"],
    queryFn: () => allUsers(),
    retry: false,
    refetchOnMount: "always",
  });
};
export const useSearchUser = ({
  username,
  email,
  displayName,
}: {
  username?: string;
  email?: string;
  displayName?: string;
}) => {
  return useQuery({
    queryKey: ["userSearch"],
    queryFn: () => searchUser({ username, email, displayName }),
    retry: false,
    refetchOnMount: "always",
  });
};