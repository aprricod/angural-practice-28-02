import { Component, OnInit } from '@angular/core';
import { Mod8Service } from './mod8.service';

@Component({
  selector: 'app-mod8',
  templateUrl: './mod8.component.html',
  styleUrls: ['./mod8.component.css'],
})
export class Mod8Component implements OnInit {
  constructor(public mod8: Mod8Service) {}

  ngOnInit(): void {
    this.mod8.initUsers();
  }
}
