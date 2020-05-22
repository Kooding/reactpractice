import React from "react";
import "./Todo.css";
const Todo = ({ id, text, checked, onToggle, onDelete }) => (
	<div className="todos">
		<div className={`check ${checked && "active"}`}>&#10004;</div>
		<div className="title" onClick={() => onToggle(id)}>
			{text}
		</div>
		<button className="btn-delete" onClick={() => onDelete(id)}>
			삭제
		</button>
	</div>
);

export default Todo;
