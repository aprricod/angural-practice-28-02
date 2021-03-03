import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mod7Component } from './mod7.component';

@NgModule({
  declarations: [Mod7Component],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [Mod7Component],
})
export class Mod7Module {}
