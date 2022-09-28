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
const itemsList = [
	{ name: '🚃 Railway' },
	{ name: '🚌 Bus' },
	{ name: '🚗 Car' },
	{ name: '🚀 Rocket' },
	{ name: '🚁 Helicopter' },
];

const ListItemsForNavigation = props => {
	const [activeIndex, setActiveIndex] = useState(-1);
	const activeItemRef = useRef(null);

	useEffect(() => {
		if (activeItemRef.current && document.activeElement !== activeItemRef) {
			activeItemRef.current.focus();
		}
	}, [activeIndex]);

	const handleKeyDown = event => {
		if (event.keyCode === 37 || event.keyCode === 40) {
			setActiveIndex(prevValue =>
				prevValue < itemsList.length ? prevValue + 1 : prevValue,
			);
		} else if (event.keyCode === 38 || event.keyCode === 39) {
			setActiveIndex(prevValue =>
				prevValue === 0 ? prevValue : prevValue - 1,
			);
		}
	};

	return (
		<ul onKeyDown={handleKeyDown}>
			{itemsList.map((item, index) => (
				<li
					ref={activeIndex === index ? activeItemRef : null}
					tabIndex={0}
					key={index}
				>
					{item.name}
				</li>
			))}
		</ul>
	);
};

export default ListItemsForNavigation;
