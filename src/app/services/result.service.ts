import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calculation } from '../Calculation';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json', 
  })
}

@Injectable({
  providedIn: 'root'
})


export class ResultService {
  private urlData = 'http://localhost:5000/results';

  constructor(private http: HttpClient) { }


  sendData(data: Calculation) {
    return this.http.post<Calculation>(this.urlData, data, httpOptions);
  }

  getData(): Observable<Calculation[]> {
    return this.http.get<Calculation[]>(this.urlData);
  }

  deleteData(id: any): Observable<Object> {
    const url = `${this.urlData}/${id}`;
    return this.http.delete(url, httpOptions);    
  }  
}