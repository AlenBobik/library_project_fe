import {SyntheticEvent, useState} from "react";
import axios from 'axios'
import {Navigate} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');
    const [redirect, setRedirect] = useState(false);

    const userData = {
        username,
        password
    };

    const submit = async (e : SyntheticEvent) => {
        e.preventDefault();

        const res = await axios.post(
            'http://localhost:4545/diplomska_knjiznica/auth/login', userData);

        const jwtToken = res.data.jwtToken;

        if (jwtToken.length > 0) {
            const parsedToken = JSON.parse(atob(jwtToken.split('.')[1])); // atob - decode string
            localStorage.setItem("username", parsedToken.sub);
        }

        if (res.status == 200){
            setTimeout(()=>{
                setRedirect(true);
            }, 1000);
        }
        if (res.status == 400){
            setErrorText('Napaka v podatkih.');
        }
    }

    if (redirect){
        return <Navigate to={'/'}/>
    }

    return (
        <>
            <main className="form-signin w-100 m-auto" style={{ minHeight: 1536 - 1020}}>
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Prijava</h1>
                    <div className="form-floating">
                        <input type="Email address"
                               className="form-control"
                               id="floatingInput"
                               placeholder="Name"
                               onChange={(e) => setUsername(e.target.value)}/>
                        <label htmlFor="floatingInput">Uporabniško ime</label>
                    </div>
                    <div className="form-floating">
                        <input type="Password"
                               className="form-control"
                               id="floatingPassword"
                               placeholder="Password"
                               onChange={(e) => setPassword(e.target.value)}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                    <h2 className="error">{errorText}</h2>
                </form>
            </main>
        </>
    )
}

export default Login;