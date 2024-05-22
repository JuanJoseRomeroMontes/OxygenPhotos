import { HeaderComponent } from "../components/Header/Header";

export const SearchPage = () => {
    const homeValues = {
        titleName: 'All Images',
        buttonText:'All',
        imageUrl:'./src/assets/favPage.svg',
        imageAlt:'Fav page',
        linkTo:'/favourites'
    }

    return(
        <HeaderComponent values={homeValues} />
    )
};