import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Client[]>{
    return this.http.get<Client[]>(environment.serviceUrl+"clients");
  }

  addClient(client : Client) : Observable<Client>{
    return this.http.post<Client>(environment.serviceUrl+"clients",client);
  }

  updateClient(client: Client): Observable<Client>{
    return this.http.put<Client>(environment.serviceUrl+"clients/"+client.id,client);
  }

  deleteClient(client:Client): Observable<Client>{
    return this.http.delete<Client>(environment.serviceUrl+"clients/"+client.id);
  }
}
