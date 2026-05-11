import { ROUTES } from "@/routers/router";
import { conversationMessages } from "@/services/api/messageApi";
import { toastError, toastSuccess } from "@/utils/toast";
import { useMutation, useQuery } from "@tanstack/react-query";
export const useConversationMessages = (params?: Record<string, any>) => {
  return useQuery({
    queryKey: ["conversationMessages", params],
    queryFn: () => conversationMessages(params),
    retry: false,
    refetchOnMount: "always",
    enabled: params?.enabled ?? true,
  });
};

export const useSendMessage = () => {
    // Implement the logic for sending a message using the sendMessage API function
    return useMutation({
        mutationFn: (sendMessageRequest: SendMessageRequest) => sendMessage(sendMessageRequest),
            onSuccess() {
              // toastSuccess(
              //   "Welcome to Hadota Masrya! Your account has been created successfully.",
              // );
            },
            onError: (error: any) => {
              // toastError(
              //   error?.response?.data?.message ||
              //     error?.message ||
              //     "Something went wrong",
              // );
            },
          });
    // Return the mutation object
    
}


