 import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';


@Component({
  selector: 'todoCreate',
  templateUrl: 'todoCreate.page.html',
  styleUrls: ['todoCreate.page.scss']
})
export class TodoCreatePage{ 
  public todoCreateData : FormGroup;

  jsonFile = {};
  
  constructor(private route:Router, private formBuilder: FormBuilder, private todoServices : TodoService) {
    this.todoCreateData = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      priority: ['', Validators.required],
      tags : ['', Validators.required]
    });

    this.jsonFile = this.todoServices.getJSON();
  }  
 
  routeBack(){
    this.route.navigate(['todo/home']);
  }

  logForm(){
    var orderId = this.jsonFile['todo']?.tasks.length
    var createdTime = new Date().toLocaleString();  
    var data = {
      name:this.todoCreateData.value.name,
      description:this.todoCreateData.value.description,
      priority:this.todoCreateData.value.priority,
      tags:this.todoCreateData.value.tags,
      orderId : orderId,
      createdTime : createdTime
    }

    this.jsonFile['todo']['tasks'].push(data)
    this.todoServices.putJSON(this.jsonFile);
    this.todoCreateData.reset();
    this.route.navigate(['todo/home']);
  }

}
