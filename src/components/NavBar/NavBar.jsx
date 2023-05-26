import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import logo from '../../assets/logo.jpg';
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
    return (

        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/">
                        <img className="logo rounded-circle" src={logo} alt="Logo del Sitio Web"
                            title="Mostrar todos los productos" />
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink to={`/category/celulares`} className="nav-link px-2 link-dark">Celulares</NavLink></li>
                        <li><NavLink to={`/category/smart tvs`} className="nav-link px-2 link-dark">Smart TVs</NavLink></li>
                        <li><NavLink to={`/category/informatica`} className="nav-link px-2 link-dark">Informatica</NavLink></li>
                    </ul>

                    <form id="frmBuscar" className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex flex-row" role="search">
                        <input id="textoABuscar" type="search" className="form-control pe-5" placeholder="Buscar"
                            aria-label="Search" />
                            <button id="btnBuscar" type="button"
                                className="btn btn-sm btn-outline-primary mx-3 px-5">Buscar</button>
                    </form>

                    <CartWidget />

                </div>
            </div>

        </header>
    );
}

export default NavBar;