import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { buscarAsync, listPokemonAsync } from '../redux/actions/actions'
import { logoutAsync } from '../redux/actions/actionsLogin'


import "../styles/styles.css"

const Header = () => {
    const dispatch = useDispatch();
  const { pokemons } = useSelector((store) => store.pokemones)
  const { buscado } = useSelector((store) => store.buscador)

 

  const navigate = useNavigate();

  const formik = useFormik({
     initialValues: {
        name: "",
     },
     onSubmit: (data) => {
        const { name } = data;

        console.log(name);
        dispatch(buscarAsync(name));
        navigate("/search/" + name);
     },
  });

  const handleLogout = () => {
    dispatch(logoutAsync());
 };


  useEffect(() => {

    dispatch(listPokemonAsync())

  }, [])
  return (
    <div className='div'>
        <Navbar className='navv' collapseOnSelect expand="lg" >
  <Container>
  <Navbar.Brand href="#home"><img src='https://res.cloudinary.com/paolavbm/image/upload/v1647480679/pokebola_y8qfrg.png' width={50}/></Navbar.Brand>
  <Navbar.Toggle  />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav>

  <Nav.Link ><Link to="/" className='white' > <p className='white'> Home </p> </Link></Nav.Link>
      
      
    </Nav>
    <Nav className="me-auto">
      
      <Nav.Link href="#pricing">
      <div>



<form onSubmit={formik.handleSubmit} className="buscador">
        <div>
          <input onChange={formik.handleChange} className="header__searchInput" type="text" autoComplete='off' name="name" placeholder='Search for a pokemon...' />
        </div>
        <div className='jeje'><img className='header__searchIcon' type="submit" src='https://res.cloudinary.com/paolavbm/image/upload/v1647483673/lupa_3_ucyugo.png' width={30} /></div>
      </form>


</div>                     
      </Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link href="#deets"> <Link to="/favoritos"><img src='https://res.cloudinary.com/paolavbm/image/upload/v1647481224/favorito_fuhiqu.png' alt='' width={30}/></Link></Nav.Link>
      <Nav.Link eventKey={2} onClick={handleLogout}>
        <img src='https://res.cloudinary.com/paolavbm/image/upload/v1647481045/logout_1_yirtax.png' width={30} alt=""/>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header