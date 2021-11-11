import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gift-a-stock';
  user = "משתמש/ת יקר/ה" /** @todo: put username after registration*/
}
