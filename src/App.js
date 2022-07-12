import './App.css';
import { Context } from './hooks/Context';
import Footer from './layouts/Footer';
import { Header } from './layouts/Header';
import { Shop } from './pages/Shop';

function App() {
	return (
		<Context>
			<div className='App'>
				<Header />
				<div className='AppMain'>
					<Shop />
				</div>
				<Footer />
			</div>
		</Context>
	);
}

export default App;
