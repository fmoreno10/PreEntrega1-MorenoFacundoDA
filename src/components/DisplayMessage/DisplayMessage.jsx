import './DisplayMessage.css';
import { Link } from "react-router-dom";

const DisplayMessage = ({ title, message }) => {
    return (
        <div className="container">
            <div className="d-flex flex-column justify-content align-items-center">
                <h1>
                    {title}
                </h1>
                <p>
                    {message}
                </p>

                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
        </div>
    );

};

export default DisplayMessage;