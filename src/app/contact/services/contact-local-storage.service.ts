import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactLocalStorageService {

  localStorage: 'contacts-app';
  contacts: Contact[];

  constructor() {
    if (!localStorage.getItem(this.localStorage)) {
      localStorage.setItem(this.localStorage, JSON.stringify([]));
    }
    const storageElement = localStorage.getItem(this.localStorage);
    this.contacts = JSON.parse(storageElement);
  }

  getContacts(): Contact[] {
    // const storageElement = localStorage.getItem(this.localStorage);
    // const contacts = JSON.parse(storageElement);
    return this.contacts; // as Contact[];
  }

  addContact(contact: Contact) {

    let lastIndex = 1;
    if (this.contacts.length > 0) {
      lastIndex = this.contacts[this.contacts.length - 1].id;
      lastIndex = lastIndex + 1;
    }
    contact.id = lastIndex;
    this.contacts.push(contact);

    localStorage.removeItem(this.localStorage);
    localStorage.setItem(this.localStorage, JSON.stringify(this.contacts));
  }


  editContact(contact: Contact) {
    for(let i = 0; i < this.contacts.length; i++) {
      if(this.contacts[i].id === contact.id) {
        this.contacts[i] = contact;
      }
    }

    localStorage.removeItem(this.localStorage);
    localStorage.setItem(this.localStorage, JSON.stringify(this.contacts));
  }


  getContactById(id: string): Contact {
    for (const item of this.contacts) {
      if (item.id === Number(id)) {
        const contactCopy = Object.assign({}, item);
        return contactCopy;
      }
    }
    return null;
  }

  deleteContact(contact: Contact) {
    console.log(contact.id);
    this.contacts.splice(this.contacts.indexOf(contact), 1);

    localStorage.removeItem(this.localStorage);
    localStorage.setItem(this.localStorage, JSON.stringify(this.contacts));
  }
}
