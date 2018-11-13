import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];
  contact: Contact;

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'JK', 'Simmons', 'Lappeenranta', '+35840 551238', 'jk.simmons@email.com'));
    this.contacts.push(new Contact(2, 'Second', 'Contact', 'Helsinki', '045 32121213', 'sec.con@email.com'));
    this.contacts.push(new Contact(3, 'Third', 'Contact', 'Kouvola', '050 55151131', 'third.contact@email.com'));
    this.contacts.push(new Contact(4, 'Fourth', 'Contact', 'Kouvola', '050 55151131', 'fourth.contact@email.com'));
    this.contacts.push(new Contact(5, 'Fift', 'Contact', 'Kouvola', '050 55151131', 'fifth.contact@email.com'));
    this.contacts.push(new Contact(6, 'Sixth', 'Contact', 'Kouvola', '050 55151131', 'sixth.contact@email.com'));
    this.contacts.push(new Contact(7, 'Seventh', 'Contact', 'Kouvola', '050 55151131', 'seventh.contact@email.com'));
    this.contacts.push(new Contact(8, 'Eight', 'Contact', 'Kouvola', '050 55151131', 'eight.contact@email.com'));
    this.contacts.push(new Contact(9, 'Neignth', 'Contact', 'Kouvola', '050 55151131', 'neignth.contact@email.com'));
    this.contacts.push(new Contact(10, 'Tenth', 'Contact', 'Kouvola', '050 55151131', 'tenth.contact@email.com'));
    this.contacts.push(new Contact(11, 'Eleveth', 'Contact', 'Kouvola', '050 55151131', 'eleventh.contact@email.com'));
    this.contacts.push(new Contact(12, 'Twelwth', 'Contact', 'Kouvola', '050 55151131', 'twelwth.contact@email.com'));
    this.contacts.push(new Contact(13, 'Thirteenth', 'Contact', 'Kouvola', '050 55151131', 'thirteenth.contact@email.com'));
    this.contacts.push(new Contact(14, 'Fourteenth', 'Contact', 'Kouvola', '050 55151131', 'fourteenth.contact@email.com'));
    this.contacts.push(new Contact(15, 'Fifteenth', 'Contact', 'Kouvola', '050 55151131', 'fiftheenth.contact@email.com'));
    this.contacts.push(new Contact(16, 'Sixteenth', 'Contact', 'Kouvola', '050 55151131', 'sixthteenth.contact@email.com'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  deleteContacts(contact: Contact) {
    console.log(contact.id);
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }

}
