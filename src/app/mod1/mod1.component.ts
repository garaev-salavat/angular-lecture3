import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy {
  logs: string[] = [];
  name: string = '';
  showChild: boolean = false;

  constructor() {
    this.name = 'Gulnara';
    setTimeout(() => {
      this.showChildmetod();
    }, 5000);
    setTimeout(() => {
      this.updateName();
    }, 10000);

    setTimeout(() => {
      this.hideChild();
    }, 15000);
  }
  ngDoCheck(): void {
    console.log('app-mod1', 'ngDoChec', this.logs);
  }
  ngAfterContentChecked(): void {
    console.log('app-mod1', 'ngAfterContentChecked', this.logs);
  }
  ngAfterContentInit(): void {
    console.log('app-mod1', 'ngAfterContentInit', this.logs);
  }
  ngAfterViewChecked(): void {
    console.log('app-mod1', 'ngAfterViewChecked', this.logs);
  }
  ngAfterViewInit(): void {
    console.log('app-mod1', 'ngAfterViewInit', this.logs);
  }
  ngOnDestroy(): void {
    console.log('app-mod1', 'ngOnDestroy', this.logs);
  }
  ngOnInit(): void {
    console.log('app-mod1', 'ngOnInit()', this.logs);
  }
  public ngOnChanges(changes: SimpleChanges): void {
    console.log('app-mod1', 'ngOnChanges', this.logs, changes);
  }

  onLog(data: string): void {
    this.logs.push(data);
  }

  updateName(): void {
    this.name = 'Salavat';
  }

  hideChild(): void {
    this.showChild = false;
    this.onLog('onDestroy');
  }

  showChildmetod(): void {
    this.showChild = true;
  }
}
