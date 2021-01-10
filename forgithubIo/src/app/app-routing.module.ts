import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from "./overview/overview.component";
import { AboutmeComponent } from './aboutme/aboutme.component';
import { WorkComponent } from "./work/work.component";
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
  { path: "", component: OverviewComponent },
  { path: "about", component:AboutmeComponent },
  { path: "work", component: WorkComponent },
  { path: "blog", component: BlogComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }