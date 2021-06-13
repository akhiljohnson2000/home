import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoCreatePage } from './todoCreate/todoCreate.page';
import { TodoHomePage } from './todoHome/todoHome.page';

const routes: Routes = [
  {
    path: 'todo/home',
    component: TodoHomePage
  },
  {
    path: 'todo/create',
    component: TodoCreatePage
  },
  {
    path: '',
    redirectTo: '/todo/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
