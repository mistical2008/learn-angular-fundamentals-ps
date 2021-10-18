import { Routes } from "@angular/router";
import { LoginFormComponent } from "./login-form/login-form.component";
import { ProfileComponent } from "./profile/profile.component";

export const userRoutes: Routes = [
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "login",
    component: LoginFormComponent,
  },
];
