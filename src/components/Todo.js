import React from "react";
import "./Todo.css";
const Todo = ({ text, checked }) => (
	<div className="todos">
		<div className={`check ${checked && "active"}`}>&#10004;</div>
		<div className="title">{text}</div>
		<button className="btn-delete">삭제</button>
	</div>
);

export default Todo;
