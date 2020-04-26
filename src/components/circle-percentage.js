import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './circle.css';

export default class CirclePercentage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className={`c100 p${this.props.percentage} ${this.props.color} ${this.props.dark === true ? "dark" : ""}`}>
				<span>{this.props.percentage + "%"}</span>
				<div class="slice">
					<div class="bar"></div>
					<div class="fill"></div>
				</div>
			</div>
		);
	}
}

CirclePercentage.defaultProps = {
	percentage: 33
};

CirclePercentage.propTypes = {
	percentage: PropTypes.number.isRequired,
  color: PropTypes.string,
  dark: PropTypes.bool
}
