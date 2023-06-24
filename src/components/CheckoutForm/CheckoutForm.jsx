import './CheckoutForm.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { createOrder } from "../../services/firebase";
import Swal from 'sweetalert2';

const CheckoutForm = () => {
    const { cart, clearCart, totalPrice } = useContext(CartContext);
    const [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: "",
        emailConfirm: ""
    });

    const navigateTo = useNavigate();

    function onInputChange(evt) {
        const newUserData = { ...userData };
        newUserData[evt.target.name] = evt.target.value;
        setUserData(newUserData);
    }

    async function handleCreateOrder(evt) {
        evt.preventDefault();

        if (userData.name === "" || userData.phone === "" || userData.email === "" ) {
            Swal.fire({
                icon: 'error',
                text: 'Debe completar todos los campos para continuar con la compra',
                title: 'Campos obligatorios',
                confirmButtonText: 'Aceptar',
            });

            return -1;
        }
        
        if (userData.email != userData.emailConfirm) {
            Swal.fire({
                icon: 'error',
                text: 'Los email deben coincidir para continuar',
                title: 'Email incorrecto',
                confirmButtonText: 'Aceptar',
            });

            return -1;
        }

        const order = {
            items: cart,
            buyerInfo: userData,
            purchaseDate: new Date(),
            total: totalPrice()
        };

        const orderId = await createOrder(order);

        clearCart();
        navigateTo(`/order-confirmation/${orderId}`);

    }

    return (
        <form className="container needs-validation was-validated" noValidate="" onSubmit={handleCreateOrder}>
            <div className="d-flex flex-column justify-content align-items-center">
                <div className="row g-3 w-50">
                    <div className="col-sm-6">
                        <label htmlFor="fullName" className="form-label">Nombre y Apellido</label>
                        <input type="text" className="form-control" name="name" onChange={onInputChange} placeholder="" value={userData.name} required="" />
                        <div className="invalid-feedback">
                            El nombre es obligatorio.
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <label htmlFor="phoneNumber" className="form-label">Telefono</label>
                        <input type="text" className="form-control" name="phone" onChange={onInputChange} placeholder="" value={userData.phone} required="" />
                        <div className="invalid-feedback">
                            El Telefono es obligatorio
                        </div>
                    </div>
                </div>

                <div className="row g-3 w-50">
                    <div className="col-sm-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" onChange={onInputChange} placeholder="usuario@ejemplo.com" value={userData.email} />
                        <div className="invalid-feedback">
                            Por favor ingrese un e-mail válido
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <label htmlFor="emailConfirm" className="form-label">Confirmar Email </label>
                        <input type="email" className="form-control" name="emailConfirm" onChange={onInputChange} placeholder="usuario@ejemplo.com" value={userData.emailConfirm} />
                        <div className="invalid-feedback">
                            Por favor ingrese un e-mail válido
                        </div>
                    </div>
                </div>

                <button className="m-3 w-25 btn btn-primary btn-lg">Pagar</button>
            </div>
        </form >
    );

};

export default CheckoutForm;