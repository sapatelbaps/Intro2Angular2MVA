import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasks = [1,2,3,4,5];

  constructor() { }
}
