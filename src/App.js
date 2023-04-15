import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import Counter from './projects/Counter';
import Quiz from './projects/Quiz';
import Modal from './projects/Modal';
import UsersApp from './projects/Users/UsersApp';
import CurrencyApp from './projects/Currency/CurrencyApp';
import PhotoApp from './projects/PhotoCollection/PhotoApp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/users" element={<UsersApp />} />
        <Route path="/currency" element={<CurrencyApp />} />
        <Route path="/photo" element={<PhotoApp />} />
      </Routes>
    </div>
  );
}

export default App;
