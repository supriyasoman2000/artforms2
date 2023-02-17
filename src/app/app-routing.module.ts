import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformsComponent } from './Pages/artforms/artforms.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { SinglePageComponent } from './Pages/single-page/single-page.component';

const routes: Routes = [
  {
    path: '',component: HomeComponent
  },
  {
    path: 'contactus',component:ContactUsComponent
  },
  {
    path: 'artforms',component:ArtformsComponent
  },
  {
    path: 'login',component:LoginComponent
  },
  {
    path: 'signup',component:SignUpComponent
  },
  {
    path:'single',component:SinglePageComponent
  },
  {
    path:'gallery',component:GalleryComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
