import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from "./overview/overview.component";
import { AboutmeComponent } from './aboutme/aboutme.component';
import { WorkComponent } from "./work/work.component";
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MypageComponent } from './mypage/mypage.component';

import { EnginneeingComponent } from './blogs/enginneeing/enginneeing.component';

const routes: Routes = [
  { path: "", component: OverviewComponent },
  { path: "about", component:AboutmeComponent },
  { path: "work", component: WorkComponent },
  { path: "blog", component: BlogComponent },
  { path: "contact", component: ContactComponent },
  { path: "mypage", component: MypageComponent },
  { path: "blogs_engineering", component: EnginneeingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }