import { ClientService } from './../../service/client.service';
import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientObj :Client = new Client();
  clientArr : Client[]= [];
  addClientName : string = '';
  editClientObj:Client =new Client();
  deleteClientObj: Client = new Client();
  

  constructor(private clientService: ClientService) { }

  
  ngOnInit(): void {
    this.clientObj = new Client(); 
    this.clientArr =[];
    this.addClientName = '';
    this.editClientObj = new Client();
    this.deleteClientObj = new Client();
    this.getAllClients();
  }

  addClient(){
    this.clientObj.name=this.addClientName;
    this.clientService.addClient(this.clientObj).subscribe({
      next: () => this.ngOnInit(),
      error: () => alert("Cannot add client!")
     } );
  }

  getAllClients(){
    this.clientService.getAllClients().subscribe({
      next: (res)=> this.clientArr =res,
      error: () => alert('Cannot get all Clients!')
    })
  }

  callEdit(client: Client)
  {
      this.editClientObj=client;
  }

  editClient(){
    
    this.clientService.updateClient(this.editClientObj).subscribe({
      next: () => { this.ngOnInit() },
      error: () => alert("Cannot add client!")
     } );

  }

  callDelete(client: Client)
  {
      this.deleteClientObj=client;
  }

  deleteClient(){
    this.clientService.deleteClient(this.deleteClientObj).subscribe({
      next: () => { this.ngOnInit() },
      error: () => alert("Cannot delete client!")
     } );
  }
}
