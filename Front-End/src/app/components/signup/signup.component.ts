import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import 'rxjs/Rx';
import { User } from 'src/app/interface/client';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  register: User = {
    username: "",
    password1: "",
    password2: "",
    email: "",
}  

  constructor(private tasksSer: TasksService, private router:Router,
              private formBuilder: FormBuilder,) { }

form: FormGroup;
ngOnInit() {

  this.form = new FormGroup({
    'UsernameControl': new FormControl('', [Validators.required]),
    'password1Control': new FormControl('', [Validators.required]),
    'password2Control': new FormControl('', [Validators.required]),
    'emailControl': new FormControl('', [Validators.required, Validators.email]),
      
  });
}


// convenience getter for easy access to form fields

checkFormsFields() {
  for (let inner in this.form.controls) {
    this.form.get(inner).markAsTouched();
  }
}

SubmitPost({ valid, value }) {
    debugger;

    this.checkFormsFields();
     if(valid){    
      this.tasksSer.CreateUser(this.register).subscribe(
            result => {
              alert("You Are Registered Succesfully")
                this.router.navigate(['/login'])
                console.log(result);
            },
            error => {
              console.log(error)
                alert("There is an Error")
        });   
    }
  }
}