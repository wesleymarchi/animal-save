import { useState } from "react";
import { IUser, dummyUserList } from "../User/User";

import "./Home.style.css"
import UserList from "../UserList/UserList";
import Header from "./Header/Header";
import Carousel from "./Carousel/Carousel";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import { Link, Router } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Login/Register/Register";
import SideBar from "../SideBar/SideBar";
import UsersList from "../UsersList/UsersList";

const Home = () => {
    const [userList, setUserList] = useState(dummyUserList as IUser[]);

    return (
        <>
            <UsersList />
        </>
    );
};

export default Home;