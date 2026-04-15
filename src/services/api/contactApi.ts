import axiosInstance from "@/utils/axiosInstance";

export const userContacts = async (params?: Record<string, any>) => {
  try {
    const response = await axiosInstance.get("/contacts", {
      params,
    });
    return response.data;
  } catch (err: any) {
    console.error("get user error:", err.response?.data || err.message);
    throw err;
  }
};
