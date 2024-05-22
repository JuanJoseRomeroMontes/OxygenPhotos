import { HeaderComponent } from "../components/Header/Header";

export const FavouritePage = () => {
    const favValues = {
        titleName: 'Fav Images',
        buttonText:'Fav',
        imageUrl:'./src/assets/photosPage.svg',
        imageAlt:'Photos page',
        linkTo:'/'
    }

    return(
        <HeaderComponent values={favValues} />
    )
};