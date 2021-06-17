import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {
	render() {
		return (
			<tr
				className={
					this.props.score >= 0
						? 'RuleRow RuleRow-disabled'
						: 'RuleRow RuleRow-active'
				}
				onClick={
					this.props.score === undefined ? this.props.doScore : undefined }>
				<td className='RuleRow-name'>{this.props.name}</td>
				<td className='RuleRow-score'>{this.props.score === undefined ? this.props.description : this.props.score}</td>
			</tr>
		);
	}
}

export default RuleRow;
