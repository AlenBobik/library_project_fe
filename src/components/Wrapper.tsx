import {JSX} from "react";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

type Props = {
    children : JSX.Element;
}

const Wrapper = ({children} : Props) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Wrapper;