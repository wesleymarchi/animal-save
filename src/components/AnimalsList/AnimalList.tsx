import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CheckIcon from "bootstrap-icons/icons/check-lg.svg";
import IgnoreIcon from "bootstrap-icons/icons/x-lg.svg";
import "./AnimalList.styles.css";
import SideBar from "../SideBar/SideBar";

import NewAnimalModal from "./NewAnimalModal/NewAnimalModal";
import EditAnimalModal from "./EditAnimalModal/EditAnimalModal";

const AnimalList = () => {

    return (
        <>  
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <SideBar />
                    <div className="col py-0 px-0">
                        <article className="container-fluid px-0">
                            
                            <div className="container-fuid px-0">
                                
                                    <nav className="navbar navbar-expand-lg">
                                        
                                        <div className="container-md">
                                                <ul className="navbar-nav mb-2 mb-lg-0 headerList nav">
                                                    <li className="nav-item zoom">
                                                        <a className="nav-link " aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#newAnimalModal">Novo</a>
                                                    </li>
                                                    <li className="nav-item zoom">
                                                        <a className="nav-link " aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#editAnimalModal">Editar</a>
                                                    </li>
                                                    <li className="nav-item zoom">
                                                        <a className="nav-link" href="#">Deletar</a>
                                                    </li>
                                                </ul>
                                        </div>
                                    </nav>
                            </div>
                
                            <table className="table table-striped table-hover">
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Gênero</th>
                                    <th>Espécie</th>
                                    <th>Doença</th>
                                    <th>Descrição</th>
                                    <th>Protetor</th>
                                    <th>Ação</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Tony</td>
                                    <td>Macho</td>
                                    <td>Pastor Alemão</td>
                                    <td>Eplepsia</td>
                                    <td>Encontrado com a pata machucada, bem de modo geral.</td>
                                    <td>Batman</td>
                                    <td>
                                        <a href="" className="bg-transparent"><img src={CheckIcon} className="zoom" alt="" /></a>
                                        <a href="" className="bg-transparent"><img src={IgnoreIcon} className="zoom" alt="" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Joker</td>
                                    <td>Macho</td>
                                    <td>Pinscher</td>
                                    <td>Nenhuma</td>
                                    <td>Extremista e violento.</td>
                                    <td>Rorschach</td>
                                    <td>
                                        <a href="" className="bg-transparent"><img src={CheckIcon} className="zoom" alt="" /></a>
                                        <a href="" className="bg-transparent"><img src={IgnoreIcon} className="zoom" alt="" /></a>
                                    </td>
                                </tr>
                            </table>
                        </article>
                        <div className="col py-0 px-0">
                            <NewAnimalModal />
                            <EditAnimalModal />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AnimalList;