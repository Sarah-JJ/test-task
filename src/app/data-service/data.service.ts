import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {UserModel} from "./user.model";
import data from "./data.json";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  get(): Observable<UserModel[]> {
    return of(data)
  }
}
