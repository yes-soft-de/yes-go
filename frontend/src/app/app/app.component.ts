import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationCancel, NavigationError, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'YesGo Angular';


  showLoadingIndicator = true;		// create variable
  constructor(private router: Router) {
    this.router.events.subscribe(
      (routerEvent: Event) => {
        if (routerEvent instanceof NavigationStart) {
          this.showLoadingIndicator = true;
        }
        if (routerEvent instanceof NavigationEnd ||			// to stop show it when end fetching data
          routerEvent instanceof NavigationCancel ||		// to stop show it when click cancel button
          routerEvent instanceof NavigationError) {		// to stop show it when an Error happend
          this.showLoadingIndicator = false;
        }
    });
  }

}
