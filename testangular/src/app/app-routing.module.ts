import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {
    path: 'task',
    //name: 'Tasks',
    component: TaskComponent,
    pathMatch: 'full'
  },
  {
    path: 'other',
    //name: 'Other',
    component: OtherComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
