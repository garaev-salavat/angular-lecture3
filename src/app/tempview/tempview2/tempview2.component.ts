import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempview2',
  templateUrl: './tempview2.component.html',
  styleUrls: ['./tempview2.component.css'],
})
export class Tempview2Component implements OnInit {
  counter: number = 100;

  constructor() {}

  ngOnInit(): void {}

  increment(n: number): void {
    this.counter += n;
  }

  decrement(n: number): void {
    this.counter -= n;
  }
}
