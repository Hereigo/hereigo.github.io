import { Component } from '@angular/core';

class Item {
  txt: string;
  selected: boolean;

  constructor(txt: string) {
    this.txt = txt;
    this.selected = false;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  thisIsBlue: boolean = false;
  btnName: string = "Click Me!";

  items: Item[] = [
    { txt: 'aaaa', selected: false },
    { txt: 'bbbb', selected: false },
    { txt: 'cccc', selected: false }
  ];

  chngBtnName(): void {
    
    this.thisIsBlue = !this.thisIsBlue;

    if (this.btnName == "Click Me!")
      this.btnName = "Click Again)";
    else
      this.btnName = "Click Me!"
  }

}
