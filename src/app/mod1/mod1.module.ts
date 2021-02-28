import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Mod1Component } from './mod1.component';

@NgModule({
  declarations: [Mod1Component],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  exports: [Mod1Component],
})
export class Mod1Module {}
