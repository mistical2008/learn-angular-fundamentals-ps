import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {
  userName: string
  password: string

  constructor() { }

  ngOnInit(): void {
  }

  login(values: any) {
    console.log(values)
  }

}
