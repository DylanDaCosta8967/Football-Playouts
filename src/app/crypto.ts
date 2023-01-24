export interface Crypto 
{
     time: Time;
     disclaimer: string;
     chartName: string;
     bpi: Bpi ;
}

export interface Bpi {
      USD: Currency; 
      GBP: Currency;
      EUR: Currency;
}

 export interface  Currency {
     code : string;
     symbol : string;
     rate : string;
     description : string;
     rate_float : string;
}

 export interface  Time
    { 
      updated : string;
      updatedISO: string;
      updateduk: string;
    }