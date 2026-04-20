import { userConversations } from "@/services/api/conversationApi";
import { useQuery } from "@tanstack/react-query";
export const useUserConversations= (params?: Record<string, any>) => {
  return useQuery({
    queryKey: ["userConversations", params],
    queryFn: () => userConversations(params),
    retry: false,
    refetchOnMount: "always",
    enabled: params?.enabled ?? true,
  });
};

