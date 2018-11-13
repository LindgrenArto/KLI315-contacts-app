import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor(private router: Router, route: ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate(['/contacts/new']);
  }


  onSave(): void {
    console.log('saved');
    this.router.navigate(['/contacts']);
  }
}
