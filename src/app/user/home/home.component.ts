import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards = [
    {description: 'Some quick example text to build on the '},
    {description: 'and make up the bulk of the card content'},
    {description: 'text to build on the Some up the bulk of'}
  ];

  slides: any = [[]];

  constructor() {}

  ngOnInit() {
    this.slides = this.chunk(this.cards, 1);
  }

  // create chunk of About us text array to use it in painting carousel
  chunk(paintingsArr, chunkSize) {
    const arr = [];
    for (let i = 0, len = paintingsArr.length; i < len; i += chunkSize) {
      arr.push(paintingsArr.slice(i, i + chunkSize));
    }
    return arr;
  }

}
