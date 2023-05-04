import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h3>Mi Ecommerce</h3>
            <div>
                <button>Smartphones</button>
                <button>Notebooks</button>
                <button>Smart TVs</button>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar