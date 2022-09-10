import { Organization } from "../data-tranfer-objects/request/organization.dto";
import { OrganizationService } from "../services/organization.service";
import { makeAutoObservable } from "mobx";
import { ApproveRequest } from "../data-tranfer-objects/request/approve-request.dto";

export class OrganizationStore {
  public organizations: Organization[];
  public requestList: number[];

  constructor(private readonly organizationService: OrganizationService) {
    makeAutoObservable(this);
    this.organizations = [];
    this.requestList = [];
  }

  async getOrganizations() {
    try {
      const organizations = await this.organizationService.getOrganizations();
      this.setOrganizations(organizations);
    } catch (err) {
      this.setOrganizations([]);
    }
  }

  async getRequestList() {
    try {
      const requestList = await this.organizationService.getRequestList();
      this.setRequestList(requestList);
    } catch (err) {
      this.setRequestList([]);
    }
  }

  async approveRequest(_: ApproveRequest) {
    try {
      const response = await this.organizationService.approveRequest(_);
    } catch (err) {
      console.log(err);
    }
  }

  runSnackbar() {
    const snackbar = document.getElementById("snackbar");
    snackbar?.classList.add("slide-left");
    snackbar?.classList.remove("slide-right");
  }

  setRequestList(list: number[]) {
    this.requestList = list;
  }

  setOrganizations(organizations: Organization[]) {
    this.organizations = organizations;
  }
}
