import React from "react"
import PropTypes from "prop-types"

const Progress = ({percentage = 0}) => {
  // TODO: Display percentage when uploading(can be faked)
	return (
		<div className="progress">
			<div
        className="progress-bar progress-bar-striped bg-success"
        role="progressbar"
        style={{ width: `${percentage}%` }}
      >
      { percentage }%
      </div>
		</div>
	);
};

Progress.propTypes = {
	percentage: PropTypes.number.isRequired
}

export default Progress
