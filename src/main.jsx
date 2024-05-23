import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './app/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { SearchPage } from './pages/SearchPage/SearchPage'
import { FavouritePage } from './pages/FavouritePage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <SearchPage/> }/>
          <Route path='/favourites' element={ <FavouritePage/> }/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
