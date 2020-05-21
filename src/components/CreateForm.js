import React, { useRef } from "react";
import "./CreateForm.css";
class CreateForm extends React.Component {
	showInputValue = e => {
		const { previousElementSibling } = e.target;
		this.props.onCreate(previousElementSibling.value);
		previousElementSibling.value = "";
	};
	render() {
		return (
			<div className="create-form">
				<input className="todo" type="text"></input>
				<button className="btn-create" onClick={this.showInputValue}>
					추가
				</button>
			</div>
		);
	}
}

export default CreateForm;
