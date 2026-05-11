import { oneUserConversation, userConversations } from "@/services/api/conversationApi";
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
export const useOneUserConversation = (conversationId: string, params?: Record<string, any>) => {
  return useQuery({
    queryKey: ["oneUserConversation", conversationId, params],
    queryFn: () => oneUserConversation(conversationId, params),
    retry: false,
    refetchOnMount: "always",
    enabled: params?.enabled ?? false,
  });
};

