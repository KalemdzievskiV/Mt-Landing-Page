import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AppartmentList from './components/AppartmentsList';
import AppartmentDetails from './components/AppartmentDetails';

function App() {
  return (
    <div className='w-full mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appartments' element={<AppartmentList />} />
        <Route path='/property/:id' element={<AppartmentDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
