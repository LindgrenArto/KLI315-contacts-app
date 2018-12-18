import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {DialogService} from '../../ui/dialog.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  p: any;
  values = '';

  constructor(private contactService: ContactService, private router: Router, private toolbar: ToolbarService,
              private errorService: DialogService) {
    this.contacts = [];

  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions('menu', 'Contacts application'));
    this.loadContacts();
  }

  onContactDeleted(contact: Contact) {
    this.loadContacts();
  }

  onContactCreate(): void {
    this.router.navigate(['/contacts/new']);
  }

  loadContacts() {
    this.contactService.getContacts().subscribe(result => {
      this.contacts = result;
    }, error1 => {
      this.errorService.getError('Service not available');
    });
  }

  filterContacts(value: string) {
    this.values += value;
    this.contactService.getFiltered(value).subscribe(result => {
      this.contacts = result;
    });
  }
}
