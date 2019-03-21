import { TaskService } from '../task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(public taskService: TaskService) {

   }

  ngOnInit() {
  }
  completeTask(task){
    task.completed = true;
  }
}
