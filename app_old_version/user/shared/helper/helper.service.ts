import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  // create chunk of Custom array to use it in custom carousel
  public static chunk(customArray, chunkSize) {
    const arr = [];
    for (let i = 0, len = customArray.length; i < len; i += chunkSize) {
      arr.push(customArray.slice(i, i + chunkSize));
    }
    return arr;
  }
}
