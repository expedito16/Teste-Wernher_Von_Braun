import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/app/core/guard/auth-guard.guard';

//Components
import { LoginComponent } from './login.component';
import { RegisterUserComponent } from './register-user/register-user.component';


const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar-usuario', component: RegisterUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
