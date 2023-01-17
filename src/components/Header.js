import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="logo deliveroo" />
      </div>
    </header>
  );
};

export default Header;
