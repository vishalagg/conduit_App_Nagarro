import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username : string
  password : string
  email : string
  signupForm : FormGroup 
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    });
   }

  ngOnInit() {
  }

  registerUser() {
    if(this.signupForm.valid) {
      console.log(this.signupForm.value);
      let userObject = {
        user: this.signupForm.value
      }
      this.userService.registerUser(userObject).subscribe(response => {
        console.log(response);
      })
    }
  }

}
