const List = ({ todos, deleteTodo }) => {
	const complete = (id) => {
		deleteTodo(id);
	};
	return (
		<>
			<ul>
				{todos.map((todo) => {
					return (
						<li key={todo.id}>
							<button onClick={() => complete(todo.id)}>
								完了
							</button>
							<span>{todo.content}</span>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default List;
