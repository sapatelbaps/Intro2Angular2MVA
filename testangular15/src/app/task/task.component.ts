import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  providers: [TaskService],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  counter = 0;
  constructor(public taskService: TaskService) {
    // this.counter = 0;
  }

  ngOnInit() {
    this.taskService.getTasks();
  }

  // this function is not working as expected - want to active only first list item but still not working.
  public checkCounter() {
    // alert('method called!');
    let flag = this.counter === 0 ? 'active' : 'disabled';
    this.counter++;
    return 'active';
  }
}
