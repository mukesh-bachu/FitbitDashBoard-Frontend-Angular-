import { Component } from '@angular/core';
import { SaveService } from '../../services/save.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  signupForm: FormGroup;
  responseMessage: string;
  
  
  constructor(private fb: FormBuilder, private saveService: SaveService) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      fitbitUrl: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.responseMessage = '';

  }


  onSubmit() {
    this.saveService.signup(this.signupForm.value).subscribe(
      response => {
        console.log('Signup successful', response);
        this.responseMessage = 'Signup successful ';
      },
      error => {
        console.error('Signup failed', error);
        this.responseMessage = 'Signup failed: '; 
      }
    );
  }

}
