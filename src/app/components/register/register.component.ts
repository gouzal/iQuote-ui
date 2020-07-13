import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  errorMessage: string;
  currentDate = new Date();
  user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.user = new User(
      this.f.userName.value,
      this.f.password.value,
      this.f.firstName.value,
      this.f.lastName.value,
      this.f.email.value
    );

    this.userService.createUser(this.user);
    // .pipe(first())
    // .subscribe(
    //   data => {
    //     this.router.navigate(['/quotes']);
    //   },
    //   error => {
    //     this.errorMessage = error;
    //     // this.loading = false;
    //   }
    // );
  }

}
