import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todoHome',
  templateUrl: 'todoHome.page.html',
  styleUrls: ['todoHome.page.scss']
})
export class TodoHomePage implements OnChanges{
  jsonFile = [];

  constructor(private route:Router, private todoServices : TodoService) {
    this.jsonFile = this.todoServices.getJSON()['todo']['tasks'];
    this.jsonFile.sort(this.compare);
  }

  ngOnChanges(){
    console.log("w")
    this.jsonFile = this.todoServices.getJSON()['todo']['tasks'];
    this.jsonFile.sort(this.compare);
  }

  doReorder(ev) { 
    var Data = this.todoServices.getJSON();
    if(ev.detail.to >= Data['todo']['tasks'].length) {
      ev.detail.to = ev.detail.to - 1;
    }
    console.log(ev.detail.from,ev.detail.to)
    Data['todo']['tasks'] = this.jsonFile
    console.log(this.jsonFile[ev.detail.to])
    this.jsonFile[ev.detail.to]['orderId'] = ev.detail.to
    this.jsonFile[ ev.detail.from]['orderId'] = ev.detail.from
    this.todoServices.putJSON(Data);
    ev.detail.complete();
  }

  createTask(){
    this.route.navigate(['/todo/create']); 
  }

  compare( a, b ) {
    if ( a.orderId > b.orderId ){
      return -1;
    }
    if ( a.orderId < b.orderId ){
      return 1;
    }
    return 0;
  }
}
