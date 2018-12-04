import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../../contact';
import {ContactService} from '../../services/contact.service';
import {ToolbarOptions} from '../../../ui/toolbar/toolbar-options';
import {ToolbarService} from '../../../ui/toolbar/toolbar.service';
import {MatSnackBar} from '@angular/material';
import {consoleTestResultHandler} from 'tslint/lib/test';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService,
              private toolbar: ToolbarService, private snackBar: MatSnackBar) {
    this.contact = new Contact;
  }

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId != null) {
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Edit contact'));
      /*
      if (this.contactService.getContactById(contactId) !== undefined) {
        this.contact = this.contactService.getContactById(contactId);
      } else {
        this.router.navigate(['/contacts']);
      }
      */

      this.contactService.getContactById(contactId).subscribe(result => {
        this.contact = result;
      }, error => {
        console.log(error);
        this.router.navigate(['/contacts']);
      });
    } else {
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Create contact'));
    }
  }

  onSave(): void {
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId != null) {
      this.contactService.editContact(this.contact).subscribe(result => {
        this.router.navigate(['/contacts']);
        return this.contact = result;
      });
      this.snackBar.open('Edited contact!', 'OK', {duration: 3000});
    } else {
      this.contactService.addContact(this.contact).subscribe(result => {
        this.router.navigate(['/contacts']);
        return this.contact = result;
      });
      this.snackBar.open('Created contact!', 'OK', {duration: 3000});
    }
  }
}
