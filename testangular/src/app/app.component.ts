import { TaskComponent } from './../../../ng2-new-app/src/app/app.component';
import { TasksComponent } from './../../../ng2-new-app/src/app/tasks/tasks.component';
import { Component } from '@angular/core';
import { ROUTER_CONFIGURATION, RouteConfigLoadEnd, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'testangular';
}
