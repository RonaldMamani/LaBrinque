import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home () {
    return(
        <>
            <Header/>
            <main>
                <h1>La Brinque</h1>
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}