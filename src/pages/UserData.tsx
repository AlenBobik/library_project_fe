import {useEffect, useState} from "react";
import axios from "axios";

const UserData = () => {
    const [userEmail, setUserEmail] = useState("");
    const [ime, setIme] = useState("");
    const [priimek, setPriimek] = useState("");
    const [telefon, setTelefon] = useState("");
    const [izkaznica, setIzkaznica] = useState("");
    const username = localStorage.getItem("username");

    const submitUser = async () => {
        const res =
            await axios.get('http://localhost:4545/diplomska_knjiznica/uporabniskiracun/username/' + username);

        setUserEmail(res.data.oseba_email);

        const res1 =
            await axios.get('http://localhost:4545/diplomska_knjiznica/oseba/email/' + res.data.oseba_email);
        setIme(res1.data.oseba_ime)
        setPriimek(res1.data.oseba_priimek)
        setTelefon(res1.data.oseba_telefon)
        setIzkaznica(res1.data.izkaznica_oznaka)
    }


    useEffect(()=>{submitUser()},[]);

    return(
        <>
            <main className="form-osebni-podatki signin w-100 m-auto" >
                <p>Username: {username}</p>
                <p>Email: {userEmail}</p>
                <p>Telefon: {telefon}</p>
                <p>Ime: {ime}</p>
                <p>Priimek: {priimek}</p>
                <p>Št. izkaznice: {izkaznica}</p>
            </main>
            <div style={{ minHeight: 240}}>

            </div>
        </>
    )
}
export default UserData;