import { useState } from "react";
import { HeaderComponent } from "../components/Header/Header";
import { ImageComponent } from "../components/Image/Image";
import { ModalComponent } from "../components/Modal/Modal";

export const FavouritePage = () => {
    const favValues = {
        titleName: 'Fav Images',
        buttonText:'Search',
        imageUrl:'./src/assets/photosPage.svg',
        imageAlt:'Photos page',
        linkTo:'/',
        renderDropdown: true
    }

    let modalImageData = {
        date: "2024-05-24T10:34:44.828Z",
        description: "Blossoms from a pear tree. Fujifilm x100v.",
        downloadUrl: "https://images.unsplash.com/photo-1708741163431-7ac8fd4c25d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTUwMjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTY1NDY0NTB8&ixlib=rb-4.0.3&q=85",
        height: 5200,
        id: "U4-xOED3WiM",
        imageUrl: "https://images.unsplash.com/photo-1708741163431-7ac8fd4c25d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTUwMjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTY1NDY0NTB8&ixlib=rb-4.0.3&q=80&w=400",
        likes: 86,
        width: 4160,
    };
    
    let favImagesData = JSON.parse(localStorage.getItem("favPhotosArray") || "[]");
    const [modalImage, setmodalImage] = useState(modalImageData);
    const [favImagesDisplay, setFavImagesDisplay] = useState(favImagesData);
    const [showModal, setShowModal] = useState(false);

    const favButtonHandler = (image) => {
        if(!favImagesData.some(favImagesData => favImagesData.id === image.id))
            {
                favImagesData.push({
                    id: image.id,
                    imageUrl: image.imageUrl,
                    downloadUrl: image.downloadUrl,
                    description: image.description,
                    width: image.width,
                    height: image.height,
                    likes: image.likes,
                    date: new Date(),
                });
    
                localStorage.setItem("favPhotosArray", JSON.stringify(favImagesData))
            }
            else
            {
                favImagesData = favImagesData.filter(favImagesData => favImagesData.id !== image.id);

                localStorage.setItem("favPhotosArray", JSON.stringify(favImagesData.filter(favImagesData => favImagesData.id !== image.id)))
            }
    }

    const filterButtonHandler = (event) => {
        event.preventDefault()

        setFavImagesDisplay(favImagesData.filter(image => image.description.toLowerCase().includes(event.target.input.value.toLowerCase())))
    }

    const orderButtonHandler = (event) => {
        
        switch(event.target.value){
            case 'width':
                setFavImagesDisplay(favImagesData.sort((a,b)=>{ b.width-a.width}))
                break;
            case 'height':
                setFavImagesDisplay(favImagesData.sort((a,b)=>{ b.height-a.height}))
                break;
            case 'likes':
                setFavImagesDisplay(favImagesData.sort((a,b)=>{ b.likes-a.likes}))
                break;
            case 'date':
                setFavImagesDisplay(favImagesData.sort((a,b)=>{ new Date(b.date) - new Date(a.date)}))
                break;
            default:
                console.log('error')
        }
    }

    const openModalHandler = (image) => {
        setmodalImage(image)
        setShowModal(true)
    }

    const closeModalHandler = (event) => {
        setShowModal(false)
        modalImageData = {}
    }

    return(
        <>
            <HeaderComponent values={favValues} filterHandler={filterButtonHandler} orderHandler={orderButtonHandler}/>
            <div className="images-displayer">
            {favImagesDisplay.map((imageElement, index) => <ImageComponent image={imageElement} extended={false} modal={false} 
            openModal={openModalHandler} favHandler={favButtonHandler} key={imageElement.id}/>)}
            </div>
            { showModal && 
            <ModalComponent imageData={modalImage} favHandler={favButtonHandler} closeModal={closeModalHandler} openModal={openModalHandler}/>
            }
        </>
    )
};