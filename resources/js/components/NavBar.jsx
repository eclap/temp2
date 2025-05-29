import React from "react";
import Cookies from "js-cookie";

export const NavBar = ({
    setIsShowModal,
    setIsLogin,
    setUser,
    isLogin,
    setToastMessage,
    logoType,
}) => {
    const logout = () => {
        setUser({
            username: "",
            password: "",
        });
        setIsLogin(false);
        Cookies.remove("password");
        setToastMessage("You have successfully logged out!");
        window.iapiLogout(1, 1);
    };

    const logoSrc =
        logoType === "logo1"
            ? "images/logo/l1_complete_v2.png"
            : "images/logo/l2_complete.png";

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                    <img
                                src={logoSrc}
                                width="100%"
                                height={logoType === "logo1" ?"60rem":"110rem"}
                                className="d-block w-100 align-top"
                                alt="logo"
                                style={{ paddingLeft: "50px", margin: "8px 0" }}
                            />
                    </a>
                    <form className="d-flex">
                        {!isLogin && (
                            <button
                                type="button"
                                onClick={() => setIsShowModal(true)}
                                className="btn btn-lg fst-italic"
                            >
                                LOG IN
                            </button>
                        )}
                        {isLogin && (
                            <button
                                type="button"
                                className="btn btn-lg fst-italic"
                                onClick={() => logout()}
                            >
                                LOG OUT
                            </button>
                        )}
                    </form>
                </div>
            </nav>
        </React.Fragment>
    );
};
