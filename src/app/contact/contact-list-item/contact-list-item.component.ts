import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig, MatSnackBar} from '@angular/material';
import {ConfirmDialogComponent} from '../../ui/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactDeleted: EventEmitter<any>;


  constructor(private contactService: ContactService, private router: Router, private snackBar: MatSnackBar,
              private dialog: MatDialog) {
    this.contactDeleted = new EventEmitter<any>();
  }

  ngOnInit() {
  }


  deleteContact() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '250px';
    dialogConfig.height = '200px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.contactService.deleteContact(this.contact).subscribe(() => {
          this.snackBar.open('Contact deleted!', this.contact.firstName + ' ' + this.contact.lastName, {duration: 3000});
          this.contactDeleted.emit(this.contact);
        });
      }
    });
  }

  editContact() {
    this.router.navigate(['contacts/edit', this.contact.id]);
  }

  navigateToMap() {
    this.router.navigate(['contacts/map', {address: this.contact.address, city: this.contact.city}]);
  }
}
