import Nav from "./NavBar"
const Header = ({nombre,apellido, edad, callback}) => {

  console.log(edad);
  console.log(callback); 

//console.log(props.nombre);
//console.log(props.apellido);
  return (
    <header id="header">
      <h1>E-Commerce Ricardo</h1>
      <p>Bienvenido {nombre} {apellido}</p>
    <Nav/>
    </header>
  );
};

export default Header;
