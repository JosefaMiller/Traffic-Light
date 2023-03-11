import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [light, setLight] = useState("");
	return (
		<div className="corner">
			<div className="line">
				<div className="traffic-light">
					<div onClick={() => {
						setLight("red");
					}} className={  light === "red" ? "light red glowR" : "light red"}></div>
				<div onClick={() => {
					setLight("yellow");
				}} className={  light === "yellow" ? "light yellow glowY" : "light yellow"}></div>
			<div onClick={() => {
				setLight("green");
			}} className={  light === "green" ? "light green glowG" : "light green"}></div>
				</div >
			</div >
		</div >

	);
};

export default Home;
