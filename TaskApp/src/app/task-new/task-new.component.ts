import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  task;

  constructor(public taskService: TaskService) {
    this.task = { title: '', completed: false };
  }

  onSubmit(){
    this.taskService.tasks.push(this.task);
    this.task = { title: '', completed: false };
  }

  ngOnInit() {}
}
