import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactProvider} from '../interfaces/contact-provider';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactLocalStorageService implements ContactProvider {

  localStorage: 'contacts-app';
  contacts: Contact[];

  constructor() {
    if (!localStorage.getItem(this.localStorage)) {
      localStorage.setItem(this.localStorage, JSON.stringify([]));
    }
    const storageElement = localStorage.getItem(this.localStorage);
    this.contacts = JSON.parse(storageElement);
  }

  get(): Observable<Contact[]> {
    console.log(this.contacts);
    return of(this.contacts);
  }

  getFiltered(search: string): Observable<Contact> {
    return null;
  }

  create(contact: Contact): Observable<Contact> {
    console.log(contact);

    let lastIndex = 1;
    if (this.contacts.length > 0) {
      lastIndex = this.contacts[this.contacts.length - 1].id;
      lastIndex = lastIndex + 1;
    }
    contact.id = lastIndex;
    this.contacts.push(contact);

    localStorage.removeItem(this.localStorage);
    localStorage.setItem(this.localStorage, JSON.stringify(this.contacts));

    return of(contact);
  }


  edit(contact: Contact): Observable<Contact> {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === contact.id) {
        this.contacts[i] = contact;
      }
    }
    localStorage.setItem(this.localStorage, JSON.stringify(this.contacts));
    return of(contact);
  }


  getById(id: string): Observable<Contact> {
    for (const item of this.contacts) {
      if (item.id === Number(id)) {
        const contactCopy = Object.assign({}, item);
        return of(contactCopy);
      }
    }
  }

  delete(contact: Contact): Observable<any> {
    console.log(contact.id);
    this.contacts.splice(this.contacts.indexOf(contact), 1);

    localStorage.removeItem(this.localStorage);
    localStorage.setItem(this.localStorage, JSON.stringify(this.contacts));

    return of(contact);
  }
}
