import axiosInstance from "@/utils/axiosInstance";

export const userConversations = async (params?: Record<string, any>) => {
  try {
    const response = await axiosInstance.get("/conversations", {
      params,
    });
    return response.data;
  } catch (err: any) {
    console.error("get user error:", err.response?.data || err.message);
    throw err;
  }
};
