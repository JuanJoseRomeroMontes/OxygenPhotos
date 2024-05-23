import { useEffect, useState } from 'react';
import './Image.css';

export const ImageComponent = (props) => {
  //En los props me vendra el objeto imagen de la api, la url a la foto que mostrar en favoritos y la acción de ese botón.
  const unfavImage = './src/assets/unfavPhoto.svg'
  const favImage = './src/assets/favPhoto.svg'
  const [buttonImage, setButtonImage] = useState('');
  const storage = JSON.parse(localStorage.getItem("favPhotosArray") || "[]")

  useEffect(() => {
    if(storage.some(image => image.id === props.image.id))
      setButtonImage(unfavImage)
    else
      setButtonImage(favImage)
  }, [])

  function toggleFav (functionCalled) {
    if(buttonImage == unfavImage)
      setButtonImage(favImage)
    else
    setButtonImage(unfavImage)

      props.favHandler(functionCalled)
  }
  
  return (
    <div className='container'>
      <div className='container__ui'>
        <div className='container__ui__button container__ui__button__fav-position' onClick={() => toggleFav(props.image)} image={props.image}>
          <img src={buttonImage} alt='Fav' className='container__ui__button__fav-image' image={props.image}/>
        </div>

        <div className='container__ui__button container__ui__button__download-position'>
          <p className='container__ui__button__text'>Download</p>
          <img src='./src/assets/download.svg' alt='Fav' className='container__ui__button__download-image'/>
        </div>
      </div>
      <img src={props.image.urls.small} alt="Image not found" className='container__image'/>
    </div>
  );
}

ImageComponent.defaultProps = {
  url: 'https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png',
  fav: false,
}