import { config } from "./config";

export const TokenService = {
  saveAuthToken(token: string) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken(){
    return window.sessionStorage.getItem(config.TOKEN_KEY)
  }
};
