import { HeaderComponent } from "../../components/Header/Header.jsx";
import { ImageComponent } from "../../components/Image/Image.jsx";
import { useEffect, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { FetchSearchThunk } from "../../features/SearchSlice/searchThunk.js";
import { addFavPhoto } from "../../features/SearchSlice/SearchSlice.js";
import './SearchPage.css'

export const SearchPage = () => {
    const searchPageValues = {
        titleName: 'All Images',
        buttonText:'Fav',
        imageUrl:'./src/assets/favPage.svg',
        imageAlt:'Fav page',
        linkTo:'/favourites'
    }

    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);
    const dispatch = useDispatch();
    const searchStatus = useSelector((state) => state.searchSlice.status);
    const searchData = useSelector((state) => state.searchSlice.data);
    const searchError = useSelector((state) => state.searchSlice.error);

    useEffect(() => {
        if (searchStatus === 'idle') {
            dispatch(FetchSearchThunk())
        }
        else if (searchStatus === 'fulfilled') {
            setLoading(false)
            setImages(searchData)
        }
        else if (searchStatus === 'rejected') {
            setLoading(false)
            console.log(searchError)
            toast.error('API request limit reach, try searching for photos again in 1 hour', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }, [searchStatus])

    const favButtonhandler = (event) => {
        dispatch(addFavPhoto(event))
    }

    return(
        <>
        {
            loading ? (
                <>
                <p>loading...</p>
                </>
            ) : (
                <>
                    <HeaderComponent values={searchPageValues} />
                    <div className="images-displayer">
                        {images.map((imageElement, index) => <ImageComponent image={imageElement} fav={false} favHandler={favButtonhandler} key={imageElement.id}/>)}
                        <div className="images-displayer__separator images-displayer__separator__first"/>
                        <div className="images-displayer__separator images-displayer__separator__second"/>
                    </div>
                    <ToastContainer />
                </>
            )
        }
        </>
    )
};