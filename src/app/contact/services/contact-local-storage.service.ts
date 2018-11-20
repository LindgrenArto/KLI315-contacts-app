import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactLocalStorageService {

  localStorage: 'contacts-app';

  constructor() {
    if (!localStorage.getItem(this.localStorage)) {
      localStorage.setItem(this.localStorage, JSON.stringify([]));
    }
  }

  getContacts(): Contact[] {
    const storageElement = localStorage.getItem(this.localStorage);
    const contacts = JSON.parse(storageElement);
    return contacts as Contact[];
  }

  editContact(contact: Contact) {

  }
}
