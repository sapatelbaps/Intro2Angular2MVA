import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-flow48',
  templateUrl: './data-flow48.component.html',
  styleUrls: ['./data-flow48.component.less']
})
export class DataFlow48Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doThis() {
    console.log('You clicked on the button.');
    alert('Check the console of the browser.');
  }

}
