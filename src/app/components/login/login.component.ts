import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'
import {ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatButtonModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
    ){}
  login_section = this.fb.group({
    userId: [''],
    password: ['']
  });
  registration_section = this.fb.group({
    email: [''],
    firstName: [''],
    middleName: [''],
    lastName: [''],
    mobile: [],
    password: ['']
  })
  registration_flag: Boolean = false;
/**
 * function to login
 * @returns 
 */
  login() {
      const sub = this.loginService.login(this.login_section.value).subscribe(
        {
          next: (currentObserverValue) => {
            this.router.navigate(['/','forum/builder']);
          },
          error: (error) => {
            //todo
          },
          complete: () => {
            sub.unsubscribe();
          }
        })
  }
/**
 * function to register new user
 */
  registerUser() {
    const regSub =  this.loginService.registerUser(this.registration_section.value).subscribe(
      {
        next: (currentObserverValue) => {
          this.toggleForm();
        },
        error: (error) => {
          //todo
        },
        complete: () => {
          regSub.unsubscribe();
        }
      }
    )

  }
  /**
   * function to toggle the login or registration section
   */
  toggleForm() {
    this.registration_flag = !this.registration_flag;
  }
}
