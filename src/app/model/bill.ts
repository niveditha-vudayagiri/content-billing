import { Client } from "./client";

export class Bill {
    id: number = 0;
    client : Client = new Client();
    amountToPay : number = 0;
}
