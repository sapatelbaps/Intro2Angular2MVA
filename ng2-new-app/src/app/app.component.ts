import { Component, OnInit } from '@angular/core';

export class TaskComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'the world of Angular 6';
}
