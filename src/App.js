import React from "react";
import CreateForm from "./components/CreateForm.js";
import TodoList from "./components/TodoList.js";
import "./App.css";
class App extends React.Component {
	idx = 4;
	state = {
		todos: [
			{ idx: 1, text: "할일1", checked: false },
			{ idx: 2, text: "할일2", checked: true },
			{ idx: 3, text: "할일3", checked: false }
		]
	};
	onCreate = text => {
		// 데이터 만들고
		const todoData = {
			idx: this.idx++,
			text,
			checked: false
		};
		console.log(this.idx);
		// 데이터 등록
		this.setState({
			todos: this.state.todos.concat(todoData)
		});
		console.log(...this.state.todos);
	};
	onDelete = id => {
		console.log(id);
		const newTodos = this.state.todos.filter(todo => todo.idx !== id);
		console.log(newTodos);
		this.setState({
			todos: newTodos
		});
	};
	onToggle = id => {
		const filted = this.state.todos.map(todo => {
			if (todo.idx === id) {
				return { ...todo, checked: !todo.checked };
			}
			return todo;
		});
		console.log(filted);
		console.dir(this.state.todos);
		//바꾼 값을 다시 setState로 등록한다.
		this.setState({
			todos: filted
		});
	};
	render() {
		return (
			<div>
				<header>
					<h1>오늘 뭐하지?</h1>
				</header>
				<CreateForm onCreate={this.onCreate} />
				<TodoList
					todos={this.state.todos}
					onDelete={this.onDelete}
					onToggle={this.onToggle}
				/>
			</div>
		);
	}
}

export default App;
