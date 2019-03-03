import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditionstest',
  templateUrl: './conditionstest.component.html',
  styleUrls: ['./conditionstest.component.less']
})
export class ConditionstestComponent implements OnInit {

  // If below variable is true then it will show the tag in html else not.
  imTrue = true;

  // It will generate no. of tags related to array item. TAGS not inner html - just iterator!
  tasks = ['First Task','Second Task']

  constructor() {

  }

  ngOnInit() {
  }

}
