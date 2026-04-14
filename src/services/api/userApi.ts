import axiosInstance from "@/utils/axiosInstance";

export const allUsers = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (err: any) {
    console.error("get user error:", err.response?.data || err.message);
    throw err;
  }
};
export const searchUser = async (params?: Record<string, any>) => {
  try {
    const response = await axiosInstance.get("/users", {
      params,
    });
    return response.data;
  } catch (err: any) {
    console.error("get user error:", err.response?.data || err.message);
    throw err;
  }
};
