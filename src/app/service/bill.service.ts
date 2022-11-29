import { environment } from './../../environments/environment.prod';
import { Bill } from './../model/bill';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) {}
   
  addBill(bill: Bill): Observable<Bill>{
    return this.http.post<Bill>(environment.serviceUrl+'bills',bill);
  }

  getAllBills(): Observable<Bill[]>{
    return this.http.get<Bill[]>(environment.serviceUrl+'bills');
  }

  updateBill(bill: Bill): Observable<Bill>{
    return this.http.put<Bill>(environment.serviceUrl+'bills/'+bill.id,bill);
  }

  deleteBill(bill: Bill): Observable<Bill>{
    return this.http.delete<Bill>(environment.serviceUrl+'bills/'+bill.id);
  }

}
