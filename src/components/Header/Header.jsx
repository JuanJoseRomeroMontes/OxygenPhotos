import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {

  return (
    <header className='header' >
      <div className="header__main">
      <h1 className="header__main__title">{props.values.titleName}</h1>
        <Link to={props.values.linkTo} className='header__main__linkStyle'>
          <button className="header__main__button">
            <p>{props.values.buttonText}</p>

            <img src={props.values.imageUrl} alt={props.values.imageAlt}/></button>
        </Link>

        <div className='header__main__search-bar'>
            <img src='./src/assets/searchIcon.svg'/>
            <input type='text' placeholder='Search' className='header__main__search-bar__input'></input>
        </div>

        <div  className='header__main__dropdown-container'>
          <p>Order by:</p>
          <select name="cars" id="cars" className='header__main__dropdown-container__dropdown' >
            <option value="a">Width</option>
            <option value="saab">Height</option>
            <option value="opel">Likes</option>
          </select>
        </div>
      </div>
        
    </header>
  );
}

Header.defaultProps = {
  values:{
    titleName: 'All Images',
    buttonText:'All',
    imageUrl:'./src/assets/favPage.svg',
    imageAlt:'Fav page',
    linkTo:'/favourites'
  }
}

export default Header;