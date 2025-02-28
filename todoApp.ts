interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate?: Date; //Optional property
}

class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;

    //Add a new todo item
    addTodo(task:string, dueDate?: Date): void {
        const newTodo: TodoItem = {id: this.nextId++, task, completed: false, dueDate};
        this.todos.push(newTodo);
    }

    //Mark a todo item as completed
    completeTodo(id: number): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = true;
        } else {
            console.error('Todo with id ${id} not found.');
        }
    }

    //Remove a todo item
    removeTodo(id: number): void {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    //List all todo items
    listTodos(): TodoItem[] {
        return this.todos;
    }

    //Filter todos by completed status
    filterTodos(completed: boolean): TodoItem [] {
        return this.todos.filter(todo => todo.completed === completed);
    }

    //Update the task description of a todo item
    updateTodoTask(id: number, newTask: string): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.task = newTask;
        } else {
            console.error('Todo with id ${id} not found.');
        }
    }

    //Clear all completed todos
    clearCompletedTodos(): void{
        this.todos = this.todos.filter(todo => !todo.completed);
    }
}

const todoList = new TodoList();

//Adding todos
todoList.addTodo("Learn TypeScript");
todoList.addTodo("Build a Todo App", new Date("2025-02-28"));

//Listing todos
console.log(todoList.listTodos());

//Completing a todo
todoList.completeTodo(1);

//Updating a todo task
todoList.updateTodoTask(1, "Learn TypeScript Basics");

//Removing a todo
todoList.removeTodo(2);

//Clearing completed todos
todoList.clearCompletedTodos();