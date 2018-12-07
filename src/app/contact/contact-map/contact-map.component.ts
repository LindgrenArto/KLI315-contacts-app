import {Component, OnInit} from '@angular/core';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.css']
})
export class ContactMapComponent implements OnInit {

  address: string;
  city: string;
  mapUrl: string;

  constructor(private route: ActivatedRoute, private toolbar: ToolbarService) {
  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Map'));
    this.address = this.route.snapshot.paramMap.get('address');
    this.city = this.route.snapshot.paramMap.get('city');
    this.createMapUrl();
  }

  createMapUrl() {
    const googleMapsUrlBase = 'https://www.google.com/maps?q=';
    const googleMapsUrlParams = '&output=embed';
    this.mapUrl = googleMapsUrlBase + this.address + this.city + googleMapsUrlParams;
    console.log(this.mapUrl);
  }
}
