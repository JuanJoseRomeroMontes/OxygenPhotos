import { useEffect, useRef, useState } from "react";
import { ImageComponent } from "../Image/Image";
import './Modal.css'
import editIcon from '../../assets/edit.svg';

export const ModalComponent = (props) => {
  const [value, setValue] = useState(props.imageData.description);
  const textareaRef = useRef(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  function focusTextArea(){
    textareaRef.current.focus();
  }

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

        props.closeModal();
      }
    }
  }

  return (
    <>
      <div className='modal'>
          <ImageComponent extended={false} modal={true} image={props.imageData} favHandler={props.favHandler}/>
          <div className="modal__description-container" onClick={focusTextArea}>
              <h1>Description</h1>
              <img src={editIcon} alt="edit" />
              
              <form className="one-line">
                <textarea rows='1' ref={textareaRef} onKeyUp={changeDescription} onChange={handleChange} placeholder='Description here...' 
                name='description-input' className="modal__description-container__input" value={value}/>
              </form>
          </div>
      </div>
      <div className='modal-background' onClick={props.closeModal}/>
    </>
  );
}
