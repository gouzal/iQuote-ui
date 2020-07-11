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
  returnUrl: string;
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
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  initForm()
  {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      password: ['', [Validators.required], Validators.pattern(/[0-9a-zA-Z]{6,}/)]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit()
  {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.userService.createUser(this.user);
    // .pipe(first())
    // .subscribe(
    //   data => {
    //     this.router.navigate([this.returnUrl]);
    //   },
    //   error => {
    //     this.errorMessage = error;
    //     // this.loading = false;
    //   }
    // );
  }

}
