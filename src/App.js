import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./component/Home";
import Profile from "./component/Profile";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default function App() {
    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUserAvatar, setCurrentUserAvatar] = useState("");

    return (
        <>
            <Header
                currentUserAvatar={currentUserAvatar}
                currentUserName={currentUserName}
            />
            <main>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route
                        path="/profile"
                        element={
                            <Profile
                                currentUserName={currentUserName}
                                setCurrentUserName={setCurrentUserName}
                                setCurrentUserAvatar={setCurrentUserAvatar}
                                currentUserAvatar={currentUserAvatar}
                            />
                        }
                    />
                </Routes>
            </main>
            <Footer currentUserName={currentUserName}/>
        </>
    );
}
