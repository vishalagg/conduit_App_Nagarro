import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { UserService } from '../user.service';
import { User } from '../shared/signinDataType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  password : string
  email : string
  signinForm : FormGroup
  authToken: string
  constructor(private formBuilder: FormBuilder, private userService: UserService,
              private router: Router) {
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    });
   }

  ngOnInit() {
  }

  loginUser() {
    if(this.signinForm.valid) {
      console.log(this.signinForm.value);
      let userObject = {
        user: this.signinForm.value
      }
      this.userService.loginUser(userObject).subscribe((response : {user : User}) => {
        localStorage.setItem("token",response.user.token);
        this.userService.setUsername(response.user.username)
        console.log("Token: "+response.user.token);
        this.router.navigate(['/'])
      })
    }
  }

}
