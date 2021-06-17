import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import {
	ones,
	twos,
	threes,
	fours,
	fives,
	sixes,
	threeOfKind,
	fourOfKind,
	fullHouse,
	smallStraight,
	largeStraight,
	yahtzee,
	chance,
} from './Rules';

class ScoreTable extends Component {
	render() {
		const { scores, doScore } = this.props;
		const description = {
			ones: '1 point per 1',
			twos: '2 points per 2',
			threes: '3 points per 3',
			fours: '4 points per 4',
			fives: '5 points per 5',
			sixes: '6 points per 6',
			threeOfKind: 'Sum all dice if 3 are the same',
			fourOfKind: 'Sum all dice if 4 are the same',
			fullHouse: '25 points for a full house',
			smallStraight: '30 points for a small straight',
			largeStraight: '40 points for a large straight',
			yahtzee: '50 points for yahtzee',
			chance: 'Sum of all dice',
		};

		return (
			<div className='ScoreTable'>
				<section className='ScoreTable-section'>
					<h2>Upper</h2>
					<table cellSpacing='0'>
						<tbody>
							<RuleRow
								name='Ones'
								score={scores.ones}
								doScore={evt => doScore('ones', ones.evalRoll)}
								description={description.ones}
							/>
							<RuleRow
								name='Twos'
								score={scores.twos}
								doScore={evt => doScore('twos', twos.evalRoll)}
                description={description.twos}
							/>
							<RuleRow
								name='Threes'
								score={scores.threes}
								doScore={evt => doScore('threes', threes.evalRoll)}
                description={description.threes}
							/>
							<RuleRow
								name='Fours'
								score={scores.fours}
								doScore={evt => doScore('fours', fours.evalRoll)}
                description={description.fours}
							/>
							<RuleRow
								name='Fives'
								score={scores.fives}
								doScore={evt => doScore('fives', fives.evalRoll)}
                description={description.fives}
							/>
							<RuleRow
								name='Sixes'
								score={scores.sixes}
								doScore={evt => doScore('sixes', sixes.evalRoll)}
                description={description.sixes}
							/>
						</tbody>
					</table>
				</section>

				<section className='ScoreTable-section ScoreTable-section-lower'>
					<h2>Lower</h2>
					<table cellSpacing='0'>
						<tbody>
							<RuleRow
								name='Three of Kind'
								score={scores.threeOfKind}
								doScore={evt => doScore('threeOfKind', threeOfKind.evalRoll)}
                description={description.threeOfKind}
							/>
							<RuleRow
								name='Four of Kind'
								score={scores.fourOfKind}
								doScore={evt => doScore('fourOfKind', fourOfKind.evalRoll)}
                description={description.fourOfKind}
							/>
							<RuleRow
								name='Full House'
								score={scores.fullHouse}
								doScore={evt => doScore('fullHouse', fullHouse.evalRoll)}
                description={description.fullHouse}
							/>
							<RuleRow
								name='Small Straight'
								score={scores.smallStraight}
								doScore={evt => doScore('smallStraight', smallStraight.evalRoll)}
                description={description.smallStraight}
							/>
							<RuleRow
								name='Large Straight'
								score={scores.largeStraight}
								doScore={evt => doScore('largeStraight', largeStraight.evalRoll)}
                description={description.largeStraight}
							/>
							<RuleRow
								name='Yahtzee'
								score={scores.yahtzee}
								doScore={evt => doScore('yahtzee', yahtzee.evalRoll)}
                description={description.yahtzee}
							/>
							<RuleRow
								name='Chance'
								score={scores.chance}
								doScore={evt => doScore('chance', chance.evalRoll)}
                description={description.chance}
							/>
						</tbody>
					</table>
				</section>
			</div>
		);
	}
}

export default ScoreTable;
