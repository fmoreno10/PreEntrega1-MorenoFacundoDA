import CartWidget from "../CartWidget/CartWidget";
import logo from './assets/logo.jpg';


const NavBar = () => {
    return (

        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="../../index.html">
                        <img className="logo rounded-circle" src={logo} alt="Logo del Sitio Web"
                            title="Mostrar todos los productos" />
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-dark">Celulares</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Smart TVs</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Informatica</a></li>
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

export default NavBar