import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasks;
  constructor(private http: HttpClient) { }

  getTasks() {
    console.log('Called getTasks');
    const aPromise = this.http.get('assets/tasks.json')
    //.map((res: Response) => res.json().data)
    .map(res => res)
    .toPromise();
    aPromise.then(tasksFromServer => this.tasks = tasksFromServer);
  }
}
