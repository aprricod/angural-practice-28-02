import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component implements OnInit {
  name: string = 'Artem';
  age: number = 30;
  constructor() {}

  ngOnInit(): void {}
}
