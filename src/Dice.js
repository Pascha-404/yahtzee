import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
	render() {
		const { dice, handleClick, locked, isRolling, rollsLeft } = this.props;
		return (
			<div className='Dice'>
				{dice.map((d, idx) => (
					<Die
						handleClick={handleClick}
						val={d}
						locked={locked[idx]}
						idx={idx}
						key={idx}
						isRolling={isRolling}
						rollsLeft={rollsLeft}
					/>
				))}
			</div>
		);
	}
}

export default Dice;
