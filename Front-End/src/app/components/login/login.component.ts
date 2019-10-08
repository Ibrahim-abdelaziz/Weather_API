import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { login } from 'src/app/interface/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  SignIn : login = {
    username: "",
    password: "",
}
    
  constructor(private tasksSer: TasksService, private router:Router,
    private formBuilder: FormBuilder,) { }

    form: FormGroup;
    ngOnInit() {
    
      this.form = new FormGroup({
        'UsernameControl': new FormControl('', [Validators.required]),
        'passwordControl': new FormControl('', [Validators.required]),
      });
    }

checkFormsFields() {
  for (let inner in this.form.controls) {
    this.form.get(inner).markAsTouched();
  }
}
login({ valid, value }) {
    

    this.checkFormsFields();
     if(valid){    
      this.tasksSer.Login(this.SignIn).subscribe(
            result => {
              alert("You Are Login Succesfully")
                this.router.navigate(['/'])
                console.log(result);
            },
            error => {
              console.log(error)
              alert("There is an Error") 
        });   
    }
  }
}