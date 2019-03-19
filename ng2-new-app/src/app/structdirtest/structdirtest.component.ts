import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structdirtest',
  templateUrl: './structdirtest.component.html',
  styleUrls: ['./structdirtest.component.less']
})
export class StructdirtestComponent implements OnInit {

  isVisible = false;
  gurus = ['Gunatit', 'Bhagatji', 'Shashtriji', 'Yogiiji', 'Pramukham', 'Mahanatam'];

  constructor() { }

  ngOnInit() {
  }
}
