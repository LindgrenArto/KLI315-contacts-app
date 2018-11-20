import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../../contact';
import {ContactService} from '../../services/contact.service';
import {ToolbarOptions} from '../../../ui/toolbar/toolbar-options';
import {ToolbarService} from '../../../ui/toolbar/toolbar.service';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService,
              private toolbar: ToolbarService) {
    this.contact = new Contact;
  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Edit contact'));
    this.router.navigate(['/contacts/new']);
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId != null) {
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Create contact'));
    } else if (contactId ) {
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Edit contact'));
    }
  }


  onSave(): void {
    this.contactService.addContact(this.contact);
    this.router.navigate(['/contacts']);
  }

}
