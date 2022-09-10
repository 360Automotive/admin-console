import { action, makeAutoObservable, observable } from "mobx";
import { LoginRequest } from "../data-tranfer-objects/request/login-request.dto";
import { AuthService } from "../services/auth.service";
import { config } from "../services/config";
export class AuthStore {
  private authenticated: boolean = false;

  constructor(private readonly authService: AuthService) {
    makeAutoObservable(this);
    this.authenticated = !!this.getAccessToken();
  }

  async login(loginRequest: LoginRequest) {
    try {
      const tokenPayloadDto = await this.authService.login(loginRequest);
      localStorage.setItem(config.TOKEN_KEY, tokenPayloadDto);
      this.setAuthenticated(true);
    } catch (err) {
      this.setAuthenticated(false);
    }
  }

  setAuthenticated(authenticated: boolean) {
    if (!authenticated) localStorage.removeItem(config.TOKEN_KEY);
    this.authenticated = authenticated;
  }

  getAccessToken() {
    return localStorage.getItem(config.TOKEN_KEY);
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

// export const AuthStore = new auth_Store()
