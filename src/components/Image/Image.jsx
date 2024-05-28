import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import FileSaver, { saveAs } from 'file-saver';
import './Image.css';

export const ImageComponent = (props) => {
  const unfavImage = './src/assets/unfavPhoto.svg'
  const favImage = './src/assets/favPhoto.svg'
  const [buttonImage, setButtonImage] = useState('');
  const storage = JSON.parse(localStorage.getItem("favPhotosArray") || [])

  useEffect(() => {
    if(storage.some(image => image.id === props.image.id))
      setButtonImage(unfavImage)
    else
      setButtonImage(favImage)
  }, [])

  function toggleFav (imageData) {
    if(buttonImage == unfavImage)
      setButtonImage(favImage)
    else
    setButtonImage(unfavImage)

    props.favHandler(imageData)

    return false;
  }

  function downloadImage() {
    if(props.extended)
      FileSaver.saveAs(props.image.urls.full, "image.jpg");
    else
      FileSaver.saveAs(props.image.downloadUrl, "image.jpg");
  }

  function openModal() {
    if(props.openModal) //checks if its truthy
      props.openModal(props.image)
  }
    
  return (
    <div className={props.modal ? 'container modal-adjusment' : 'container'}>
      <div className='container__ui'>
        <div className='container__ui__button container__ui__button__fav-position' onClick={() => toggleFav(props.image)}>
          <img src={buttonImage} alt='Fav' className='container__ui__button__fav-image'/>
        </div>

        <div className='container__ui__button container__ui__button__download-position' onClick={downloadImage}>
          <p className='container__ui__button__text'>Download</p>
          <img src='./src/assets/download.svg' alt='Fav' className='container__ui__button__download-image'/>
        </div>

        { props.modal && 
          <div className='container__ui__info-container container__ui__info-container__info-position'>
            <div className='one-line'>
              <div className='container__ui__info-container__info-card'>
                <p className='container__ui__info-container__info-card__text'>{`Imported in ${format(props.image.date, 'dd-MM-yyyy')}`}</p>
              </div>
            </div>

            <div className='container__ui__info-container__info-card'>
              <p className='container__ui__info-container__info-card__text'>{`${props.image.width}x${props.image.height}px`}</p>
            </div>

            <div className='container__ui__info-container__info-card'>
              <p className='container__ui__info-container__info-card__text'>{`${props.image.width} likes`}</p>
            </div>
          </div>
        }
      </div>
      <img src={props.extended ? props.image.urls.small : props.image.imageUrl} alt="Image not found" className='container__image' onClick={openModal}/>
    </div>
  );
}