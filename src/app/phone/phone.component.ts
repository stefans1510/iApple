import {
  Component,
  OnInit,
  HostBinding,
  Input
} from '@angular/core';

import { Phone } from './phone.model';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})

export class PhoneComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() phone: Phone;

  constructor() {
    this.phone = new Phone('iphone X', 1000, 'x.jpg')
  }

  ngOnInit() {
  }
}
