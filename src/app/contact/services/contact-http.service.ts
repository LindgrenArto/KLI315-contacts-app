import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../contact';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ContactProvider} from '../interfaces/contact-provider';


@Injectable({
  providedIn: 'root'
})
export class ContactHttpService implements ContactProvider {

  url: string;
  params: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiEndPointUrl + '/contacts';
    this.params = '?q=';
  }

  get(): Observable<Contact[]> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Contact[];
    }));
  }

  getFiltered(value: string): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.url}?q=${value}`);
  }

  getById(id: string): Observable<Contact> {
    return this.httpClient.get(this.url + '/' + id).pipe(map(response => {
      return response as Contact;
    }));
  }

  edit(contact: Contact): Observable<Contact> {
    return this.httpClient.put(this.url + '/' + contact.id, contact).pipe(map(response => {
      return response as Contact;
    }));
  }

  create(contact: Contact): Observable<Contact> {
    return this.httpClient.post(this.url, contact).pipe(map(response => {
      return response as Contact;
    }));
  }

  delete(contact: Contact): Observable<any> {
    return this.httpClient.delete(this.url + '/' + contact.id);
  }

}

