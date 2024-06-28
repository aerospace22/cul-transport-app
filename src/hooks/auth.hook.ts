import { useAuthStore } from "@/store";

export const useAuth = () => {
  const { token, user } = useAuthStore();

  const isAuthenticated = Boolean(token !== undefined && user !== undefined);

  return {
    isAuthenticated,
    user,
    token,
  };
};
