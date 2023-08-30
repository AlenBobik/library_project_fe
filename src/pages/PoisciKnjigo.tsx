import {SyntheticEvent, useEffect, useState} from "react";
import axios from "axios";
import Card from "../components/Card.tsx";

const PoisciKnjigo = () => {
    const[imeKnjige, setImeKnjige] = useState('');
    const [cards, setCards] = useState<knjiga[]>([]);
    const [seznamKnjig, setSeznamKnjig] = useState<knjiga[]>([]);

    const submit = async (e : SyntheticEvent) => {
        e.preventDefault();

        const seznam : knjiga[] = [];

        if (imeKnjige != null && imeKnjige.length > 1){
            for (let i = 0; i < seznamKnjig.length; i++) {
                if (seznamKnjig[i].knjiga_izvod_naslov.toLowerCase().includes(imeKnjige.toLowerCase())){
                    seznam.push(seznamKnjig[i]);
                }
            }
        }
        setCards(seznam);
    }

    const getAllBooks = async () => {
        const res =
            await axios.get('http://localhost:4545/diplomska_knjiznica/knjigaizvod');
        setSeznamKnjig(res.data._embedded.knjigaIzvodDtoList);
    }

    useEffect(() => {getAllBooks()}, []);

    return(
        <>
            <div className="form-signin2 py-5 m-auto" style={{ minHeight: 420}}>
                <div className="button">
                    <form onSubmit={submit}>
                        <h1 className="h3 mb-3 fw-normal">Poišči knjigo</h1>
                        <div className="form-floating">
                            <input type="Email address" className="form-control" id="floatingInput" placeholder="test"
                                   onChange={(e) => setImeKnjige(e.target.value)}/>
                            <label htmlFor="floatingInput">Ime knjige</label>
                        </div>
                        <p></p>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Poišči</button>
                    </form>
                    <p></p>
                </div>
            </div>
            <div className="py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            cards.map((card:knjiga,i)=>{
                                return <Card cardData={card} key={i}/>;
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default PoisciKnjigo;