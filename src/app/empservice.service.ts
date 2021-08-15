import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { emp } from './employee/employee.component';
@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  
  header : any;
  constructor(private http:HttpClient) { 
      const headersettings:{[name:string]:string|string[];
      }={};    
      this.header= new HttpHeaders(headersettings);  }

  createemp(data:emp):Observable<emp>
  {
    return this.http.post<emp>("https://localhost:44338/api/Employees",data);
  } 
  Updateemp(id: any,data:emp):Observable<emp>
  {
     
    return this.http.put<emp>("https://localhost:44338/api/Employees/"+id,data);
  } 
  GetAllemp():Observable<emp[]>
  {
    return this.http.get<emp[]>("https://localhost:44338/api/Employees");
  }
  GetOneemp(id:any):Observable<emp>
  {
    return this.http.get<emp>("https://localhost:44338/api/Employees"+"/"+id);
  }
  Deleteemp(id:any):Observable<emp>
  {
    return this.http.delete<emp>("https://localhost:44338/api/Employees"+"/"+id);
  }
  /*Deleteall():Observable<emp[]>
  {
    return this.http.delete<emp[]>("https://localhost:44310/api/empdeleteall");
  }*/
}
