import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { page } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getMenuOpc() {
    return this.http.get<page[]>('/assets/Data/menu.json');
  }

}
