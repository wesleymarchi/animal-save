import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import  "./UsersList.styles.css";
import PetLogo from "../../assets/pet_logo.svg";
import Vader from "../../assets/vader.jpg";

const UsersList = () => {
    return (
        <>
            <div className="offcanvas offcanvas-start show text-bg-dark" id="offcanvasDark" aria-labelledby="offcanvasDarkLabel">
                <div className="offcanvas-body">
                    <nav className="navbar">
                    <a className="navbar-brand" href="#">
                        <h5><img src={PetLogo} alt="Logo" width="39" height="39" className="d-inline-block align-text-top" /> AnimalSave</h5>
                    </a>
                    <div className="container-md">
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 header nav">
                                <li className="nav-item zoom">
                                    <a className="nav-link" aria-current="page" href="#">Início</a>
                                </li>
                                <li className="nav-item zoom">
                                    <a className="nav-link" href="#">Animais</a>
                                </li>
                                <li className="nav-item zoom">
                                    <a className="nav-link" href="#">Fornecedores</a>
                                </li>
                                <li className="nav-item zoom">
                                    <a className="nav-link" href="#">Eventos</a>
                                </li>
                                <li className="nav-item zoom">
                                    <a className="nav-link">Blog</a>
                                </li>
                                <li className="nav-item zoom">
                                    <a className="nav-link btn btn-outline rounded-1 border border-1 px-2 active">Entrar</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                </div>
            </div>
        </>
    );
};

export default UsersList;