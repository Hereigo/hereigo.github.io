import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isBlueDefault: boolean = true;
  ageDefault: number = 5;
  parentString: string = "Parent Default";

}
