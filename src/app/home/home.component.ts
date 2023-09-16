import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data:any=[]

  constructor(private ds:DataService,private r:Router){
    this.ds.getEmp().then(res=>res.json()).then(res=>this.data=res)
  }

  deletepro(e:any){
    let id=e.target.id
    console.log(id)
    this.ds.deleteEmp(id).then(res=>res.json()).then(res=>{
      alert("deleted")
      this.r.navigateByUrl('/',{ skipLocationChange: true }).then(() => {
        this.r.navigate(['home'])
      });
    }).catch(res=>console.log(res.error))
  }

  logout(){
    localStorage.clear()
    this.r.navigate([''])
  }

}
