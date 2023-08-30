import "/src/css/Login.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

const Izposoja = () => {
    const [errorText, setErrorText] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [naslov, setNaslov] = useState("");
    const [datumIzdaje, setDatumIzdaje] = useState("");
    const [knjigaImage, setKnjigaImage] = useState("");
    const isbn = window.location.pathname.split("/")[2];
    const user = localStorage.getItem("username");

    const data = {
        izposoja_opomba: "string",
        user_username: "string",
        knjiga_izvod_isbn: "string"
    };

    const submit = async () => {
        const res =
            await axios.get('http://localhost:4545/diplomska_knjiznica/knjigaizvod/knjigaisbn/' + isbn );
        setNaslov(res.data.knjiga_izvod_naslov);
        setDatumIzdaje(res.data.knjiga_izvod_datum_izdaje);
        setKnjigaImage(res.data.knjiga_izvod_image_path);
    }

    useEffect(()=>{submit()},[]);

    const izposodiKnjigo = async () => {
        if (user && isbn){
            data.user_username = user;
            data.knjiga_izvod_isbn = isbn;

            const res1 =
                await axios.post('http://localhost:4545/diplomska_knjiznica/izposoja/create_new_izposoja', data);

            if (res1.status == 201){
                setRedirect(true);
            }

        }else
        {
            setErrorText('Za izposojo knjige se morate prijaviti.');
        }
    }

    if (redirect){
        return <Navigate to={'/'}/>
    }

    return(
        <>
            <div className="form-signin2 py-5 m-auto" style={{ minHeight: 1536 - 1050}}>
                <div className="containerIzposoja1">
                    <p>Ali si želite izposoditi dano knjigo?</p>
                </div>
                <div className="containerIzposoja1">
                    <a type="button"
                       className="button12 btn btn-sm btn-outline-secondary"
                        onClick={izposodiKnjigo}>Izposoja
                    </a>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                        <div style={{
                            paddingLeft: '30%',
                            paddingRight: '30%',
                            paddingTop: '3%',
                            paddingBottom: '3%',
                            backgroundColor: "lightgray " }}>
                            <img className="bd-placeholder-img card-img-top"
                                 src= {knjigaImage}
                                 width="100%"
                                 height="250"/>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Naslov: {naslov}</p>
                            <p className="card-text">Datum izdaje: {datumIzdaje}</p>
                        </div>
                    </div>
                </div>
                <h2 className="error">{errorText}</h2>

            </div>
        </>
    )
}
export default Izposoja;