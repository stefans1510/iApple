import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Phone } from 'src/app/model/phone';
import { MobileService } from 'src/app/services/mobileService';

@Component({
  selector: 'app-phone-listing',
  templateUrl: './phone-listing.component.html',
  styleUrls: ['./phone-listing.component.scss']
})
export class PhoneListingComponent {
  public phoneForm!: FormGroup;
  public phones: Phone[] = [];
  
  constructor(private _phoneService: MobileService, private formBuilder: FormBuilder) { 
    this._phoneService.getPhones().subscribe((data) => {
      this.phones = data;
    });
    
    this.initForm();
  }

  public initForm() {
    this.phoneForm = new FormGroup({
      id: new FormControl('1', [
        Validators.required
      ]),
      model: new FormControl('', [
        Validators.required
      ]),
      price: new FormControl('', [
        Validators.required
      ])
    });
  }

  public submitForm() {
    if (!this.phoneForm) {
      return;
    }
    let id = this.phoneForm.get('id')?.value;
    let model = this.phoneForm.get('model')?.value;
    let price = this.phoneForm.get('price')?.value;
    let phone = new Phone(id, model, price);
    this.createPhone(phone)
  }
  


  public getPhone(id: number) {
    this._phoneService.getPhone(id).subscribe((data) => {
      alert(JSON.stringify(data));
    })
  }

  public createPhone(phone: Phone) {
    this._phoneService.createPhone(phone).subscribe((data) => {
      this.phones.unshift(data);
    })
  }

  public deletePhone(id: number) {
    this._phoneService.deletePhone(id).subscribe((data) => {
      this._removePhoneFromList(id);
      alert("Phone je obrisan sa servera");
    })
  }

  private _removePhoneFromList(id: number) {
    let ind = this.phones.findIndex(phone => phone.id == id);
    this.phones.splice(ind, 1);
  }
}
