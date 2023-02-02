import Profile from "./components/Profile";

const Example = () => {
	return (
		<>
			<ul>
				<Profile name="Geo" age="18" hobbies={["sports", "music"]} />
				<Profile name="Tom" age="25" hobbies={["movie", "music"]} />
				<Profile
					name="Lisa"
					age="21"
					hobbies={["sports", "travel", "game"]}
				/>
			</ul>
		</>
	);
};

export default Example;
