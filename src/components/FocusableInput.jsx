/**
 * The TextInput component renders an input element in the DOM
 * and accepts a ref that is forwarded to that input element.
 * Finish the FocusableInput component:
 * - The component should accept a focused prop.
 * - When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
 * - If on mounting the focused prop is true, the input should receive the focus.
 */

import React, { useEffect, createRef } from 'react';

const Input = props => {
	const { forwardedRef, ...otherProps } = props;
	return (
		<input
			{...otherProps}
			ref={forwardedRef}
		/>
	);
};

const TextInput = React.forwardRef((props, ref) => {
	return (
		<Input
			{...props}
			forwardedRef={ref}
		/>
	);
});

// Implement:
// When the focused prop is changed from false to true,
// and the input is not focused, it should receive focus.
// If focused prop is true, the input should receive the focus.
const FocusableInput = ({ focusable = true }) => {
	const inputRef = createRef();

	useEffect(() => {
		if (document.activeElement !== inputRef.current && focusable) {
			inputRef.current.focus();
		}
	}, [focusable, inputRef]);

	return <TextInput ref={inputRef} />;
};

export default FocusableInput;
