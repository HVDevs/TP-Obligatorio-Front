import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {
  }

  createTransactionn(){
    // TODO 
  }

  // async getTransactions() : Promise<Observable<Transaction>> {
  //   return
  // }
}
