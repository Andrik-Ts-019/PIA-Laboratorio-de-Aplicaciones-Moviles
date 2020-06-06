import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  get name() {
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get phone() {
    return this.registrationForm.get('phone');
  }

  get street() {
    return this.registrationForm.get('address.street');
  }

  get city() {
    return this.registrationForm.get('address.city');
  }

  get zip() {
    return this.registrationForm.get('address.zip');
  }

  public errorMessages = {
    name: [
      { type: 'required', message: 'El nombre es requerido' },
      { type: 'maxLength', message: 'El nombre no puede ser mas largo de 100 caracteres' },
    ],
    email: [
      { type: 'required', message: 'El email es requerido' },
      { type: 'maxLength', message: 'El email no puede ser mas largo de 100 caracteres' },
    ],
    phone: [
      { type: 'required', message: 'El numero de teléfono es requerido' },
      { type: 'maxLength', message: 'El numero de teléfono no puede ser mas largo de 100 caracteres' },
    ],
    street: [
      { type: 'required', message: 'El nombre de la calle es requerido' },
      { type: 'maxLength', message: 'El nombre de la calle no puede ser mas largo de 100 caracteres' },
    ],
    city: [
      { type: 'required', message: 'El nombre de la ciudad es requerido' },
      { type: 'maxLength', message: 'El nombre de la ciudad no puede ser mas largo de 100 caracteres' },
    ],
    state: [
      { type: 'required', message: 'El nombre del estado es requerido' },
      { type: 'maxLength', message: 'El nombre del estado no puede ser mas largo de 100 caracteres' },
    ],
    zip: [
      { type: 'required', message: 'El código zip es requerido' },
      { type: 'maxLength', message: 'El código zip no puede ser mas largo de 100 caracteres' },
    ],
  };

  registrationForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', 
      [
      Validators.required, 
      Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9]+.[a-zA-Z]{2,4}$')
      ]
    ],
    phone: ['', 
     [
      Validators.required, 
      Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
     ]
    ],
    address: this.formBuilder.group({
      street: ['', [Validators.required, Validators.maxLength(100)]],
      city: ['', [Validators.required, Validators.maxLength(100)]],
      state: ['', [Validators.required, Validators.maxLength(100)]],
      zip: ['', 
      [
        Validators.required,
        Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')
      ]] 
    })
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  public submit() {
    console.log(this.registrationForm.value);
  }

}
