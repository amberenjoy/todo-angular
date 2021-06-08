import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'todo',
        pathMatch: 'full'
    },
    {
        path: 'todo',
        component: TodoComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: environment.useHash,
            scrollPositionRestoration: 'top'
        })
    ],
    exports: [RouterModule]
})
export class RoutesRoutingModule { }
