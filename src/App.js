import React from "react";
import  CurrentUserContextProvider from "./provider/CurrentUserContextProvider";
import {Routes, Route} from "react-router-dom";
import Home from "./component/Home";
import Profile from "./component/Profile";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default function App() {

    /**
     * Modification :
     * - Header ✅
     * - Profile ✅
     * - Footer ✅
     */
    return (
        <CurrentUserContextProvider>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}
                    />
                </Routes>
            </main>
            <Footer/>
        </CurrentUserContextProvider>
    );
}
