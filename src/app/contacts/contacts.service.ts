import {Injectable} from "@angular/core";
import {AuthHttp} from "../core/auth/auth-http.service";
import {
  CreateGroupData, AddContactsToGroupData, UpdateGroupData, RemoveContactsData,
  RemoveContactsFromGroupData
} from "./contacts.data";
import {Contact} from "./shared/contact.model";

@Injectable()
export class ContactsService {

  constructor(private http: AuthHttp) {
  }

  getContactsBook() {
    return this.http.get('/api/v1/contacts/contactsbook/owner').map(res => res.json())
  }

  getContactsBookByUserId(userId: number) {
    return this.http.get('/api/v1/contacts/contactsbook/owner/' + userId).map(res => res.json());
  }

  getContacts() {
    return this.http.get('/api/v1/contacts/all').map(res => res.json())
  }

  createContact(contact: Contact) {
    return this.http.post('/api/v1/contacts/create', JSON.stringify(contact)).map(res => res.json())
  }

  updateContact(contact: Contact) {
    return this.http.put('/api/v1/contacts/update/' + contact.id, JSON.stringify(contact)).map(res => res.json())
  }

  deleteContact(id: number) {
    return this.http.delete('/api/v1/contacts/delete/' + id).map(res => res.json())
  }

  deleteContacts(data: RemoveContactsData) {
    return this.http.post('/api/v1/contacts/delete', JSON.stringify(data)).map(res => res.json())
  }

  getGroup(id: number) {
    return this.http.get('/api/v1/contacts/group/get/' + id).map(res => res.json())
  }

  deleteGroup(id: number) {
    return this.http.delete('/api/v1/contacts/group/delete/' + id).map(res => res.json())
  }

  createGroup(group: CreateGroupData) {
    return this.http.post('/api/v1/contacts/group/create', JSON.stringify(group)).map(res => res.json())
  }

  updateGroup(data: UpdateGroupData) {
    return this.http.post('/api/v1/contacts/group/update', JSON.stringify(data)).map(res => res.json())
  }

  addContactsToGroup(data: AddContactsToGroupData) {
    return this.http.post('/api/v1/contacts/group/add', JSON.stringify(data)).map(res => res.json())
  }

  deleteContactFromGroup(data: RemoveContactsFromGroupData) {
    return this.http.post('/api/v1/contacts/group/delete', JSON.stringify(data)).map(res => res.json())
  }
}
