import "./Child.css";
import React from "react";

const Child = () => {
	return (
		<React.Fragment>
			<div className="component">
				<h3>Hello Component</h3>
			</div>
			<h3>Hello Flagment</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Aspernatur, debitis eius nesciunt eligendi, vero delectus
				voluptatem, porro similique eveniet minus non obcaecati illo
				fuga excepturi velit iure ea tempore quo?
			</p>
		</React.Fragment>
	);
};

export default Child;
