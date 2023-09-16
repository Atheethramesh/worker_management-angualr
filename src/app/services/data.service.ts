import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  signup(first_name:any,last_name:any,username:any,email:any,password:any){

    let data={
      first_name,
      last_name,
      username,
      email,
      password
    }

  return fetch('http://127.0.0.1:8000/emp/user/', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

  }
  signin(username:any,password:any){
    let data={
      username,
      password
    }
    return fetch('http://127.0.0.1:8000/emp/token', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    
  }
  getEmp(){
    return fetch('http://127.0.0.1:8000/emp/empl/',{
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
})
  }
  deleteEmp(id:any){
    return fetch(`http://127.0.0.1:8000/emp/empl/${id}/`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
})
  }
  addEmp(data:any){
    return fetch('http://127.0.0.1:8000/emp/empl/', {
    method: 'POST',
    body:data,
    headers: {
      // 'Content-type': 'application/json; charset=UTF-8',
      'Accept':'*/*',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
})
  }

}