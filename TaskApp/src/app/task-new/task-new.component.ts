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
    // either
    // this.taskService.tasks.push(this.task);
    // or
    this.taskService.addTask(this.task);

    // reset component variables to make them empty on the page as well!
    this.task = { title: '', completed: false };
  }

  ngOnInit() {}
}
