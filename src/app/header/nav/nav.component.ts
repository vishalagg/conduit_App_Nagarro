import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isUserLoggedIn : boolean
  username : string
  constructor(private userService: UserService) {
   }

  ngOnInit() {
    this.userService.currentUsername.subscribe(username => {
      this.username = username
    })
  }

}
