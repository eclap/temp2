export const Footer = ({ logoType }) => {
    const links = ["About Us", "Support", "Terms of Services"];

    const logoSrc =
        logoType === "logo1"
            ? "/images/logo/l1_complete_v2.png"
            : "/images/logo/l2_complete.png";

    return (
        <div className="container-xxl pt-3 mt-3 mb-5 pb-5 px-5 mb-lg-4 pb-lg-4 mt-lg-4 pt-lg-4 px-lg-2">
            <div className="d-flex flex-sm-column flex-md-row align-items-center justify-content-between text-center">
                <img
                    className="img-fluid mb-3 mb-md-0"
                    width="40%"
                    src={logoSrc}
                    alt="Logo"
                />

                <div>
                    <div className="pt-md-0 pt-3">
                        {links.map((link, index) => (
                            <span key={link} className="fs-3">
                                <a
                                    className="text-white text-decoration-none"
                                    href="#"
                                >
                                    {link}
                                </a>
                                {index !== links.length - 1 && " | "}
                            </span>
                        ))}
                    </div>
                    {/* <div className="text-center white-text fs-3 mt-2">
                        Contact us: support@csino.io
                    </div> */}

                    <div className="text-center white-text fs-3 mt-2">
                        &copy; {new Date().getFullYear()} All rights reserved.
                        Casino.com
                    </div>
                </div>
            </div>
        </div>
    );
};
