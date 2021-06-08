export interface ITodoItem {
    id: Number;
    userId: Number;
    completed: boolean;
    title: string;
    editable?: boolean;
}