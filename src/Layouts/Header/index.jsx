const Header = props => {
  return (
    <>
      <header className="container header-wrapper">
        {props.children}
        <hr />
      </header>
    </>
  );
};

export default Header;
