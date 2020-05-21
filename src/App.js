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
			todos: [...this.state.todos, todoData]
		});
		console.log(...this.state.todos);
	};

	render() {
		return (
			<div>
				<header>
					<h1>오늘 뭐하지?</h1>
				</header>
				<CreateForm onCreate={this.onCreate} />
				<TodoList todos={this.state.todos} />
			</div>
		);
	}
}

export default App;
