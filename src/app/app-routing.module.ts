import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { TaskHomeComponent } from './task/task-home/task-home.component';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'project', component: ProjectListComponent},
    { path: 'tasklists', component: TaskHomeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
