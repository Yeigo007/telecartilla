import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PeriodicElement} from '../files/upload/upload.component';


@Injectable({
  providedIn: 'root'
})
export class CampaniasService {


  constructor(private http: HttpClient) { }

  getLastid(): Promise<any> {
    return this.http.get<any>('/CRM/getLastId').toPromise();
  }

  getAll(): Observable<Array<PeriodicElement>> {
    return this.http.get<Array<PeriodicElement>>('/CRM/getAll');
  }

  saveCampania(jsonSave: Array<PeriodicElement>): Promise<any> {
    return this.http.post('/CRM/create', jsonSave).toPromise();
  }

}
