/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

function Image({ src, onRemove }) {
	return (
		<div class="image">
			<img />
			<button class="remove">X</button>
		</div>
	);
}

export function ImageGallery({ links }) {
	return (
		<div>
			{/* Implement here the Image Gallery using <Image /> component */}
		</div>
	);
}
