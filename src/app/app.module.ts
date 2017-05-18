import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule }        from './app-routing.module';


import { AppComponent } from './app.component';
import { ourStoryComponent } from './pages/our-story/our-story.component';
import { whatWeDoComponent } from './pages/what-we-do/what-we-do.component';
import { codeOfSchoolComponent } from './pages/code-of-school/code-of-school.component';
import { builtByHatchComponent } from './pages/built-by-hatch/built-by-hatch.component';
import { newsComponent } from './pages/news/news.component';
import { contactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';




@NgModule({
  declarations: [
    AppComponent,
    ourStoryComponent,
    whatWeDoComponent,
    codeOfSchoolComponent,
    builtByHatchComponent,
    newsComponent,
    HomeComponent,
    ErrorComponent,
    contactComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {// Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}