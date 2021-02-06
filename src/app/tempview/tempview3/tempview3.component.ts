import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempview3',
  templateUrl: './tempview3.component.html',
  styleUrls: ['./tempview3.component.css'],
})
export class Tempview3Component implements OnInit {
  @ContentChild('headerContent', { static: false })
  header: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  change():void {
    console.log(this.header)
  }
}
