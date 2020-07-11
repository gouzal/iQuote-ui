import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ListQuotesComponent } from './components/list-quotes/list-quotes.component';
import { SingleQuoteComponent } from './components/list-quotes/single-quote/single-quote.component';
import { CreateQuoteComponent } from './components/list-quotes/create-quote/create-quote.component';
import { EditQuoteComponent } from './components/list-quotes/edit-quote/edit-quote.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { QuoteService } from './services/quote.service';

import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ListQuotesComponent,
    LayoutComponent,
    SingleQuoteComponent,
    CreateQuoteComponent,
    EditQuoteComponent
  ],
  imports: [
    BrowserModule,
    NgxBootstrapIconsModule.pick(allIcons),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    QuoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
