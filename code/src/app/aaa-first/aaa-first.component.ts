import { Component, Input } from '@angular/core';

class Item {
  txt: string;
  selected: boolean;

  constructor(txt: string) {
    this.txt = txt;
    this.selected = false;
  }
}

@Component({
  selector: 'aaa-first',
  templateUrl: './aaa-first.component.html',
  styleUrls: ['./aaa-first.component.css']
})
export class AaaFirstComponent {

  @Input() thisIsBlue: boolean = false; // incoming from Parent Component
  
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
