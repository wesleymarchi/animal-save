import { useState } from "react";
import { IUser, dummyUserList } from "../User/User";

import "./Home.style.css"
import UserList from "../UserList/UserList";
import Header from "./Header/Header";
import Carousel from "./Carousel/Carousel";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Login from "../Login/Login";

const Home = () => {
    const [userList, setUserList] = useState(dummyUserList as IUser[]);

    return (
        <>
            <Login />
        </>
    );
};

export default Home;