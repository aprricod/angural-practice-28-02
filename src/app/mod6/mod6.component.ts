import { Component, OnInit } from '@angular/core';
import { Mod6Service } from './mod6.service';

@Component({
  selector: 'app-mod6',
  templateUrl: './mod6.component.html',
  styleUrls: ['./mod6.component.css'],
})
export class Mod6Component implements OnInit {
  constructor(public mod6: Mod6Service) {}

  ngOnInit(): void {
    this.mod6.initUsers();
  }
}
