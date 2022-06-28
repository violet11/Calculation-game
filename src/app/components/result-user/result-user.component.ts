import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Calculation} from '../../Calculation';
import {ResultService} from '../../services/result.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { HostListener } from '@angular/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null, 
    form: FormGroupDirective | 
    NgForm | null
    ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control && 
      control.invalid && 
      (control.dirty || control.touched || isSubmitted)
      );
  }
}

@Component({
  selector: 'app-result-user',
  templateUrl: './result-user.component.html',
  styleUrls: ['./result-user.component.css']
})
export class ResultUserComponent implements OnInit {
  @Output() addEvent: EventEmitter<Calculation> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<Calculation> = new EventEmitter();
  @Input() result!: Calculation;
  sum!: number;
  inputSum!: number;
  validateResult: boolean = false;
  num1: any;
  num2: any; 
  getNum1 = localStorage.getItem('num1');
  getNum2 = localStorage.getItem('num2');

  @HostListener('window:load') 
  onLoad() {
    (this.getNum1 != null && this.getNum1 !== "undefined") ? 
      (this.num1 = Number(this.getNum1)) &&
      (this.num2 = Number(this.getNum2)) :
      (this.num1 = Math.floor((Math.random() * 9) + 1)) &&
      (this.num2 = Math.floor((Math.random() * 9) + 1));
  }

  sumFormControl = new FormControl('', [
    Validators.required,
    Validators.nullValidator
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
  }
  
  changeNum() {
    if (this.sum == this.inputSum) {
      this.num1 = Math.floor((Math.random() * 9) + 1);
      this.num2 = Math.floor((Math.random() * 9) + 1); 
    } 
  }

  saveLocaleStorage() {
    localStorage.setItem( 'num2', this.num2 );
    localStorage.setItem( 'num1', this.num1 );
  }
  
  onSubmit() {

    this.sum = this.num1 + this.num2;
    this.validateResult = (this.sum == this.inputSum); 
    
    const newResult = {
      num1: this.num1,
      num2: this.num2,
      userSum: this.inputSum,
      validateResult: this.validateResult 
    }

    this.addEvent.emit(newResult);
    this.changeNum();
    this.inputSum = NaN;

    this.saveLocaleStorage();
  }   
}