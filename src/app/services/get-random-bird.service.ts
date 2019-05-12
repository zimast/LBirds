import { Injectable } from '@angular/core';

export interface Bird {
  name: string;
  images: string[];
}

@Injectable({
  providedIn: 'root'
})
export class GetRandomBirdService {

  private birds: Bird[] = [
    {
      name: 'struhio-camelus',
      images: [
        'struhio-camelus/1.jpg',
        'struhio-camelus/2.jpg',
        'struhio-camelus/3.jpg',
        'struhio-camelus/4.jpg',
      ]
    }
  ]

  constructor() { }

  public giveMeBird() {
    return this.birds[this.getRndInteger(0, this.birds.length - 1)]
  }

  public getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
}
