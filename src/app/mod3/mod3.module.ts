import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mod3Component } from './mod3.component';



@NgModule({
  declarations: [Mod3Component],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [Mod3Component]
})
export class Mod3Module { }
