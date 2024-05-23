import { useState } from "react";
import { HeaderComponent } from "../components/Header/Header";
import { ImageComponent } from "../components/Image/Image";

export const FavouritePage = () => {
    const favValues = {
        titleName: 'Fav Images',
        buttonText:'Search',
        imageUrl:'./src/assets/photosPage.svg',
        imageAlt:'Photos page',
        linkTo:'/'
    }

    const [favImages, setFavImages] = useState([JSON.parse(localStorage.getItem("favPhotosArray") || "[]") ]);

    const favButtonhandler = (image) => {
        
        if(!favImages[0].some(favImages => favImages.id === image.id))
            {
                favImages[0].push({
                    id: image.id,
                    imageUrl: image.imageUrl,
                    downloadUrl: image.downloadUrl,
                    description: image.description,
                    width: image.width,
                    height: image.height,
                    likes: image.likes,
                    date: new Date(),
                });
    
                localStorage.setItem("favPhotosArray", JSON.stringify(favImages[0]))
            }
            else
            {
                favImages[0] = favImages[0].filter(favImages => favImages.id !== image.id);

                localStorage.setItem("favPhotosArray", JSON.stringify(favImages[0]))
            }
    }

    return(
        <>
            <HeaderComponent values={favValues} />
            <div className="images-displayer">
            {favImages[0].map((imageElement, index) => <ImageComponent image={imageElement} extended={false} favHandler={favButtonhandler} key={imageElement.id}/>)}
            </div>
        </>
    )
};