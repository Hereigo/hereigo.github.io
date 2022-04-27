# CheatsSheet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Simple starting a project

#### Just create and first run.

```sh
npm install -g @angular/cli

ng new CheatsSheet

ng serve -o
# or
npm start

# To Move built to root path for GH-Pages:
mv dist/cheats-sheet/* ../
```

#### *ngFor

```html
<table>
    <tr *ngFor="let item of items">
        <td><input type="checkbox" [(ngModel)]="item.selected" /></td>
        <td>{{item.txt}}</td>
<!--
To use [(ngModel)] is required - 
import { FormsModule } from '@angular/forms';
-->        
```

```ts
class Item {
  txt: string;
  selected: boolean;

  constructor(txt: string) {
    this.txt = txt;
    this.selected = false;
  }
}

@Component({/*....*/})
export class AppComponent {
  items: Item[] = [
    { txt: 'aaaa', selected: false },
    { txt: 'bbbb', selected: false },
```

#### Binding html-tags:

```html
<style>
    .isBlue{ background-color:aquamarine; }
</style>
<input type="button" [class.isBlue]="thisIsBlue" [value]="btnName" (click)="chngName()" />
```
```ts
export class AppComponent {
  thisIsBlue: boolean = false;
  btnName: string = "Click Me!";

  chngName(): void {
    this.btnName = "New Btn Name";

// Also allowed to sent Events:
someClick($event : any) : void { console.log($event); }
```