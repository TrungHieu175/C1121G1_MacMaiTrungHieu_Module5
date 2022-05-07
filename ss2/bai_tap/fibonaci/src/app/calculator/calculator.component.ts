import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numString = '';
  constructor() { }

  ngOnInit(): void {
  }

  getValue(num) {
    this.numString += num;
  }

  calculate() {
    // tslint:disable-next-line:no-eval
    this.numString = eval (this.numString);
  }

  clear() {
    this.numString = '';
  }

  sqrt(numString) {
    // @ts-ignore
    this.numString = Math.sqrt(numString) + '';
  }
}
