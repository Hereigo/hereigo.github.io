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

## Useful links :

- [To learn about tsconfig.json file.](https://angular.io/config/tsconfig.)

- [Angular security best practices.](https://snyk.io/blog/angular-security-best-practices)

- [DON'T Call Functions Inside The Template Anymore.](https://javascript.plainenglish.io/angular-dont-call-a-function-inside-the-template-anymore-e74ebf499bb8)

## Simple starting a project

#### Just create and first run.

```sh
npm install -g @angular/cli

ng new [NewAppName]

ng serve -o
# or
npm start

# To Move built to root path for GH-Pages:
mv dist/cheats-sheet/* ../
```

#### Startup Module - main.ts
```ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
```

#### app.module.ts
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
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

@Component({ /*....*/ })
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

#### Passing Parameters to Child Components:

```ts
import { Input } from '@angular/core'; // need for @Input() Decorator

@Component({ /*...*/ })
export class ChildComponent {
  @Input() valueInChild: boolean = false; // with Default value

@Component({ /*...*/ })
export class ParentComponent {
  valueInParent: boolean = true;
```
```html
<app-child [valueInChild]="valueInParent"></app-child>
```

#### Using Setters to process @Input parameters from Parent:

```html
<app-child [childGetSetter]="valueFromParent"></app-child>
<!--
Inside Child Component: -->
<input type="number" [(ngModel)]="childGetSetter" />
```
```ts
export class ChildComponent {

  _numberInChild: number = 0;

  @Input()
  set childGetSetter(num: number) {
    if (num < 0)
      this._numberInChild = 0;
    else
      this._numberInChild = num;
  }
  get childGetSetter() { 
    return this._numberInChild;
  }
```

#### Bi-Direction Binding:
```html
<!-- Use in Parent : -->
<input [(ngModel)]="parentString" />
<!-- Pass into Child : -->
<app-child [(childString)]="parentString"></app-child>

<!-- Use in Child : -->
<input [ngModel]="childString" (ngModelChange)="onChildStringChange($event)" />
```
```ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({ /* ... */ })
export class ChildComponent
{
  @Input() childString: string = "";
  @Output() childStringChange = new EventEmitter<string>();

  onChildStringChange(model: string){
    this.childString = model;
    this.childStringChange.emit(model);
  }
```

#### app-Routing.module.ts
```ts
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
```
```html
<nav>
  <a routerLink="/" routerLinkActive="active home" [routerLinkActiveOptions]="{exact:true}">HOME</a>
  <a routerLink="/about" routerLinkActive="active about">ABOUT</a>
</nav>
<router-outlet></router-outlet>
```
