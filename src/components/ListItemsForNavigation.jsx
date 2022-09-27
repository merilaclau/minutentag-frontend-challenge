/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from 'react';

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience
const itemsList = Array(10).fill({
	/** Add the properties you consider, there are no specific requirements related to what you have to render. Be creative :) */
});

export function ListItemsForNavigation(props) {
	const [selectedIndex, setSelectedIndex] =
		useState(/** Initialize the state as you need */);
	const activeItemRef = useRef();

	useEffect(
		function () {
			// Focus the item using this effect
		},
		[
			/* Use accordingly the dependencies */
		],
	);

	function handleKeyDown(event) {
		// Add the proper logic to calculate the index that correspond to the item that should be focused.
	}

	return (
		<ul onKeyDown={handleKeyDown}>
			{/** Render itemsList as you wish, probably you want to render <li></li> with the proper attributes */}
			{/** If you have issues focusing an element, it is probably because the element is not focusable originally. Try with tabIndex={0} */}
			{/** Do not forget to pass the reference to the selected item */}
		</ul>
	);
}
