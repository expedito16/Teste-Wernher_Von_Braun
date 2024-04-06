import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
newUserForm!: FormGroup;
isFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
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

  get formControls() {
    return this.newUserForm.controls;
  }

  back() {
    this.router.navigate(['']);
  }

  createUser() {
    this.isFormSubmitted = true;

    if (this.newUserForm.invalid) {
      return;
    }

    // Lógica para criar um novo usuário
    console.log(this.newUserForm.value);
  }
}
