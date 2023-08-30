import Card from "../components/Card.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigation = useNavigate();
    const [cards, setCards] = useState<knjiga[]>([]);

    const getRandomBooks = (bookList : knjiga[], count : number) => {
        const shuffledBooks = [...bookList].sort(() => 0.5 - Math.random());
        return shuffledBooks.slice(0, count);
    };

    const getBooks = async () => {
        const res =
            await axios.get('http://localhost:4545/diplomska_knjiznica/knjigaizvod');
        const allBooks = res.data._embedded.knjigaIzvodDtoList;
        const randomBooks = getRandomBooks(allBooks, 6);
        setCards(randomBooks);
    }

    const toPoisciKnjgo = () => {
        navigation(`/poisciknjigo`);
    }

    useEffect(()=>{getBooks() },[]);

    return (
        <>
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Sistem knjižnice</h1>
                            <p className="lead text-body-secondary">
                                To je moj diplomski projekt za spletni portal knjižnice.
                            </p>
                            <p>
                                <a onClick={toPoisciKnjgo} className="btn btn-primary my-2">Poišči knjigo</a>
                            </p>
                        </div>
                    </div>
                </section>

                <div className="album py-5">
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
            </main>
        </>
    )
}

export default Home;