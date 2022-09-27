/*
 * The Message component contains an anchor element and
 * a paragraph below the anchor. Rendering of the paragraph
 * should be toggled by clicking on the anchor element
 * using the following logic:
 *
 * - At the start, the paragraph should not be rendered.
 * - After a click, the paragraph should be rendered.
 * - After another click, the paragraph should not be rendered.
 * - Finish the Message component by implementing this logic.
 */
import { useState } from 'react';

const Message = () => {
	const [mustShowPhone, setMustShowPhone] = useState(false);

	return (
		<>
			{/* anchor tag was replaced with a button tag so as to avoid invalid href attibute errors */}
			<button onClick={() => setMustShowPhone(!mustShowPhone)}>
				Want to buy a new car?
			</button>
			{mustShowPhone && <p>Call +11 22 33 44 now!</p>}
		</>
	);
};

export default Message;
