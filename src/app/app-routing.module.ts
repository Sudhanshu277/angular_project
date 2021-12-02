import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { StoriesComponent } from './stories/stories.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';


const Routes: Routes = [
  {path:'' , component:HomeComponent },
  {path:'course' , component:CoursesComponent },
  {path:'stories' , component:StoriesComponent },
  {path:'about' , component:AboutComponent },
  {path:'contact' , component:ContactComponent },

]


@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
