import { Component } from '@angular/core';
import { SaveService } from '../services/save.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  signupForm: FormGroup;
  responseMessage: string = '';
  
  
  constructor(private fb: FormBuilder, private saveService: SaveService, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [ Validators.pattern('^[0-9]+$')]],
      fitbitUrl: ['', [Validators.pattern('(http|https):\/\/.*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.responseMessage = '';

  }


  onSubmit() {
    this.saveService.signup(this.signupForm.value).subscribe({next: (success) => {
      if (success) {
        console.log('Signup successful');
        this.responseMessage = 'Signup successful. Please Sign In. ';
        // this.router.navigate(['/login']);
      } else {
        this.responseMessage = 'Enter valid details, please try again';
      }
    },
    error: (error) => {
      console.error('Signup failed', error);
      this.responseMessage = 'Signup failed.  Please try again.'; 
    }
  });
  }

}
