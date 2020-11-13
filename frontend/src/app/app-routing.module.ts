import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'templates', loadChildren: () => import('./template-builder/template-builder.module').then(m => m.TemplateBuilderModule) },
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'approvals', loadChildren: () => import('./approvals/approvals-routing.module').then(m => m.ApprovalsRoutingModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
