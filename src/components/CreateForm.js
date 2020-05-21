import React from "react";
import "./CreateForm.css";
class CreateForm extends React.Component {
	state = {
		input: ""
	};

	onChange = e => {
		this.setState({
			input: e.target.value
		});
	};

	onCreate = () => {
		this.props.onCreate(this.state.input);
		this.setState({ input: "" });
	};
	render() {
		return (
			<div className="create-form">
				<input
					className="todo"
					type="text"
					onChange={this.onChange}
					value={this.state.input}
				></input>
				<button className="btn-create" onClick={this.onCreate}>
					추가
				</button>
			</div>
		);
	}
}

export default CreateForm;
