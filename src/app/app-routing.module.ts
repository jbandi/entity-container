import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntityContainerComponent } from './entity-container/entity-container.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '**', component: EntityContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
