import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards = [
    {description: 'Its team consists of developers, designers, content makers, testers and team managers'},
    {description: 'Our Team are working together remotely and results are always great'},
    {description: 'They use up-to-date technologies to bring your imaginary requirements to reality'}
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
