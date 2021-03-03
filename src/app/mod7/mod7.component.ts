import { Component, OnInit } from '@angular/core';
import { Mod7Service } from './mod7.service';

@Component({
  selector: 'app-mod7',
  templateUrl: './mod7.component.html',
  styleUrls: ['./mod7.component.css'],
})
export class Mod7Component implements OnInit {
  constructor(public mod7: Mod7Service) {}

  ngOnInit(): void {
    this.mod7.loadUsers();
  }
}
