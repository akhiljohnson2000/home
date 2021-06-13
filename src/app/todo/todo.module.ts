import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './todo-routing.module';

import { TodoHomePage } from './todoHome/todoHome.page';
import { TodoCreatePage } from './todoCreate/todoCreate.page';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [TodoHomePage,TodoCreatePage],
  providers : [TodoService],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsPageRoutingModule
  ]
})
export class TabsPageModule {}
