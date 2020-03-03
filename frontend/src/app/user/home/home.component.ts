import { Component, OnInit } from '@angular/core';
import { HelperService } from '../shared/helper/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards = [
    {description: 'Yes Go is a product of Yes Soft company.'},
    {description: 'Our whole crew is at your service.'},
    {description: 'Try us, you’ll never regret.'}
  ];

  slides: any = [[]];

  constructor() { }

  ngOnInit() {
    this.slides = HelperService.chunk(this.cards, 1);
  }

}
