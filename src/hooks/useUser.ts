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
export const useSearchUser = (params?: Record<string, any>) => {
  return useQuery({
    queryKey: ["userSearch", params],
    queryFn: () => searchUser(params),
    retry: false,
    refetchOnMount: "always",
    enabled: params?.enabled ?? false,
  });
};

// export const useInboxEmails = (params?: Record<string, any>) => {
//   return useQuery<InboxEmail[]>({
//     queryKey: ["inbox", params?.filter],
//     queryFn: () => getInboxEmails(params),
//     staleTime: Infinity,
//     placeholderData: keepPreviousData,
//     enabled: !!params?.enabled,
//   });
// };
