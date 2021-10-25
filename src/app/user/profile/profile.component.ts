import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../login-form/auth.service";

@Component({
  selector: "user-profile",
  templateUrl: "./profile.component.html",
  styles: [],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl(this.auth.currentUser.firstName),
      lastName: new FormControl(this.auth.currentUser.lastName),
    });
  }

  saveProfile(values: { firstName: string; lastName: string }) {
    this.auth.updateCurrentUser(values.firstName, values.lastName);
    this.router.navigate(["/events"]);
  }

  close() {
    this.router.navigate(["/events"]);
  }
}
