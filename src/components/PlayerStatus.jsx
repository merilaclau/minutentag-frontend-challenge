/**
 * Finish the PlayerStatus component so that it follows the current status of the player.
 * - The status can be either "online" or "away".
 * - When the component first renders, the player should be "online".
 * - The toggleStatus function should change the status variable.
 * - The component should count how many times the user changed their status, using the counter.
 * - When the component first renders, the counter should be 1.
 * - The counter should be updated within useEffect when status changes.
 *
 * For example, after the first render, the div element with id root should look like this:
 *
 *   <div>
 *     <h1>Online</h1>
 *     <h3>1</h3>
 *     <button>Toggle status</button>
 *   </div>
 */

import { useState, useEffect } from 'react';

export function PlayerStatus() {
	const [status, setStatus] = useState('Online');
	const [counter, setCounter] = useState(0);

	// Toggle between the two status values - 'Away' and 'Online'
	function onToggleStatus() {
		// Write your code here
	}

	// Implement effect hook below.
	// Update the counter when status changes.
	useEffect(() => {}, []);

	return (
		<div>
			<h1>{/** Render the status */}</h1>
			<h3>{/** Render the counter */}</h3>
			<button>Toggle status</button>
		</div>
	);
}
