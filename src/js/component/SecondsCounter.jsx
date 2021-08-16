import React from "react";
import PropTypes from "prop-types";
//import { ProgressPlugin } from "webpack";
//include images into your bundle
//create your first component
function SecondsCounter(props) {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="four">{props.digitFour}</div>
			<div className="three">{props.digitThree}</div>
			<div className="two">{props.digitTwo}</div>
			<div className="one">{props.digitOne}</div>
		</div>
	);
}
SecondsCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};
export default SecondsCounter;
