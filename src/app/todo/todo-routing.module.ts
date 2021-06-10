import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPage } from './todo.page';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoPage
  },
  {
    path: '',
    redirectTo: '/todo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
