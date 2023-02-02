const Expression = () => {
	const title = "Expression";
	const className = "text-green-500 border-green-500 border-solid border-4";
	const array = ["item1", "item2", "item3"];
	const hello = (arg) => `${arg} Function`;
    const jsx = <h3>Hello JSX</h3>
	return (
		<div className={className}>
			<h3>Hello {title}</h3>
			<h3>{array}</h3>
            <h3>{hello("Hello")}</h3>
            {<h3>Hello JSX</h3>}
            {jsx}
		</div>
	);
};

export default Expression;
