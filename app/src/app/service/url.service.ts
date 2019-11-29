import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  url: string = "";

  constructor() { }

  getUrl(){
    return this.url;
  }

}
