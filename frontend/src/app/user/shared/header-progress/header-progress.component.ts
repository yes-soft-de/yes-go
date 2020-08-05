import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header-progress',
  templateUrl: './header-progress.component.html',
  styleUrls: ['./header-progress.component.scss']
})
export class HeaderProgressComponent implements OnInit, AfterViewInit {
  @Input() progressPiecesNumber: number;
  amount: number[];

  constructor() { }

  ngOnInit() {
    this.amount = new Array(this.progressPiecesNumber);
  }

  ngAfterViewInit() {

  }

  // function to animate the progress coloring
  progress() {
    // const amount = new Array(this.progressPiecesNumber);
    const timer = this.amount.length / (10 * 100);
    let elementIndex = 0;
    const progressing = setInterval(() => {
        const element = '.dot:eq(' + elementIndex + ')';
        $(element).css('background', '#C73015');
        // console.log(this.elementIndex, this.amount.length);
        ++elementIndex;
        if (elementIndex > (this.amount.length - 1)) {
          clearInterval(progressing);
        }
      }, timer);
  }

}
