import { useState } from "react";

const Form = ({ createTodo }) => {
	const [input, setInput] = useState("");
	const add = (e) => {
		e.preventDefault();
		const val = input;

		const newTodo = {
			id: Math.floor(Math.random() * 1e5),
			content: val,
		};

		createTodo(newTodo);
		setInput("");
	};
	return (
		<>
			<form onSubmit={add}>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button>追加</button>
			</form>
		</>
	);
};

export default Form;
