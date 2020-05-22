import React from "react";
import Todo from "./Todo.js";
class TodoList extends React.Component {
	render() {
		let { todos } = this.props;
		const todoList = todos.map(todo => {
			return (
				<Todo
					key={todo.idx}
					id={todo.idx}
					text={todo.text}
					checked={todo.checked}
					onToggle={this.props.onToggle}
					onDelete={this.props.onDelete}
				/>
			);
		});
		return todoList;
	}
}

export default TodoList;
