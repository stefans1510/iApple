import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { AboutUs } from './about-us.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit{
  @Input() aboutUs: AboutUs;

  constructor() {
    this.aboutUs = new AboutUs("Who are we?", "We are Europe's no1 Apple distributor...", 'iapple@gmail.com');
  }

  ngOnInit() {
  }
}
