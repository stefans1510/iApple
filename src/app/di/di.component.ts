import { Component, OnInit } from '@angular/core';
import { Phone } from '../model/phone';
import { MobileService } from '../services/mobileService';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.scss']
})
export class DIComponent implements OnInit {
  constructor(private mobileService: MobileService) {
    this.mobileService = mobileService;
  }

  phonePrice = this.mobileService.getPrice(2);

  ngOnInit(): void {
  }
}
