import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  { path:'', component: NavComponent, children:[
    {path:'change-number',component: ChangeNumberComponent },
    {path:'emitter', component: EmitterComponent},
    {path:'eventos', component: EventosComponent},
    {path:'if-render', component: IfRenderComponent},
    {path:'list-render', component: ListRenderComponent},
    {path:'pipes', component: PipesComponent},
    {path:'two-way-binding', component: TwoWayBindingComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
