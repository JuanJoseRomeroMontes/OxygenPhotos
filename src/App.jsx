import { Route, Routes } from 'react-router-dom'
import { FavouritePage } from './pages/FavouritePage';
import { SearchPage } from './pages/SearchPage';

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
