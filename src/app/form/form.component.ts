import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

function phoneNameValidation(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^{6, 20}$/)) {
    console.log('Phone name must contain at least 6 charachters');
    return {invalidPhone: true};
  } else {
    console.log('Phone name OK');
  }
  return {invalidPhone: false};
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  phoneForm: FormGroup;
  phoneName: AbstractControl;

  constructor (fb: FormBuilder) {
    this.phoneForm = fb.group({
      'phoneName': ['', Validators.compose([
        Validators.required, phoneNameValidation
      ])]
    });

    this.phoneName = this.phoneForm.controls['phoneName'];
  }

  onSubmit(vlaue: string): void {

  }

  ngOnInit() {
  }
}