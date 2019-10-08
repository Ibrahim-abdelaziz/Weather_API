import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/Rx';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit  {

city:any=[];

  constructor(private tasksSer: TasksService, private router:Router) {}

  ngOnInit() {
  }

 response: any = {};
 
 GetWeather() {

  this.tasksSer.getWeather().subscribe(
    result => {
      console.log(result);
      
      this.response = result;
      this.city = this.response.results;
    },
    error => {
      console.log(error)
    },
    () => {
      console.log('Done');
    })
}
}

  
  




