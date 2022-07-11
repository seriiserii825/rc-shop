import './App.css';
import Footer from './layouts/Footer';
import { Header } from './layouts/Header';
import { Shop } from './pages/Shop';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='AppMain'>
				<Shop />
			</div>
			<Footer />
		</div>
	);
}

export default App;
