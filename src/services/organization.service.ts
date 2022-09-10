import { config } from "./config";
import { ApproveRequest } from "../data-tranfer-objects/request/approve-request.dto";

export class OrganizationService {
  async getOrganizations() {
    const response = await fetch(`${config.API_ENDPOINT}/organizations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(config.TOKEN_KEY)}`,
      },
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      throw new Error(parsedResponse);
    }
    return parsedResponse;
  }
  async getRequestList() {
    const response = await fetch(`${config.API_ENDPOINT}/open-request`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(config.TOKEN_KEY)}`,
      },
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      throw new Error(parsedResponse);
    }
    return parsedResponse;
  }
  async approveRequest(approveRequest: ApproveRequest) {
    const response = await fetch(`${config.API_ENDPOINT}/approve-request`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(config.TOKEN_KEY)}`,
      },
      body: JSON.stringify(approveRequest),
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      throw new Error(parsedResponse);
    }
    return parsedResponse;
  }
}
