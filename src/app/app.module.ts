import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ArtformsComponent } from './Pages/artforms/artforms.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { LoginComponent } from './Pages/login/login.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { NavbarComponent } from './Units/navbar/navbar.component';
import { FooterComponent } from './Units/footer/footer.component';
import { SinglePageComponent } from './Pages/single-page/single-page.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtformsComponent,
    SignUpComponent,
    LoginComponent,
    ContactUsComponent,
    NavbarComponent,
    FooterComponent,
    SinglePageComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
