import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const [isAuth, setAuth] = useState(localStorage.getItem("auth"));
    const withLogin = useRef(0);
    const withLogOut = useRef(0);
    console.log(isAuth);
    const handleLogin = useCallback(() => {
        if (!localStorage.getItem("auth")) {
            localStorage.setItem("auth", "token");
        }
        setAuth(localStorage.getItem("auth"));
    }, []);
    const handleLogOut = useCallback(() => {
        if (localStorage.getItem("auth")) {
            localStorage.removeItem("auth");
        }
        setAuth(localStorage.getItem("auth"));
    }, []);
    useEffect(() => {
        withLogin.current++;
    }, [handleLogin]);
    useEffect(() => {
        withLogOut.current++;
    }, [handleLogOut]);
    return (
        <CardWrapper>
            <p>WithLogin : {withLogin.current}</p>
            <p>WithLogOut : {withLogOut.current}</p>
            <Component
                isAuth={isAuth}
                onLogin={handleLogin}
                onLogOut={handleLogOut}
                {...props}
            />
        </CardWrapper>
    );
};

export default withFunctions;
