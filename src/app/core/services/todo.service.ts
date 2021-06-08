import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodoItem } from '@core/models/todo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor(
        private httpClient: HttpClient
    ) { }

    getValues(): Observable<ITodoItem[]> {
        return this.httpClient.get<any>('/api/todos');
    }

}
