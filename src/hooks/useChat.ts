import { SendMessageRequest } from "@/types/SendMessageRequest";
import { useMutation } from "@tanstack/react-query";

export const useSendMessage = () => {
  return useMutation({
    mutationFn: (sendMessageRequest: SendMessageRequest) => sendMessage(sendMessageRequest),
  });
};