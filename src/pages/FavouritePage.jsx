import { HeaderComponent } from "../components/Header/Header";

export const FavouritePage = () => {
    const favValues = {
        titleName: 'Fav Images',
        buttonText:'Search',
        imageUrl:'./src/assets/photosPage.svg',
        imageAlt:'Photos page',
        linkTo:'/'
    }

    const [images, setImages] = useState([]);

    setImages = () => {
        const array = [];



        return array;
    }

    return(
        <HeaderComponent values={favValues} />
    )
};