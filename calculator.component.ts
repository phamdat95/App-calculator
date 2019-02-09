import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  firstNumber: number;
  secondNumber: number;
  operator = '+';
  result: number;
  setFirstNumber(firstNumber) {
    this.firstNumber = Number (firstNumber);
  }
  setSecondNumber(secondNumber) {
    this.secondNumber = Number (secondNumber);
  }
  setOperator(operator) {
    this.operator = operator;
  }
  getResult() {
    switch (this.operator) {
      case '-':
        this.result = this.firstNumber - this.secondNumber;
        break;
      case '+':
        this.result = this.firstNumber + this.secondNumber;
        break;
      case 'x':
        this.result = this.firstNumber * this.secondNumber;
        break;
      case '/':
        this.result = this.firstNumber / this.secondNumber;
        break;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
