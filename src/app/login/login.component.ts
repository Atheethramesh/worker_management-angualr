import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder,private ds:DataService,private r:Router){

  }

  logForm = this.fb.group({
    username:['',[Validators.required,Validators.minLength(3)]],
    password:['',[Validators.required,Validators.minLength(3)]]
  })

  submitted(){
    if(this.logForm.valid){
    let user=this.logForm.controls.username.value
    let pswd=this.logForm.controls.password.value
    console.log(user,pswd)

    this.ds.signin(user,pswd).then(res=>res.json()).then(res=>{console.log(res)
    localStorage.setItem('token',res['token'])
    if(res['token'] && user=='admin'){
    alert("Login Successfull!")
    this.r.navigate(['adhome'])
    }
    else if(res['token']){
      alert("Login Successfull!")
    this.r.navigate(['home'])
    }
    else{
      alert('Invalid User')
    }
  }).catch(res=>alert("Login failed"))
  }
  else{
    alert('Invalid Form')
  }
}

}
