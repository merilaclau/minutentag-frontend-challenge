/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */
import { useState } from 'react';

const Image = ({ src, alt, onRemove }) => {
	return (
		<div class="image">
			<img
				src={src}
				alt={alt}
			/>
			<button
				onClick={onRemove}
				class="remove"
			>
				X
			</button>
		</div>
	);
};

const ImageGallery = ({ links }) => {
	const [images, setImages] = useState(links);
	const removeItem = index => {
		setImages(images.filter((img, i) => index !== i));
	};

	return (
		<div>
			{images.map((img, index) => (
				<Image
					key={index}
					src={img.src}
					alt={img.alt}
					onRemove={() => removeItem(index)}
				/>
			))}
		</div>
	);
};

export default ImageGallery;
