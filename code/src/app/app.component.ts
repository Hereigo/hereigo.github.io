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

  items: Item[] = [
    { txt: 'aaaa', selected: false },
    { txt: 'bbbb', selected: false },
    { txt: 'cccc', selected: false }
  ];
  
}
