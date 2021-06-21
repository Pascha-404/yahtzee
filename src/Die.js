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
		if (this.props.locked === true) {
			classes.push('Die-locked');
		}
		if (this.props.isRolling === true && this.props.locked === false) {
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
		return (
			<i
				disabled={
					this.props.isRolling === true || this.props.rollsLeft === 0 ? true : false
				}
				className={this.displayClass()}
				onClick={
					this.props.isRolling === true || this.props.rollsLeft === 0
						? undefined
						: this.handleClick
				}></i>
		);
	}
}

export default Die;
