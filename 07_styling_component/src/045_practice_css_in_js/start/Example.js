import styled from "styled-components";

const FirstButton = styled.button`
	display: inline-block;
	border-radius: 3px;
	padding: 0.5rem 0;
	margin: 0.5rem 1rem;
	width: 11rem;
	border: none;
`;

const Example = () => {
	return (
		<>
			<h3>練習問題</h3>
			<FirstButton className="bg-pink-200">ボタン1</FirstButton>
			<FirstButton className="bg-red-400 text-white">ボタン2</FirstButton>
			<FirstButton className="bg-green-600 text-white">ボタン3</FirstButton>
			<FirstButton data-color="dark" className="bg-green-600 text-white data-[color=dark]:bg-black" >ボタン4</FirstButton>
		</>
	);
};

export default Example;
