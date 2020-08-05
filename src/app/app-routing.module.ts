import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListQuotesComponent } from './components/list-quotes/list-quotes.component';
import { SingleQuoteComponent } from './components/list-quotes/single-quote/single-quote.component';
import { FormQuoteComponent } from './components/list-quotes/form-quote/form-quote.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/quotes', pathMatch: 'full' },
  { path: 'quotes', component: LayoutComponent, /*canActivate: [AuthGuard],*/ children: [
    { path: '', component: ListQuotesComponent },
    { path: 'create', component: FormQuoteComponent },
    { path: ':id/edit', component: FormQuoteComponent },
    { path: ':id', component: SingleQuoteComponent },
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'quotes/:id', component: SingleQuoteComponent, canActivate: [AuthGuardService] },
  // { path: 'quotes/create', component: CreateQuoteComponent, canActivate: [AuthGuardService] },
  // { path: 'quotes/edit/:id', component: EditQuoteComponent, canActivate: [AuthGuardService] },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

export const routingComponents = [
  SingleQuoteComponent,
  FormQuoteComponent,
  ListQuotesComponent,
  LoginComponent,
  RegisterComponent,
  LayoutComponent
]
