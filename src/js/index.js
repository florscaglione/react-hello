//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";
//render your react application
let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 1000) % 10;
	const three = Math.floor(counter / 100) % 10;
	const two = Math.floor(counter / 10) % 10;
	const one = Math.floor(counter % 10);
	counter++;
	ReactDOM.render(
		<SecondsCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
