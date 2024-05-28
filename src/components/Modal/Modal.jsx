import { ImageComponent } from "../Image/Image";
import './Modal.css'

export const ModalComponent = (props) => {

  function changeDescription(event){
    event.preventDefault()
    if (event.key === "Enter" && event.shiftKey == false) {
      const storage = JSON.parse(localStorage.getItem("favPhotosArray") || "[]")
      const indexToReplace = storage.findIndex((image) => image.id === props.imageData.id);

      if(indexToReplace !== -1)
      {
        props.imageData.description = event.target.value.replace( /\r?\n/gi, '' )
        
        event.target.value = props.imageData.description
        storage.splice(indexToReplace, 1, props.imageData);

        localStorage.setItem("favPhotosArray", JSON.stringify(storage))
      }
    }
  }

  return (
    <>
      <div className='modal'>
          <ImageComponent extended={false} modal={true} image={props.imageData} favHandler={props.favHandler}/>
          <div className="modal__description-container">
              <h1>Description</h1>
              <img src="./src/assets/edit.svg" alt="edit" />
              
              <form className="one-line">
                <textarea onKeyUp={changeDescription} placeholder='Description here...' name='description-input'  
                className="modal__description-container__input" defaultValue={props.imageData.description} />
              </form>
          </div>
      </div>
      <div className='modal-background' onClick={props.closeModal}/>
    </>
  );
}
