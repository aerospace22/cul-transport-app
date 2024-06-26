import { useAuthStore } from "@/store";

export const useAuthHook = () => {
  const { GET_TOKEN, GET_USER } = useAuthStore();

  const isAuthenticated = Boolean(GET_TOKEN() !== undefined && GET_USER() !== undefined);

  return {
    isAuthenticated,
    user: GET_USER(),
  };
};
