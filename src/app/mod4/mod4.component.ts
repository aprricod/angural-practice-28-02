import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mod4',
  templateUrl: './mod4.component.html',
  styleUrls: ['./mod4.component.css'],
})
export class Mod4Component implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: fb.control(null),
      age: fb.control(null),
      email: fb.control(null),
      date: fb.control(null),
    });
  }

  ngOnInit(): void {}
}
