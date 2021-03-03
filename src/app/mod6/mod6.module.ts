import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Mod6Component } from './mod6.component';

@NgModule({
  declarations: [Mod6Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [Mod6Component],
})
export class Mod6Module {}
