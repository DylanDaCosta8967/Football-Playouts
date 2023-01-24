import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from  '@angular/common/http';
import { Crypto } from '../crypto'
import { Observable, of } from 'rxjs';


import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
//data: any;
  constructor(private httpClient: HttpClient) { }

  getData() {
 return this.httpClient.get('https://api.coindesk.com/v1/bpi/currentprice.json').pipe(map((response: any) => response.json()));
    }

}
