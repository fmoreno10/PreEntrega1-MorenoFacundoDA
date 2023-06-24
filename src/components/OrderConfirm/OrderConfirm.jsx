import { useParams } from "react-router-dom";
import DisplayMessage from "../DisplayMessage/DisplayMessage";

const OrderConfirm = () => {
    const { orderId } = useParams();

    return (
        <DisplayMessage title={"Gracias por su compra"} message={`Número de orden: ${orderId}`} />
    );
};

export default OrderConfirm;