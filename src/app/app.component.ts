import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  openedSidenav = false;

  toggleSidenav() {
    this.openedSidenav = !this.openedSidenav;
    // TODO: stavi ovo u store da se zapamti pri reloadu stranice
  }
}
