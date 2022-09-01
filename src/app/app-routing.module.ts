import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:'home',component:HomeComponent},
{path:'review',component:ReviewComponent},
{path:'results',component:ResultComponent},
{path:'quiz',component:QuizComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
