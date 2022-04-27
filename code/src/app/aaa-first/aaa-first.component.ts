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

  _numberInChild: number = 0;

  // Using Setters to Limit @Input parameters from Parent:
  @Input()
  set childGetSetter(age: number) {
    if (age < 0)
      this._numberInChild = 0;
    else if (age > 10)
      this._numberInChild = 10;
    else
      this._numberInChild = age;
  }
  get childGetSetter() { 
    return this._numberInChild;
  }

}
