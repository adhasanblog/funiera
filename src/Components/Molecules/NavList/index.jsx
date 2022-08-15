import { Link } from 'react-router-dom';
const NavList = () => {
  return (
    <div className='nav-list'>
      <Link to={'/'} className='nav-item'>
        Home
      </Link>
      <Link to={'/product'} className='nav-item'>
        Product
      </Link>
      <Link to={'/showroom'} className='nav-item'>
        Showroom
      </Link>
      <Link to={'/categories'} className='nav-item'>
        Categories
      </Link>
    </div>
  );
};

export default NavList;
