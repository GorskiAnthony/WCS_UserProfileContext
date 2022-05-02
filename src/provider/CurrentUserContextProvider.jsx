import React, { useState } from "react";
import CurrentUserContext from "../context/CurrentUserContext";

const CurrentUserContextProvider = ({ children }) => {

    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUserAvatar, setCurrentUserAvatar] = useState("");

    return(
        <CurrentUserContext.Provider value={{
            currentUserName,
            setCurrentUserName,
            currentUserAvatar,
            setCurrentUserAvatar
        }}>
            {children}
        </CurrentUserContext.Provider>
    )

}

export default CurrentUserContextProvider;
