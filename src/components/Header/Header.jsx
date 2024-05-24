import { Link } from 'react-router-dom';
import './Header.css';

const defaultParameter = {
  values:{
    titleName: 'All Images',
    buttonText:'All',
    imageUrl:'./src/assets/favPage.svg',
    imageAlt:'Fav page',
    linkTo:'/favourites',
    hideDropdown: true
  },
  filterMethod: () => {},
  orderMethod: () => {},
}

export const HeaderComponent = (props = defaultParameter) => {

  return (
    <header className='header' >
      <div className="header__main">
      <h1 className="header__main__title">{props.values.titleName}</h1>
        <Link to={props.values.linkTo} className='header__main__linkStyle'>
          <button className="header__main__button">
            <p>{props.values.buttonText}</p>

            <img src={props.values.imageUrl} alt={props.values.imageAlt}/></button>
        </Link>

        <form className='header__main__search-bar' onSubmit={props.filterMethod}>
            <img src='./src/assets/searchIcon.svg'/>
            <input type='text' placeholder='Search' className='header__main__search-bar__input'/>
        </form>

        <div  className='header__main__dropdown-container' style={{visibility: props.values.hideDropdown ? 'hidden' : 'visible'}} >
          <p>Order by:</p>
          <select name="cars" id="cars" className='header__main__dropdown-container__dropdown' onChange={props.orderMethod}>
            <option value="a">Width</option>
            <option value="saab">Height</option>
            <option value="opel">Likes</option>
            <option value="opel">Date added</option>
          </select>
        </div>
      </div>
        
    </header>
  );
}