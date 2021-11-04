import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../login-form/auth.service";

@Component({
  selector: "user-profile",
  templateUrl: "./profile.component.html",
  styles: [
    `
      .error em {
        color: #e05c65;
        float: right;
        padding-left: 10px;
      }
      .error input {
        background-color: #e05c65;
      }
      .error :placeholer {
        color: #ffffff
      }
      .error ::webkit-input-placeholder {
        color: #ffffff;
      }
      .error ::moz-placeholder {
        color: #ffffff;
      }
      .error :moz-placeholder {
        color: #ffffff;
      }
      .error :ms-input-placeholder {
        color: #ffffff;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    (this.firstName = new FormControl(
      this.auth.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]
    )),
      (this.lastName = new FormControl(
        this.auth.currentUser.lastName,
        Validators.required
      )),
      (this.profileForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }));
  }

  isValidFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  isValidLastName() {
    return this.lastName.valid || this.firstName.untouched;
  }

  saveProfile(values: { firstName: string; lastName: string }) {
    this.auth.updateCurrentUser(values.firstName, values.lastName);
    this.router.navigate(["/events"]);
  }

  close() {
    this.router.navigate(["/events"]);
  }
}
