import { Link } from 'react-router-dom';
import './Header.css';

const defaultParameter = {
  values:{
    titleName: 'All Images',
    buttonText:'All',
    imageUrl:'./src/assets/favPage.svg',
    imageAlt:'Fav page',
    linkTo:'/favourites',
    renderDropdown: true
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

        <form className={`header__main__search-bar ${!props.values.renderDropdown ? 'header__main__search-bar__large' : ''}`} onSubmit={props.filterHandler}>
            <img src='./src/assets/searchIcon.svg'/>
            <input type='text' placeholder='Search' name='input'/>
        </form>

        { props.values.renderDropdown && 
          <div  className='header__main__dropdown-container'>
            <p>Order by:</p>
            <select name="dropdown" id="dropdown" className='header__main__dropdown-container__dropdown' onChange={props.orderHandler}>
              <option disabled selected style={{display:'none'}}></option>
              <option value="width">Width</option>
              <option value="height">Height</option>
              <option value="likes">Likes</option>
              <option value="date">Date added</option>
            </select>
          </div>
        }
      </div>
      
    </header>
  );
}