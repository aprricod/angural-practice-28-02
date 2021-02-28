import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mod4',
  templateUrl: './mod4.component.html',
  styleUrls: ['./mod4.component.css'],
})
export class Mod4Component implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      name: fb.control(null),
      age: fb.control(null),
      email: fb.control(null),
      date: fb.control(null),
      phones: fb.array([]),
    });
  }

  add() {
    (this.form.get('phones') as FormArray).push(this.fb.control(null));
  }

  ngOnInit(): void {}
}
