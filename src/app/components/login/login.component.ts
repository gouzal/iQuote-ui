import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  returnUrl: string;
  submitted: boolean = false;
  currentDate = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]] // Validators.pattern(/[0-9a-zA-Z]{6,}/)
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const userName = this.f.userName.value;
    const password = this.f.password.value;
    this.authService.login(userName, password)
    .subscribe(
      data => {
        console.log(data);
        // this.router.navigate([this.returnUrl]);
      },
      error => {
        this.errorMessage = error;
      }
    );
  }

}
