import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import  "./SideBar.styles.css";
import PetLogo from "../../assets/pet_logo.svg";
import Vader from "../../assets/vader.jpg";

const SideBar = () => {
    return (
        <>
            <div className="sideBar">
                <nav className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 ">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <img src={PetLogo} className="rounded rounded-circle me-2 bg-light" alt="" width="66" height="66" /><span className="fs-5 d-none d-sm-inline">AnimalSave</span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <a href="#" className="nav-link align-middle px-0">
                                    <i className="bi bi-home"></i><span className="ms-1 d-none d-sm-inline text-white active">Inicio</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link align-middle px-0">
                                    <i className="bi bi-home"></i><span className="ms-1 d-none d-sm-inline text-white">Animais</span>
                                </a>
                            </li>
                            <li>
                                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-white dropdown-toggle">
                                    <span className="ms-1 d-none d-sm-inline text-white">Usuários</span></a>
                                <ul className="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                    <li className="w-100">
                                        <a href="#" className="nav-link px-3"> <span className="d-none d-sm-inline text-white">Associados</span></a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link px-3"> <span className="d-none d-sm-inline text-white">Protetores</span></a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link px-3"> <span className="d-none d-sm-inline text-white">Fornecedores</span></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <hr />
                        <div className="dropdown pb-4 ">
                            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={Vader} alt="Perfil do Vader" width="69" height="69" className="rounded-circle profileImage" />
                                <span className="d-none d-sm-inline mx-1">Vader</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><a className="dropdown-item" href="#">Perfil</a></li>
                                <li><a className="dropdown-item" href="#">Configurações</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Sair</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default SideBar;