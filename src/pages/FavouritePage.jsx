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
        hideDropdown: false
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
                favImagesData = favImagesData.filter(favImagesData => favImagesData.id !== image.id);

                localStorage.setItem("favPhotosArray", JSON.stringify(favImagesData))
            }
    }

    const filterButtonHandler = () => {

    }

    const orderButtonHandler = () => {

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