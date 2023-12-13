import { Routes } from '@angular/router';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { SeconddetailsComponent } from './seconddetails/seconddetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FirstdetailsComponent } from './firstdetails/firstdetails.component';
import { FirstchildComponent } from './firstchild/firstchild.component';
import { SecondchildComponent } from './secondchild/secondchild.component';
import { authGuard } from './auth/auth.guard';
import path from 'path';
import { TemplateformComponent } from './form/templateform/templateform.component';
import { ReactiveformComponent } from './form/reactiveform/reactiveform.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'first', component: FirstComponent, children: [
      { path: 'child', component: FirstchildComponent, title: 'first child' }
    ]
  },

  { path: 'first/:id', component: FirstdetailsComponent },
  {
    path: 'second', component: SecondComponent, children: [
      {
        path: '', canActivateChild: [authGuard], children: [

          { path: 'child1', component: SecondchildComponent, title: 'second child' },
          { path: 'child2', component: SecondchildComponent, title: 'second child' },
        ]
      }
    ]
  },
  { path: 'second/:id', component: SeconddetailsComponent },
  { path: 'template', component: TemplateformComponent },
  { path: 'reactive', component: ReactiveformComponent },



  { path: '**', component: PageNotFoundComponent }

];