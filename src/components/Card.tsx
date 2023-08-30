import {useNavigate} from "react-router-dom";

const Card= ({cardData} : {cardData : knjiga}) => {
    const navigation = useNavigate();

    const toIzposoja = () => {
        navigation(`/izposoja/${cardData.knjiga_izvod_isbn}`);
    }

    const toRezervacija = () => {
        navigation(`/rezervacija/${cardData.knjiga_izvod_isbn}`);
    }

    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <div style={{
                        paddingLeft: '25%',
                        paddingRight: '25%',
                        paddingTop: '3%',
                        paddingBottom: '3%',
                        backgroundColor: "lightgray " }}>
                        <img className="bd-placeholder-img card-img-top"
                             src={cardData.knjiga_izvod_image_path}
                             width="100%"
                             height="250"/>
                    </div>

                    <div className="card-body">
                        <p className="card-text">{cardData.knjiga_izvod_naslov}</p>
                        <div className="btn-group">
                            <div className="btn-group1">
                                <div>
                                    <a type="button"
                                       className="button12 btn btn-sm btn-outline-secondary"
                                        onClick={toIzposoja}>Izposoja
                                    </a>
                                </div>
                                <div>
                                    <a type="button"
                                       className="btn btn-sm btn-outline-secondary"
                                    onClick={toRezervacija}>Rezervacija
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;