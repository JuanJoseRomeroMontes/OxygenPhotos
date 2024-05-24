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

    const favImagesData = JSON.parse(localStorage.getItem("favPhotosArray") || "[]");
    const [favImagesDisplay, setFavImagesDisplay] = useState(favImagesData);

    const favButtonHandler = (image) => {
        if(!favImagesData[0].some(favImagesData => favImagesData.id === image.id))
            {
                favImagesData[0].push({
                    id: image.id,
                    imageUrl: image.imageUrl,
                    downloadUrl: image.downloadUrl,
                    description: image.description,
                    width: image.width,
                    height: image.height,
                    likes: image.likes,
                    date: new Date(),
                });
    
                localStorage.setItem("favPhotosArray", JSON.stringify(favImagesData[0]))
            }
            else
            {
                favImagesData[0] = favImagesData[0].filter(favImagesData => favImagesData.id !== image.id);

                localStorage.setItem("favPhotosArray", JSON.stringify(favImagesData[0]))
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