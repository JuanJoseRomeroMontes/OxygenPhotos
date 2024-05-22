import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { store } from './app/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ImageComponent } from './components/Image/Image'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <App/>
        <ImageComponent url='https://cdn.pixabay.com/photo/2024/03/16/20/35/ai-generated-8637800_1280.jpg' fav={false}/>
        <ImageComponent url='https://images.unsplash.com/photo-1526512340740-9217d0159da9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D' fav={true}/>
        <img src='./src/assets/download.svg' alt='Fav'/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
