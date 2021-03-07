import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DocviewerComponent } from './components/docviewer/docviewer.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: DocviewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
