import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGroupComponent } from './components/create-group/create-group.component';


const routes: Routes = [
  {
    path: '', component: CreateGroupComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
