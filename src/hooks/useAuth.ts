import { useContext } from "react";
import { StoreContext } from "../store.context";

export const useAuth = () => {
  return useContext(StoreContext).authStore.isAuthenticated();
};
