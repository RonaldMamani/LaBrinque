import Footer from "../components/Footer";
import Header from "../components/Header";
import NavFooter from "../components/NavFooter";
import SectionNossoEspaco from "../components/SectionNossoEspaco";

export default function NossoEspaco() {
    return(
        <>
            <Header />
            <main>
                <SectionNossoEspaco />
            </main>
            <NavFooter />
            <Footer />
        </>
    )
}