import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  listUsers: any[] = [];
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  createNewUser() {
    this.router.navigate(['cadastrar-usuario'])
  }

  send() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.loginService.listUsers().subscribe(data => {
        this.listUsers = data;
        const email = this.loginForm.controls['email'].value;
        const password = this.loginForm.controls['password'].value;
        const user = this.listUsers.some(login => login.email === email && login.password === password);
        if (user) {
          this.router.navigate(['lista-dispositivos']);
        } else {
          alert("Email ou senha estão incorretos, tente novamente!!");
        }
        this.isLoading = false;
      });
    }
  }

}
