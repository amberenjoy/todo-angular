import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITodoItem } from '@core/models/todo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor(
        private httpClient: HttpClient
    ) { }

    getValues(): Observable<ITodoItem[]> {
        return this.httpClient.get<any>('/api/todos').pipe(
            map((respponse: any) => {
                const initData = [...respponse.slice(0, 10)];
                initData.map((e: ITodoItem) => e.editable = false);
                localStorage.setItem('todos', JSON.stringify(initData));
                return initData;
            })
        );
    }

    updateTodos(todos: ITodoItem[]): void {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

}
