import { useState } from "react";
import { HeaderComponent } from "../components/Header/Header";
import { ImageComponent } from "../components/Image/Image";

export const FavouritePage = () => {
    const favValues = {
        titleName: 'Fav Images',
        buttonText:'Search',
        imageUrl:'./src/assets/photosPage.svg',
        imageAlt:'Photos page',
        linkTo:'/',
        renderDropdown: true
    }

    let favImagesData = JSON.parse(localStorage.getItem("favPhotosArray") || "[]");
    const [favImagesDisplay, setFavImagesDisplay] = useState(favImagesData);

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
                console.log('order by width')
                setFavImagesDisplay(favImagesData.sort((a,b)=>{ return b.width-a.width}))
                break;
            case 'height':
                console.log('order by height')
                setFavImagesDisplay(favImagesData.sort((a,b)=>{ return b.height-a.height}))
                break;
            case 'likes':
                console.log('order by likes')
                setFavImagesDisplay(favImagesData.sort((a,b)=>{ return b.likes-a.likes}))
                break;
            case 'date':
                console.log('order by date')
                setFavImagesDisplay(favImagesData.sort((a,b)=>{ return new Date(b.date) - new Date(a.date)}))
                break;
            default:
                console.log('error')
        }
    }

    return(
        <>
            <HeaderComponent values={favValues} filterHandler={filterButtonHandler} orderHandler={orderButtonHandler}/>
            <div className="images-displayer">
            {favImagesDisplay.map((imageElement, index) => <ImageComponent image={imageElement} extended={false} favHandler={favButtonHandler} key={imageElement.id}/>)}
            </div>
        </>
    )
};