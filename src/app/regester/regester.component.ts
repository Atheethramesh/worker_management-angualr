import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent {
  constructor(private fb:FormBuilder,private ds:DataService,private r:Router){
  }

  regForm=this.fb.group({
    first_name:['',[Validators.required]],
    last_name:['',[Validators.required]],
    email:['',[Validators.required]],
    username:['',[Validators.required,Validators.minLength(3)]],
    password:['',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]+')]],
    cpassword:['',Validators.required]
  })

  submitted(){
    if(this.regForm.valid){
      let first_name=this.regForm.controls.first_name.value
      let last_name=this.regForm.controls.last_name.value
      let username=this.regForm.controls.username.value
      let email=this.regForm.controls.email.value
      let pass1=this.regForm.controls.password.value
      let pass2=this.regForm.controls.cpassword.value

      if(pass1 == pass2){
        this.ds.signup(first_name,last_name,email,username,pass1).then(res=>res.json()).then(res=>{
          alert("Sign UP Completed!")
          this.r.navigate([''])
        }).catch(res=>alert("Sign Up Failed!"))
      }
      else{
        alert("password mismatches")
      }
    }
    else{
      alert('form is invalid')
      this.regForm.errors
      console.log(this.regForm.get('email')?.valid)
      console.log(this.regForm.get('username')?.valid)
      console.log(this.regForm.get('password')?.valid)
      console.log(this.regForm.get('cpassword')?.valid)
    }
   
  }



}
