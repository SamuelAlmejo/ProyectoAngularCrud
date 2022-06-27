import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hhtp: HttpClient) { }

  postEmployee(data : any){
    return this.hhtp.post<any>("http://localhost:3000/posts", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getEmployee(){
    return this.hhtp.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateEmployee(data : any, id:number){
    return this.hhtp.put<any>("http://localhost:3000/posts/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteEmployee(id : number){
    return this.hhtp.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
