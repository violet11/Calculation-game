import { Component, OnInit, Input, Output } from '@angular/core';
import {Calculation} from '../../Calculation';
import {ResultService} from '../../services/result.service';
import { faSpaghettiMonsterFlying } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-calc-result-item',
  templateUrl: './calc-result-item.component.html',
  styleUrls: ['./calc-result-item.component.css']
})

export class CalcResultItemComponent implements OnInit {
  @Input() result!: Calculation;
  spaghettimonster = faSpaghettiMonsterFlying;
  check = faCheck;
  
  
constructor(private data: ResultService) { }

  ngOnInit(): void {
  }
}