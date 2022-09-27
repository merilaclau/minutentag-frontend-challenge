/**
 * Given a list of teams, we need to expose the teams in different ways:
 * - Criteria 1: depending on the score, order the list from highest to lowest.
 * - Criteria 2: depending on the score, order the list from lowest to highest.
 * - Criteria 3: depending on the player's quantity, show ONLY the teams that has more than 3 players.
 *
 * What you need to implement is:
 * - 3 buttons. Each of them need to execute a criteria.
 * - The list of teams should be updated dynamically depending on the selected filter.
 * - Each team item should display: Team Name / Player’s quantity / Total Score of each team.
 */

import { useState } from 'react';

const TEAMS = [
	{
		name: 'Red',
		players: ['Robin', 'Rey', 'Roger', 'Richard'],
		games: [
			{
				score: 10,
				city: 'LA',
			},
			{
				score: 1,
				city: 'NJ',
			},
			{
				score: 3,
				city: 'NY',
			},
		],
	},
	{
		name: 'Blue',
		players: ['Bob', 'Ben'],
		games: [
			{
				score: 6,
				city: 'CA',
			},
			{
				score: 3,
				city: 'LA',
			},
		],
	},
	{
		name: 'Yellow',
		players: ['Yesmin', 'Yuliana', 'Yosemite'],
		games: [
			{
				score: 2,
				city: 'NY',
			},
			{
				score: 4,
				city: 'LA',
			},
			{
				score: 7,
				city: 'AK',
			},
		],
	},
];

const TeamsList = () => {
	const [teams, setTeams] = useState(TEAMS);

	const getTotalScore = games => {
		let totalScore = 0;
		games.forEach(game => (totalScore += game.score));
		return totalScore;
	};

	// Order teams by score (highest to lowest)
	const orderTeamByScoreHighestToLowest = () => {
		const sortedTeams = teams.sort(
			(a, b) => getTotalScore(b.games) - getTotalScore(a.games),
		);
		setTeams([...sortedTeams]);
	};

	// Order teams by score (lowest to highest)
	const orderTeamByScoreLowestToHighest = () => {
		const sortedTeams = teams.sort(
			(a, b) => getTotalScore(a.games) - getTotalScore(b.games),
		);
		setTeams([...sortedTeams]);
	};

	// Filtering teams that with at least 3 players
	const teamsWithMoreThanThreePlayers = () => {
		setTeams(teams.filter(team => team.players.length >= 3));
	};

	return (
		<div>
			<button onClick={() => setTeams(TEAMS)}>Initial list</button>

			<button onClick={orderTeamByScoreHighestToLowest}>
				Highest to Lowest
			</button>
			<button onClick={orderTeamByScoreLowestToHighest}>
				Lowest to Highest
			</button>
			<button onClick={teamsWithMoreThanThreePlayers}>
				Teams with at least 3 players
			</button>

			{teams && (
				<ul className="teams">
					{teams.map(team => (
						<li key={team.name}>
							<span>{'Team Name: ' + team.name}</span>
							<span>{'Players Quantity: ' + team.players.length}</span>
							<span>{'Total Score: ' + getTotalScore(team.games)}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default TeamsList;
