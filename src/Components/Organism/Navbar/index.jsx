import Logo from '../../Molecules/Logo/Logo';
import NavList from '../../Molecules/NavList';
import Search from '../../Molecules/Search/NavbarSearch';

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavList />
      <Logo />
      <Search />
    </div>
  );
};

export default Navbar;
