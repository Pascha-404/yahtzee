import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {
	render() {
		const {score, description, doScore, name} = this.props
		return (
			<tr
				className={
					score >= 0 ? 'RuleRow RuleRow-disabled' : 'RuleRow RuleRow-active'
				}
				onClick={score === undefined ? doScore : undefined}>
				<td className='RuleRow-name'>{name}</td>
				<td className='RuleRow-score'>
					{score === undefined ? description : score}
				</td>
			</tr>
		);
	}
}

export default RuleRow;
