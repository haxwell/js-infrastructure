import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstLibraryService {

  constructor() { }

  multiplyByTwo(x) {
    return x;
  }
}
