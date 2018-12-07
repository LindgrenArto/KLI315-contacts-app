import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {Observable} from 'rxjs';
import {ContactProvider} from '../interfaces/contact-provider';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];
  contact: Contact;

  constructor(private contactProvider: ContactProvider) {


    this.contacts = [];
    this.contacts.push(new Contact(1, 'JK', 'Simmons', 'Lappeenranta', 'Pirkonlähteenkatu 2', '+35840 551238', 'jk.simmons@email.com'));
    this.contacts.push(new Contact(2, 'Second', 'Contact', 'Helsinki', 'Pihjalakatu 23', '045 32121213', 'sec.con@email.com'));
    this.contacts.push(new Contact(3, 'Third', 'Contact', 'Kouvola', 'Kouvolankatu 1', '050 55151131', 'third.contact@email.com'));
    this.contacts.push(new Contact(4, 'Fourth', 'Contact', 'Kouvola', 'Kouvolankatu 1', '050 55151131', 'fourth.contact@email.com'));
    this.contacts.push(new Contact(5, 'Fift', 'Contact', 'Kouvola', 'Kouvolankatu 1', '050 55151131', 'fifth.contact@email.com'));
    this.contacts.push(new Contact(6, 'Sixth', 'Contact', 'Kouvola', 'Kouvolankatu 1', '050 55151131', 'sixth.contact@email.com'));
    this.contacts.push(new Contact(7, 'Seventh', 'Contact', 'Kouvola', 'Kouvolankatu 1', '050 55151131', 'seventh.contact@email.com'));
    this.contacts.push(new Contact(8, 'Eight', 'Contact', 'Kouvola', 'Kouvolankatu 1', '050 55151131', 'eight.contact@email.com'));
    this.contacts.push(new Contact(9, 'Neignth', 'Contact', 'Kouvola', 'Kouvolankatu 1', '050 55151131', 'neignth.contact@email.com'));
    this.contacts.push(new Contact(10, 'Tenth', 'Contact', 'Kouvola ', 'Kouvolankatu 1', '050 55151131', 'tenth.contact@email.com'));
    this.contacts.push(new Contact(11, 'Eleveth', 'Contact', 'Kouvola', 'Kouvolankatu 1', '050 55151131', 'eleventh.contact@email.com'));
    this.contacts.push(new Contact(12,
      'Twelwth', 'Contact', 'Kouvola', 'Kouvolankatu 1', '050 55151131', 'twelwth.contact@email.com'));
    this.contacts.push(new Contact(13,
      'Thirteenth', 'Contact', 'Kouvola', 'Kouvolankatu 1', '050 55151131', 'thirteenth.contact@email.com'));
    this.contacts.push(new Contact(14,
      'Fourteenth', 'Contact', 'Kouvola', 'Kouvolankatu 1', '050 55151131', 'fourteenth.contact@email.com'));
    this.contacts.push(new Contact(15,
      'Fifteenth', 'Contact', 'Kouvola', 'Kouvolankatu 1', '050 55151131', 'fiftheenth.contact@email.com'));
    this.contacts.push(new Contact(16,
      'Sixteenth', 'Contact', 'Kouvola', 'Kouvolankatu 1', '050 55151131', 'sixthteenth.contact@email.com'));
  }

  /*
  getContacts(): Contact[] {
    // return this.contacts;
   return  this.localStorage.getContacts();
  }
getContactById(id: string): Contact {
  return this.localStorage.getContactById(id);
}
    editContact(contact: Contact) {
      this.localStorage.editContact(contact);
    }

    deleteContacts(contact: Contact) {
      this.localStorage.deleteContact(contact);
    }
    addContact(contact: Contact) {
    this.localStorage.addContact(contact);

  }
*/

  getContacts(): Observable<Contact[]> {
    return this.contactProvider.get();
  }
  getContactById(id: string): Observable<Contact> {
    return this.contactProvider.getById(id);
  }
  getFiltered(search: string): Observable<Contact> {
    return this.contactProvider.getFiltered(search);
  }
  addContact(contact: Contact): Observable<Contact> {
    return this.contactProvider.create(contact);
  }
  editContact(contact: Contact): Observable<Contact> {
    return this.contactProvider.edit(contact);
  }

  deleteContact(contact: Contact): Observable<any> {
    return this.contactProvider.delete(contact);
  }

}
