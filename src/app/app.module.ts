import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mod1Module } from './mod1/mod1.module';
import { Mod2Module } from './mod2/mod2.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Mod3Module } from './mod3/mod3.module';
import { Mod4Module } from './mod4/mod4.module';
import { Mod5Module } from './mod5/mod5.module';
import { Mod6Module } from './mod6/mod6.module';
import { Mod7Module } from './mod7/mod7.module';
import { Mod8Module } from './mod8/mod8.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Mod1Module,
    Mod2Module,
    BrowserAnimationsModule,
    Mod3Module,
    Mod4Module,
    Mod5Module,
    Mod6Module,
    Mod7Module,
    Mod8Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
