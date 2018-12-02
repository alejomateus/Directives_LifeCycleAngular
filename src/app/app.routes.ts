import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { USERROUTES } from './components/user/user.routes';
const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'user/:id', component: UserComponent,
      children: USERROUTES
    },
    { path: '',  pathMatch:'full', redirectTo:'home' },
    { path: '**', pathMatch:'full', redirectTo:'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class APPROUTING {}
