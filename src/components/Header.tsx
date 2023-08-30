import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigation = useNavigate();
    const user = localStorage.getItem("username");

    const odjava = () => {
        localStorage.removeItem("username")
    }

    const toLogin = () => {
        navigation(`/login`);
    }

    const toRegister = () => {
        navigation(`/register`);
    }

    const toPoisciKnjgo = () => {
        navigation(`/poisciknjigo`);
    }

    const toUserData = () => {
        navigation(`/poisciknjigo`);
    }

    return (
        <>
            {user && (
                <header className="header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-dark">
                    <div className="col-md-4 mb-2 mb-md-0">
                        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                            <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap">
                                <use xlinkHref="#bootstrap"/>
                            </svg>
                        </a>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/" className="nav-link px-2 link-secondary">Home</a></li>
                        <li><a onClick={toPoisciKnjgo} className="nav-link px-2">Poišči knjigo</a></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <a onClick={toUserData} type="button" className="btn btn-outline-primary me-2">{user}</a>
                        <a onClick={odjava} type="button" className="btn btn-primary link-dark" >odjava</a>
                    </div>

                    <a></a>
                </header>
            )}
            {!user && (
                <header className="header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-dark">

                    <div className="col-md-4 mb-2 mb-md-0">
                        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                            <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap">
                                <use xlinkHref="#bootstrap"/>
                            </svg>
                        </a>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/" className="nav-link px-2 link-secondary">Home</a></li>
                        <li><a onClick={toPoisciKnjgo} className="nav-link px-2">Poišči knjigo</a></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <a onClick={toLogin} type="button" className="btn btn-outline-primary me-2">Prijava</a>
                        <a onClick={toRegister} type="button" className="btn btn-primary link-dark">Registracija</a>
                    </div>
                    <a></a>
                </header>
            )}
        </>
    )
}

export  default Header;