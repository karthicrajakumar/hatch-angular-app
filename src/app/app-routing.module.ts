import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ourStoryComponent } from './pages/our-story/our-story.component';
import { whatWeDoComponent } from './pages/what-we-do/what-we-do.component';
import { codeOfSchoolComponent } from './pages/code-of-school/code-of-school.component';
import { builtByHatchComponent } from './pages/built-by-hatch/built-by-hatch.component';
import { newsComponent } from './pages/news/news.component';
import { contactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';




const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'ourStory', component: ourStoryComponent },
    { path: 'codeOfSchool', component: codeOfSchoolComponent },
    
    { path: 'whatWeDo', component:whatWeDoComponent},
    
    { path: 'contact', component: contactComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: ErrorComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
   
  ]
})
export class AppRoutingModule { }
