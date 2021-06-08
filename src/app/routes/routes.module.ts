import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { RoutesRoutingModule } from './routes-routing.module';
import { TodoComponent } from './todo/todo.component';
import { SortByPipe } from '@core/pipes/sort-by.pipe';

@NgModule({
    declarations: [TodoComponent, SortByPipe],
    imports: [
        CommonModule,
        RoutesRoutingModule,
        SharedModule
    ]
})
export class RoutesModule { }
