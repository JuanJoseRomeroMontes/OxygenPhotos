import { Link, Route, Routes } from 'react-router-dom'
import { SearchPage } from './features/searchSlice/SearchSlice';
import { FavouritePage } from './features/favouritesSlice/FavouritesSlice';
import Header from './components/Header/Header';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <SearchPage/> }/>
        <Route path='/favourites' element={ <FavouritePage/> }/>
      </Routes>
    </>
  );
}

export default App;
