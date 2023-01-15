import { Component } from '@angular/core';
import { Phone } from './phone/phone.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  phones: Phone[];

  constructor() {
    this.phones = [
      new Phone('iPhone X', 1000, 'x.jpg'),
      new Phone('iPhone 11', 1100, '11.jpg'),
      new Phone('iPhone 12', 1200, '12.jpg'),
      new Phone('iPhone 14', 2000, '14.jpg')
    ]
  }

  addPhone(phoneName: HTMLInputElement, phonePrice: HTMLInputElement, phoneImage: HTMLInputElement): boolean {
    this.phones.push(new Phone(phoneName.value, phonePrice.valueAsNumber, phoneImage.value));
    phoneName.value = '';
    phonePrice.value = '';
    phoneImage.value = '';
    return false;
  } 
}