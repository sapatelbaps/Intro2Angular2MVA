import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-flow48',
  providers: [TaskService],
  templateUrl: './data-flow48.component.html',
  styleUrls: ['./data-flow48.component.less']
})

export class DataFlow48Component implements OnInit {

  public num = '';
  public nums = [9, 99, 113];

  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  doThis() {
    console.log('You clicked on the button.');
    alert('Check the console of the browser.');
  }

  onMouseHover(){
    alert('Event - mouseenter is called!');
  }
}
