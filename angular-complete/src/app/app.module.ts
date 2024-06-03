import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AngularFireModule} from '@angular/fire/compat'

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environments';
import { HeaderComponent } from './header/header.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { PagesComponent } from './component/pages/pages.component';
import { CartPageComponent } from './component/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './component/pages/food-page/food-page.component';
import { HomeComponent } from './component/pages/home/home.component';
import { SearchComponent } from './component/pages/search/search.component';
import { TagComponent } from './component/pages/tag/tag.component';
import { TitleComponent } from './component/pages/title/title.component';
import { RegisterComponent } from './component/register/register.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { QldhComponent } from './qldh/qldh.component';
import { StaffComponent } from './staff/staff.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrangChuComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    LoginComponent,
    PagesComponent,
    CartPageComponent,
    FoodPageComponent,
    HomeComponent,
    SearchComponent,
    TagComponent,
    TitleComponent,
    RegisterComponent,
    VarifyEmailComponent,
    QldhComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
