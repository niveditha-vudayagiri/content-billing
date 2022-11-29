import { BillService } from './../../service/bill.service';
import { ClientService } from './../../service/client.service';
import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/model/bill';
import { Client } from 'src/app/model/client';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private billService: BillService,private clientService: ClientService) { }

  billArr: Bill[] = [];
  clientArr: Client[] = [];
  totalPaid: number =0;
  totalPending: number = 0;
   ngOnInit(): void {
     this.totalPaid =0;
     this.totalPending =0;
    this.billArr = [];
    this.GetAllBillsAndClients();
  }

  async GetAllBillsAndClients(){
    this.billArr = await lastValueFrom(this.billService.getAllBills());
    this.clientArr = await lastValueFrom(this.clientService.getAllClients());
    this.GetTotalPaid();
    this.GetTotalPending();
  }

  GetTotalPaid(){
    
    this.billArr.forEach((bill, index) =>{
      this.totalPaid+=Number(bill["amountToPay"]);
    })
  }

  GetTotalPending(){
    
    this.clientArr.forEach((client, index) =>{
      this.totalPending+=Number(client["pendingAmount"]);
    })
  }
}
