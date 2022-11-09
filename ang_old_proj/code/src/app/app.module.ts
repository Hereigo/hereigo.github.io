import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AaaFirstComponent } from './aaa-first/aaa-first.component';

@NgModule({
  bootstrap: [AppComponent], // Start First
  declarations: [     // Module's Views (components,directives,pipes)
    AppComponent, AaaFirstComponent
  ],
  imports: [                // Necessary Modules
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  exports: [],
  providers: []
})
export class AppModule { }
