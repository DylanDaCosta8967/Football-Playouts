import { Component, OnInit } from '@angular/core';
import { Crypto } from '../../crypto'
import { CryptoService } from '../../services/crypto.service'
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';




@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})

export class CryptoComponent implements OnInit {
//Cryptos$!: Observable<Crypto[]>;
requests: any = [];
data: any = [];
res: any[];

  constructor(private cryptoService: CryptoService){}

ngOnInit() {
  this.requests = this.cryptoService.getData().subscribe( data => {
        this.data = data.json();
 // this.requests = this.cryptoService.getData().subscribe( (res: any[]) => this.requests =res);
});
}


//OnInit(): void {
//this.cryptoService.getData().subscribe(data => {
 //  this.crypto = data;
 //});
//}

}
