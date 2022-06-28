import { Component, OnInit } from '@angular/core';
import {ResultService} from '../../services/result.service';
import {Calculation} from '../../Calculation';


@Component({
  selector: 'app-calculations-results',
  templateUrl: './calculations-results.component.html',
  styleUrls: ['./calculations-results.component.css']
})
export class CalculationsResultsComponent implements OnInit {
  results: Calculation[] = [];
  textButton: string = "Delete";
  text: string = "History";
  showButtonResults: boolean = this.results.length > 0;
  

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
   this.resultService.getData().subscribe(results => this.results = results.reverse());
  }

  addResult(data: Calculation) {
    if (data.userSum) {
    this.resultService.sendData(data)
    .subscribe(result => {this.results.unshift(result); this.results});
    }
  }

  deleteResult(result: any) {
      this.resultService.deleteData(result[this.results.length - 1].id)
      .subscribe(() => (this.results = this.results.filter((t) => t.id 
      !== result[this.results.length - 1].id)));
  }
}