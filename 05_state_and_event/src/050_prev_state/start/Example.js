import { useState } from "react";

const Example = () => {
	let [default_value, count] = useState(0);
	const countUp = () => {
		count(default_value + 1);
	};
	const countDown = () => {
		count(default_value - 1);
	};
	return (
		<>
			<p>現在のカウント数：{default_value}</p>
			<button className="border py-2 py-4" onClick={countUp}>
				+
			</button>
			<button className="border py-2 py-4" onClick={countDown}>
				+
			</button>
		</>
	);
};

export default Example;
