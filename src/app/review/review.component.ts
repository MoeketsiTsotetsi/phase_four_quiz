import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Questions } from '../model/questions';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
quizAns = new Map();
obj = new Object();
questions:Array<Questions> = [];
  constructor( public http:HttpClient,public router:Router) { }

  ngOnInit(): void {
    this.quizAns = JSON.parse(localStorage['myMap']);
    
    
    this.http.get("/assets/questions.json").subscribe((data:any)=>this.questions=data.questions);
    
  }

  goToResultsPage(){
   this.router.navigate(['/results']);
  }

  goBackToQuiz(){
    this.router.navigate(['/quiz']);
  }

}



