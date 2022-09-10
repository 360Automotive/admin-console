import { AuthStore } from "./store/auth.store";
import React from "react";
import { AuthService } from "./services/auth.service";
import { OrganizationStore} from "./store/organization.store"
import { OrganizationService } from "./services/organization.service"

interface IStoreContext {
  authStore: AuthStore;
  organizationStore: OrganizationStore
}

const organizationService = new OrganizationService()
const organizationStore = new OrganizationStore(organizationService)

const authService = new AuthService();
const authStore = new AuthStore(authService);

export const StoreContext = React.createContext<IStoreContext>({
  authStore,
  organizationStore
});
