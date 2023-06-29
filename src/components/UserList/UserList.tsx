import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import { IUser } from "../User/User";
import "./UserList.style.css"

type Props = {
    list: IUser[]
}

const UserList = () => {

    return (
        <>
            <div>
                <article className="container-md">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Sobrenome</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Município</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">1</td>
                                <td>Bruce</td>
                                <td>Wayne</td>
                                <td>wayne@wayne.com</td>
                                <td>Santa Terezinha de Itaipu</td>
                                <td>Paraná</td>
                                <td>
                                    <div>
                                        <button className="button button1">Aprovar</button>
                                        <button className="button button2">Reprovar</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">2</td>
                                <td>Tony</td>
                                <td>Stark</td>
                                <td>stark@stark.com</td>
                                <td>Foz do Iguaçu</td>
                                <td>Paraná</td>
                                <td>
                                    <div>
                                        <button className="button button1">Aprovar</button>
                                        <button className="button button2">Reprovar</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </article>
            </div>
        </>
    );
};

export default UserList;