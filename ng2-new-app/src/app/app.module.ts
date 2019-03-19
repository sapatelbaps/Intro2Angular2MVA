import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { ConditionstestComponent } from './conditionstest/conditionstest.component';
import { StructdirtestComponent } from './structdirtest/structdirtest.component';
import { DataFlow48Component } from './data-flow48/data-flow48.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ConditionstestComponent,
    StructdirtestComponent,
    DataFlow48Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
