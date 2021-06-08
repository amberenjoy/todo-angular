import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '@env/environment';
import { TodoService } from '@core/services/todo.service';
import { ITodoItem } from '@core/models/todo';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    versionCode: string = '0.0.0';
    newItemTitle: string = '';
    filter: string = 'all';

    todos: Array<ITodoItem> = [];

    filterItems = [
        { text: 'All', value: 'all' },
        { text: 'Active', value: 'active' },
        { text: 'Completed', value: 'completed' }
    ];

    @ViewChild('editInput', { static: false })
    set input(element: ElementRef<HTMLInputElement>) {
        if (element) {
            element.nativeElement.focus()
        }
    }

    constructor(
        private todoService: TodoService
    ) { }

    ngOnInit(): void {
        this.versionCode = environment.version;
        this.loadData();
    }

    loadData(): void {
        if (localStorage.getItem('todos')) {
            this.todos = JSON.parse(localStorage.getItem('todos') || '');
            this.todos.map((e: ITodoItem) => e.editable = false);
        } else {
            this.todoService.getValues().subscribe(data => {
                this.todos = [...data];
                this.todos.map((e: ITodoItem) => e.editable = false);
            })
        }
    }

    onChangeFilter(filterVal: string): void {
        const originalData = JSON.parse(localStorage.getItem('todos') || '');

        this.filter = filterVal;

        if (filterVal === 'active') {
            this.todos = originalData.filter((e: ITodoItem) => !e.completed)
        } else if (filterVal === 'completed') {
            this.todos = originalData.filter((e: ITodoItem) => e.completed === true)
        } else {
            this.todos = originalData;
        }
    }

    onAddNewItem() {
        const newItem: ITodoItem = {
            id: this.todos.length + 1,
            userId: 10,
            title: this.newItemTitle,
            completed: false,
            editable: false
        }

        this.todos.unshift(newItem);
        this.todoService.updateTodos(this.todos);
        this.newItemTitle = '';
    }

    updateStatus(item: ITodoItem): void {
        this.todos.map(each => {
            if (each === item) {
                each.completed = !item.completed
            }
        });
        this.todoService.updateTodos(this.todos);
    }

    onEditItemTitle(item: ITodoItem): void {
        this.todos.map(each => each.editable = each === item);
    }

    confirmUpdateItemTitle(item: ITodoItem): void {
        this.todos.map(each => each.editable = false);
        this.todoService.updateTodos(this.todos);
    }

    removeItem(item: ITodoItem): void {
        this.todos = this.todos.filter(each => each !== item);
        this.todoService.updateTodos(this.todos);
    }

}
