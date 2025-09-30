import logo from "../assets/investment-calculator-logo.png";

const Header = ({ title, id }) => {
  return (
    <header id={id}>
      <img src={logo} alt="Logo showing a money bag" />
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
