import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactProvider} from '../interfaces/contact-provider';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactLocalStorageService implements ContactProvider {

  localStorage = 'contacts-app';
  contacts: Contact[];

  constructor() {
    if (!localStorage.getItem(this.localStorage)) {
      localStorage.setItem(this.localStorage, JSON.stringify([]));
    }
    const storageElement = localStorage.getItem(this.localStorage);
    this.contacts = JSON.parse(storageElement);
  }

  get(): Observable<Contact[]> {
    return of(this.contacts);
  }

  getFiltered(value: string): Observable<Contact[]> {
    if (value) {
      const filtered = this.contacts.filter(contact => contact.firstName.toLowerCase().includes(value)
        || contact.lastName.toLowerCase().includes(value)
       || contact.city.toLowerCase().includes(value) || contact.address.toLowerCase().includes(value));
      return of(filtered);
    }
    if (!value) {
      return this.get();
    }
  }

  create(contact: Contact): Observable<Contact> {
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
