import { BillService } from '../../service/bill.service';
import { Observable } from 'rxjs';
import { ClientService } from '../../service/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/client';
import { FormsModule,ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Bill } from '../../model/bill';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  clientArr: Client[] =[];
  billArr: Bill[] = [];
  billObj: Bill = new Bill();
  clientObj :Client = new Client;
  editBillObj :Bill =new Bill();
  deleteBillObj : Bill =new Bill();
  constructor(private clientService: ClientService, 
    private formBuilder: FormBuilder,
    private billService: BillService) { }

  addBillForm = this.formBuilder.group({
    client: '',
    amountToPay: 0
  });

  ngOnInit(): void {
    this.clientObj= new Client();
    this.billObj=new Bill();
    this.editBillObj=new Bill();
    this.deleteBillObj= new Bill();
    this.getAllClients();
    this.getAllBills();
  }

  getAllClients(){
    this.clientService.getAllClients().subscribe({
      next: (res)=> { this.clientArr=res },
      error: ()=> alert('Cannot get all clients')
    });
  }

  addBill(bill: Bill){
    this.billService.addBill(this.addBillForm.value).subscribe({
      next: (res) => { this.getAllBills(); },
      error: ()=> alert('Cannot add bill')
    })
  }

  getAllBills(){
    this.billService.getAllBills().subscribe({
      next: (res)=> this.billArr=res,
      error: () => alert('Cannot get all bills')
    })
  }

  onSubmit(){
    this.billObj.amountToPay = Number.parseInt(this.addBillForm.value["amountToPay"]);
    this.billObj.client = this.clientArr.find(x => x.name === this.addBillForm.value["client"])!;
    this.addBill(this.billObj);
    this.addBillForm.reset();

    //Update the amount for client
    this.clientObj=this.billObj.client;
    this.clientObj.pendingAmount+=Number(this.billObj.amountToPay);
    this.clientService.updateClient(this.clientObj).subscribe({
      next: (res)=> this.ngOnInit,
      error: () => alert('Cannot update client')
    })
  }

  callEdit(bill: Bill)
  {
      this.editBillObj=bill;
  }

  editBill(){
    
    this.billService.updateBill(this.editBillObj).subscribe({
      next: () => { this.ngOnInit() },
      error: () => alert("Cannot add bill!")
     } );
  }

  callDelete(bill: Bill)
  {
      this.deleteBillObj=bill;
  }

  deleteBill(){
    this.billService.deleteBill(this.deleteBillObj).subscribe({
      next: () => { this.ngOnInit() },
      error: () => alert("Cannot delete client!")
     } );
  }

}
