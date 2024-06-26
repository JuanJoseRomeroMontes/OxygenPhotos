import { HeaderComponent } from "../../components/Header/Header.jsx";
import { ImageComponent } from "../../components/Image/Image.jsx";
import { useEffect, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { FetchRandomThunk, FetchSearchThunk } from "../../features/SearchSlice/searchThunk.js";
import { toggleFavPhoto } from "../../features/SearchSlice/SearchSlice.js";
import './SearchPage.css'
import favPageIcon from '../../assets//favPage.svg';

export const SearchPage = () => {
    const searchPageValues = {
        titleName: 'All Images',
        buttonText:'Fav',
        imageUrl: favPageIcon,
        imageAlt:'Fav page',
        linkTo:'/favourites',
        renderDropdown: false
    }

    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);
    const dispatch = useDispatch();
    const searchStatus = useSelector((state) => state.searchSlice.status);
    const searchData = useSelector((state) => state.searchSlice.data);
    const searchError = useSelector((state) => state.searchSlice.error);

    useEffect(() => {
        if (searchStatus === 'idle') {
            dispatch(FetchRandomThunk())
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

    const favButtonhandler = (image) => {
        dispatch(toggleFavPhoto(image))
    }

    const filterButtonHandler = (event) => {
        event.preventDefault()
        const value = event.target.input.value

        if(value === "")
            dispatch(FetchRandomThunk())
        else
            dispatch(FetchSearchThunk(value))
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
                    <HeaderComponent values={searchPageValues} filterHandler={filterButtonHandler}/>
                    <div className="images-displayer">
                        {images.map((imageElement, index) => <ImageComponent image={imageElement} extended={true} modal={false} favHandler={favButtonhandler} key={imageElement.id}/>)}
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