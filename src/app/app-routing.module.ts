import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./auth/auth-guard.service";
import { AuthenticationService } from "./auth/authentication.service";

import { LoginComponent } from "./auth/container/login/login.component";
import { RegisterComponent } from "./auth/container/register/register.component";
import { DiaryListComponent } from "./diary/diary-list/diary-list.component";
import { DiaryNoteDetailComponent} from "./diary/diary-note-detail/diary-note-detail.component";

const routes: Routes = [
  { path: "signup", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "diary", component: DiaryListComponent, canActivate:[AuthGuardService]},
  { path: "diary/detail/:id", component:DiaryNoteDetailComponent, canActivate:[AuthGuardService]},
  { path: "", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [AuthGuardService, AuthenticationService],
})
export class AppRoutingModule {}
