import { useState } from "react";

const Example = () => {
	let [default_value1, count1] = useState(0);
	let [default_value2, count2] = useState(0);
	let [default_value3, count3] = useState(0);
	let button_css = "border-black border bg-gray-300 px-4 py-2";

	return (
		<>
			<p>ボタンAを{default_value1}回押しました！</p>
			<button className={button_css} onClick={() => count1(default_value1 + 1)}>
				ボタンA
			</button>
			<p>ボタンBを{default_value2}回押しました！</p>
			<button className={button_css} onClick={() => count2(default_value2 + 1)}>
				ボタンB
			</button>
			<p>ボタンCを{default_value3}回押しました！</p>
			<button className={button_css} onClick={() => count3(default_value3 + 1)}>
				ボタンC
			</button>
		</>
	);
};

export default Example;
