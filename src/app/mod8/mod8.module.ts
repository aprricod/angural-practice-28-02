import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mod8Component } from './mod8.component';

@NgModule({
  declarations: [Mod8Component],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [Mod8Component],
})
export class Mod8Module {}
