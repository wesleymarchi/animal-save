import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import { IUser } from "../User/User";
import "./UserList.style.css"

type Props = {
    list: IUser[]
}

const UserList = (props: Props) => {
    const {list} = props;

    return (
        <>
            <div>
                <div className="d-flex align-items-start">
                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Perfil</button>
                        <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Usuários</button>
                        <button className="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>Animais</button>
                        <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Configurações</button>
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"></div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"></div>
                        <div className="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab"></div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"></div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"></div>
                    </div>
                    <article>
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                                <th>E-mail</th>
                                <th>Município</th>
                                <th>Estado</th>
                                <th>Status</th>
                            </tr>
                            {list.map((user) => {
                                console.log(user);
                                return (
                                    <tr key={user.id}>
                                        <td>{`${user.id}`}</td>
                                        <td>{`${user.firstName}`}</td>
                                        <td>{`${user.lastName}`}</td>
                                        <td>{`${user.email}`}</td>
                                        <td>{`${user.municipio}`}</td>
                                        <td>{`${user.estado}`}</td>
                                        <td>
                                            <div>
                                                <button className="button button1">Aprovar</button>
                                                <button className="button button2">Reprovar</button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </table>
                    </article>
                </div>
            </div>
        </>
    );
};

export default UserList;