import React from "react";
import Todo from "./Todo.js";
class TodoList extends React.Component {
	constructor(props) {
		super(props);
		// console.log(props.todos);
	}
	render() {
		let { todos } = this.props;
		const todoList = todos.map(todo => {
			return (
				<Todo key={todo.idx} text={todo.text} checked={todo.checked} />
			);
		});
		return todoList;
	}
}

export default TodoList;
