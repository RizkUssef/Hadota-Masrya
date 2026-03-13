import { SendMessageRequest } from "@/types/SendMessageRequest";
import axiosInstance from "@/utils/axiosInstance";

export const sendMessage = async (sendMessageRequest: SendMessageRequest) => {
  try {
    const response = await axiosInstance.post("/send-message", sendMessageRequest);
    return response.data;
  } catch (err: any) {
    console.error(" send message error:", err.response?.data || err.message);
    throw err;
  }
};