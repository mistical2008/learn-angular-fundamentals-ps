import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'user-login-form',
  templateUrl: './login-form.component.html',
  styles: [`
    em {float: right; color: red;}
    `]
})
export class LoginFormComponent implements OnInit {
  userName: string
  password: string
  mouseoverLogin: boolean

  constructor(
    private auth: AuthService,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  login(formValues: {userName: string, password: string}): void {
    this.auth.loginUser(
      formValues.userName,
      formValues.password
    )
    this.route.navigate(['/events'])
  }

  cancel(): void {
    this.route.navigate(['/events'])
  }

}
