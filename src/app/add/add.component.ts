import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  file:any;

  constructor(private fb:FormBuilder,private ds:DataService,private r:Router){}

  proForm=this.fb.group({
    name:['',[Validators.required]],
    place:['',[Validators.required]],
    phone:['',[Validators.required]],
    stime:['',[Validators.required]],
    etime:['',[Validators.required]],
    category:['',[Validators.required]],
  })

  uploadImage(e:any){
    this.file=e.target.files[0]
    console.log(this.file)
  }

  submitted(){
    console.log(this.proForm.value)

    let n:any=this.proForm.controls.name.value
    let p:any=this.proForm.controls.place.value
    let ph:any=this.proForm.controls.phone.value
    let st:any=this.proForm.controls.stime.value
    let et:any=this.proForm.controls.etime.value
    let cat:any=this.proForm.controls.category.value

    let formd= new FormData()
    formd.append('name',n)
    formd.append('place',p)
    formd.append('phone',ph)
    formd.append('stime',st)
    formd.append('etime',et)
    formd.append('category',cat)
    formd.append('image',this.file,this.file.name)

    this.ds.addEmp(formd).then(res=>res.json()).then(res=>{
      if(res){
        alert("worker added successfully!")
        this.r.navigate(['adhome'])
      }
      else{
        alert("Something wrong!")
      }
    })

  }


}
