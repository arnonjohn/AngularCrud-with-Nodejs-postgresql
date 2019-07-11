import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  BaseApiurl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  createEmployee(ename, edesignation, esalary, eemail, ephone) {
    return this.http.post(this.BaseApiurl + '/newemployee', { ename, edesignation, esalary, eemail, ephone });
  }

  getEmpDetails(): Observable<any> {
    return this.http.get(this.BaseApiurl + '/fetchempdetails', { responseType: 'json' })
  }

  getEmpDetailsById(eid: any): Observable<any> {
    return this.http.get(this.BaseApiurl + '/getempdetailsbyid/' + eid, { responseType: 'json' })
  }
  updateEmpList(eList) {
    return this.http.post(this.BaseApiurl + '/updateEpmListbyId', { eList })
  }
  deleteEmplistbyid(eid: any) {
    return this.http.post(this.BaseApiurl + '/deleteEmplistbyId/' + eid, { responseType: 'json' })
  }



}
