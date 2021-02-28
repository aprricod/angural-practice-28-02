import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Mod4Component } from './mod4.component';

@NgModule({
  declarations: [Mod4Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [Mod4Component],
})
export class Mod4Module {}
