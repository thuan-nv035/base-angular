import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { noSpace } from 'src/app/components/validator/nospace.validator';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  myForm: FormGroup;
  name!: string;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, noSpace.noSpaceValidation]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required,],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Perform actions with form data, e.g., submit to a server
      console.log(this.myForm.value);
    } else {
      // Handle form validation errors
      console.log('Form is invalid');
    }
  }
}
