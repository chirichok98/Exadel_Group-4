import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

// tslint:disable-next-line:max-line-length
import { CreateCandidateComponent } from './pages/create/create-candidate/create-candidate.component';
import { CreateVacancyComponent } from './pages/create/create-vacancy/create-vacancy.component';
import { EditCandidateComponent } from './pages/edit/edit-candidate/edit-candidate.component';
import { EditVacancyComponent } from './pages/edit/edit-vacancy/edit-vacancy.component';
import { StoreComponent } from './pages/store/store.component';
import { HomeComponent } from './pages/home/home.component';


const mainRoute: Route = {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
};
const homeRoute: Route = {
  path: 'home',
  component: HomeComponent,
};
const storetRoute: Route = {
  path: 'store',
  component: StoreComponent,
};
const creatingRoute: Route = {
  path: 'create',
  children: [
    {
      path: '',
      redirectTo: 'candidate',
      pathMatch: 'full',
    },
    {
      path: 'candidate',
      component: CreateCandidateComponent,
    },
    {
      path: 'vacancy',
      component: CreateVacancyComponent,
    },
  ],
};
const editingRoute: Route = {
  path: 'edit',
  children: [
    {
      path: '',
      redirectTo: 'candidate',
      pathMatch: 'full',
    },
    {
      path: 'candidate',
      children: [
        {
          path: ':id',
          component: EditCandidateComponent,
        },
      ],
    },
    {
      path: 'vacancy',
      children: [
        {
          path: ':id',
          component: EditVacancyComponent,
        },
      ],
    },
  ],
};

export const routes: Routes = [
  mainRoute,
  homeRoute,
  storetRoute,
  creatingRoute,
  editingRoute,
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
