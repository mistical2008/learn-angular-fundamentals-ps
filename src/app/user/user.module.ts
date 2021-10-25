import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ProfileComponent } from "./profile/profile.component";
import { userRoutes } from "./user.routes";
import { LoginFormComponent } from "./login-form/login-form.component";

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(userRoutes)],
  declarations: [ProfileComponent, LoginFormComponent],
})
  export class UserModule {}
