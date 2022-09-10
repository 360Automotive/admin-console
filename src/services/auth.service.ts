import { LoginRequest } from "../data-tranfer-objects/request/login-request.dto";
import { config } from "./config";

export class AuthService {
  async login(loginRequest: LoginRequest) {
    const response = await fetch(`${config.API_ENDPOINT}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      throw new Error(parsedResponse);
    }

    return parsedResponse.adminToken;
  }
}
