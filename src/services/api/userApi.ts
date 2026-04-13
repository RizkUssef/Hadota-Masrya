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
export const searchUser = async ({
  username,
  email,
  displayName,
}: {
  username?: string;
  email?: string;
  displayName?: string;
}) => {
  try {
    const response = await axiosInstance.get("/users", {
      params: {
        filters: {
          username: { operator: "like", value: { username } },
          email: { operator: "like", value: { email } },
          displayName: { operator: "like", value: { displayName } },
        },
      },
    });
    return response.data;
  } catch (err: any) {
    console.error("get user error:", err.response?.data || err.message);
    throw err;
  }
};