import { R3BoundTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mod5',
  templateUrl: './mod5.component.html',
  styleUrls: ['./mod5.component.css'],
})
export class Mod5Component implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      street: fb.control(null),
      bus: fb.control(null),
      date: fb.control(null),
      phones: fb.array([fb.control(null)]),
    });
  }

  addPhone() {
    (this.form.get('phones') as FormArray).push(this.fb.control(null));
  }

  ngOnInit(): void {}
}
