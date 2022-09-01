import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answers } from '../model/answers';
import { Questions } from '../model/questions';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
answers:Array<Answers> = [];
questions:Array<Questions> = [];

quizAns=new Map(); 
  constructor(public http:HttpClient,public router:Router) { }

  ngOnInit(): void {
    this.http.get("/assets/questions.json").subscribe((data:any)=>this.questions=data.questions);
    
  }

  getOption(qid:number,option:string){
    this.quizAns.set(qid,option);
    
  }
submitAnswers(){
  
  if(this.quizAns.size < 3){
    alert("Please enter all the  questions");
  }else{
    localStorage['myMap'] = JSON.stringify(Array.from(this.quizAns.values()));
    this.router.navigate(['/review']);

  }
}
}
