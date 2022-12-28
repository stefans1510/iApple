import { 
  Component,
  OnInit,
  Input
 } from '@angular/core';

import { Offers } from './offers.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  @Input() offer: Offers;

  constructor() {
    this.offer = new Offers('2 for only $1500!', "Don't miss the chance to grab two iPhone Xs for this great price!", '20.01.2023')
  }

  ngOnInit(): void {
  }
}
