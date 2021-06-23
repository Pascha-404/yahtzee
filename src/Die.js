import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(evt) {
		this.props.handleClick(this.props.idx);
	}

	displayClass(evt) {
		const eye = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
		let classes = ['Die', 'fas', `fa-dice-${eye[this.props.val]}`];
		if (this.props.locked) {
			classes.push('Die-locked');
		}
		if (this.props.isRolling && this.props.locked === false) {
			classes.push('Die-rolling');
		}
		if (!this.props.val) {
			classes.push(`fa-dice-${eye[6]}`);
		} else {
			classes.push(`fa-dice-${eye[this.props.val]}`);
		}
		return classes.join(' ');
	}
	render() {
		const { isRolling, rollsLeft } = this.props;
		return (
			<i
				disabled={isRolling || rollsLeft === 0 ? true : false}
				className={this.displayClass()}
				onClick={isRolling || rollsLeft === 0 ? undefined : this.handleClick}></i>
		);
	}
}

export default Die;
