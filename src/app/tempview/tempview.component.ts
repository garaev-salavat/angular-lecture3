import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Tempview1Component } from './tempview1.component';
import { Tempview2Component } from './tempview2/tempview2.component';

@Component({
  selector: 'app-tempview',
  templateUrl: './tempview.component.html',
  styleUrls: ['./tempview.component.css'],
})
export class TempviewComponent implements AfterViewInit {
  @ViewChild('counter', { static: false })
  counter: Tempview2Component;

  name: string = 'Salavat';
  header:string = 'Заголовок';

  constructor() {
    console.log('app-tempview', this.counter);
  }

  ngAfterViewInit(): void {
    console.log('app-tempview', this.counter);
    (this.counter as Tempview2Component).counter = 100;
  }
}
