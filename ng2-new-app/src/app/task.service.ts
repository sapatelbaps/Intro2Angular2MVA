import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = ["First Task","Second Task","Third Task"];
  constructor() { }
}
