import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
newUserForm!: FormGroup;
isLoading = false;
listUsers: User[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.newUserForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  back() {
    this.isLoading = true;
    this.router.navigate(['']);
    this.isLoading = false;
  }

  createUser() {
    if (this.newUserForm.valid) {
      this.isLoading = true;

      this.loginService.listUsers().subscribe((data: User[]) => {
        this.listUsers = data;
        const userEmail = this.newUserForm.controls['email'].value;
        const listEmail = this.listUsers.filter((dados) => dados.email);
        const userExist = listEmail.some(user => user.email === userEmail);

        if (userExist) {
          alert("Email já existe, digite um novo email!!");
        } else {
          const name = this.newUserForm.get('name')!.value;
          const email = this.newUserForm.get('email')!.value;
          const password = this.newUserForm.get('password')!.value;
          const newUser = { name: name, email: email, password: password };

          this.loginService.createNewUser(newUser).subscribe(() => {
            this.router.navigate(['']);
            this.isLoading = false;
          }, (error) => {
            console.log('Problema ao castrar novo usuário', error);
            this.isLoading = false;
          });
        }
      });
    }
  }

}
