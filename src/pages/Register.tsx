import {SyntheticEvent, useState} from "react";
import axios from 'axios'
import {Navigate} from "react-router-dom";

const Register = () => {
    const[uporabniskoIme, setUporabniskoIme] = useState('');
    const[email, setEmail] = useState('');
    const[geslo, setGeslo] = useState('');
    const[geslo2, setGeslo2] = useState('');
    const [errorText, setErrorText] = useState('');
    const [redirect, setRedirect] = useState(false);

    const userData = {
        email,
        uporabniskoIme,
        geslo
    };

    const submit = async (e : SyntheticEvent) => {
        e.preventDefault();

        if (geslo != geslo2){
            setErrorText('Gesli se ne ujemata.');
        }

        if (geslo == geslo2){
            const res = await axios.post(
                'http://localhost:4545/diplomska_knjiznica/auth/register', userData);
            if (res.status != 201){
                setErrorText('Napaka v registracijskih podatkih.')
            }
            if (res.status == 201){
                setRedirect(true)
            }
        }
    }

    if (redirect){
        return <Navigate to = '/login' />
    }

    return (
        <>
            <main className="form-signin w-100 m-auto" style={{ minHeight: 1536 - 1020}}>
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Registracija</h1>
                    <div className="form-floating">
                        <input type="Email address" className="form-control" id="floatingInput" placeholder="name"
                               onChange={(e) => setUporabniskoIme(e.target.value)}/>
                        <label htmlFor="floatingInput">Uporabniško ime</label>
                    </div>
                    <div className="form-floating">
                        <input type="Password" className="form-control" id="floatingInput" placeholder="surname"
                               onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="floatingInput">E-mail</label>
                    </div>
                    <div className="form-floating">
                        <input type="Email address" className="form-control" id="floatingPassword" placeholder="Password"
                               onChange={(e) => setGeslo(e.target.value)}/>
                        <label htmlFor="floatingPassword">Geslo</label>
                    </div>
                    <div className="form-floating">
                        <input type="Password" className="form-control" id="floatingPassword" placeholder="Password"
                               onChange={(e) => setGeslo2(e.target.value)}/>
                        <label htmlFor="floatingPassword">Potrdi geslo</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Registracija</button>
                    <h2 className="error">{errorText}</h2>
                    <p></p>
                </form>
                <p className="h6 mb-3 fw-100">Registracija, je možna samo če ste že član knjižnice.</p>
                <p className="h6 mb-3 fw-100">Če še niste član se je potrebno včlaniti.</p>
            </main>
        </>
    )
}

export default Register;