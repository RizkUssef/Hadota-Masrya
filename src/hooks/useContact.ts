import { userContacts } from "@/services/api/contactApi";
import { useQuery } from "@tanstack/react-query";
export const useUserContacts = (params?: Record<string, any>) => {
  return useQuery({
    queryKey: ["userContacts", params],
    queryFn: () => userContacts(params),
    retry: false,
    refetchOnMount: "always",
    enabled: params?.enabled ?? true,
  });
};

