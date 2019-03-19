import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
// command to add a new service is "ng generate service nameoftheservice"
  tasks = ["First Task","Second Task","Third Task"];
  constructor() { }
}
