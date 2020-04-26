import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './skills.css';

export default class SkillsPercentage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className={`pie-wrapper pie-wrapper--solid progress-${this.props.percentage}`}>
				<span className="label">{this.props.percentage}<span class="smaller">%</span></span>
			</div>
		);
	}
}

SkillsPercentage.defaultProps = {
	percentage: 33
};

SkillsPercentage.propTypes = {
	percentage: PropTypes.number.isRequired
}
