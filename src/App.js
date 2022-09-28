import Message from './components/Message';
import FocusableInput from './components/FocusableInput';
import ImageGallery from './components/ImageGallery';
import PlayerStatus from './components/PlayerStatus';
import TeamsList from './components/TeamsList';
import Grocery from './components/Grocery';
import Rating from './components/Rating';
import { IMG_SRC, PRODUCTS } from './constants';

import './App.css';
import ListItemsForNavigation from './components/ListItemsForNavigation';
import TestContainer from './components/TestContainer';

export default function App() {
	const images = IMG_SRC;
	const products = PRODUCTS;

	return (
		<div className="App">
			{/* Render here each component from the "components" directory */}
			<TestContainer>
				<h3>'Message' test</h3>
				<Message />
			</TestContainer>
			<TestContainer>
				<h3>'FocusableInput' test</h3>
				<FocusableInput />
			</TestContainer>
			<TestContainer>
				<h3>'ImageGallery' test</h3>
				<ImageGallery links={images} />
			</TestContainer>
			<TestContainer>
				<h3>'PlayerStatus' test</h3>
				<PlayerStatus />
			</TestContainer>
			<TestContainer>
				<h3>'TeamsList' test</h3>
				<TeamsList />
			</TestContainer>
			<TestContainer>
				<h3>'Grocery' test</h3>
				<Grocery products={products} />
			</TestContainer>
			<TestContainer>
				<h3>'Rating' test</h3>
				<Rating />
			</TestContainer>
			<TestContainer>
				<h3>'ListItemsForNavigation' test</h3>
				<ListItemsForNavigation />
			</TestContainer>
		</div>
	);
}
