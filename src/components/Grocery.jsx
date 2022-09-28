/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */
import { useState } from 'react';

const Product = ({ name, votes }) => {
	const [productVotes, setProductVotes] = useState(votes);

	const handlePlus = () => {
		setProductVotes(prevProductVotes => prevProductVotes + 1);
	};

	const handleMinus = () => {
		setProductVotes(prevProductVotes => prevProductVotes === 0 ? prevProductVotes : prevProductVotes - 1);
	};

	return (
		<li className={'productsContainer'}>
			<span>
				{name} - votes: {productVotes}
			</span>
			<div>
				<button
					className={'votesButton'}
					onClick={handleMinus}
					disabled={!productVotes}
				>
					-
				</button>
				<button
					className={'votesButton'}
					onClick={handlePlus}
				>
					+
				</button>
			</div>
		</li>
	);
};

const Grocery = ({ products }) => {
	return (
		<ul>
			{products.map(product => (
				<Product
					key={product.name}
					name={product.name}
					votes={product.votes}
				/>
			))}
		</ul>
	);
};

export default Grocery;
