import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from "./work/work.component";
import { OverviewComponent } from "./overview/overview.component";

const routes: Routes = [
  { path: "", component: OverviewComponent },
  { path: "work", component: WorkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
