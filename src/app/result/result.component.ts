import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Answers } from '../model/answers';
import { Questions } from '../model/questions';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

count:number = 0;
quizAnsArr :string[] = [];
quizAns = new Map();
answers:Array<Answers> = [];
view:boolean = false;

percentage:number = 0;
  constructor( public http:HttpClient,public router:Router) { }

  ngOnInit(): void {
    
    
    this.http.get('/assets/answers.json').subscribe((data:any) =>this.answers=data.answers);
    
    this.quizAns = JSON.parse(localStorage['myMap']);
    this.quizAnsArr = Object.values(this.quizAns);

    
    
  }

gradeQuiz(){
    
    for (let i = 0; i < this.answers.length; i++) {
       if(this.answers[i].correctAns == this.quizAnsArr[i]){
        console.log(this.quizAnsArr[i]);
        this.count++;
        
       }
      
    }

    this.view = true;
    
    this.percentage = Math.round((this.count/this.answers.length) * 100);
  }

  backToQuiz(){
    this.router.navigate(['/quiz']);
  }
      
}

  

