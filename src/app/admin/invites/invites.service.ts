import {Injectable} from "@angular/core";
import {Invite} from "./invite.model";
import {AuthHttp} from "../../core/auth/auth-http.service";
import {Company} from "../../core/models/auth/company.model";


@Injectable()
export class InvitesService {

  constructor(private http: AuthHttp) {
  }

  getRoles() {
    return this.http.get("/auth/api/v1/roles/all").map(response => response)
  }

  createInvite(invite: Invite) {
    return this.http.post("/auth/invite", JSON.stringify(invite))
  }

  getInvites() {
    return this.http.get("/auth/api/v1/invites/all").map(response => response)
  }

  getInvitesByCompany() {
    return this.http.get("/auth/api/v1/invites/company").map(response => response)
  }

  getCompanies() {
    return this.http.get("auth/api/v1/companies/all").map(response => response)
  }

  createCompany(company: Company) {
    return this.http.post("auth/api/v1/companies/create", JSON.stringify(company)).map(response => response)
  }

  removeInvite(id: number) {
    return this.http.delete("auth/api/v1/invites/" + id)
  }

}
