import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListQuotesComponent } from './components/list-quotes/list-quotes.component';
import { SingleQuoteComponent } from './components/list-quotes/single-quote/single-quote.component';
import { CreateQuoteComponent } from './components/list-quotes/create-quote/create-quote.component';
import { EditQuoteComponent } from './components/list-quotes/edit-quote/edit-quote.component';

const routes: Routes = [
  // { path: '', redirectTo: '/quotes', pathMatch: 'full' },
  { path: 'quotes', component: ListQuotesComponent },
  { path: 'quotes/:id', component: SingleQuoteComponent },
  { path: 'quotes/create', component: CreateQuoteComponent },
  { path: 'quotes/edit/:id', component: EditQuoteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: ListQuotesComponent },
  // { path: '**', component: PageNotFoundComponent  },
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
