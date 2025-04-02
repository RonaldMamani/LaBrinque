import Header from "../components/Header";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import SectionSobreNos from "../components/SectionSobreNos";
import SectionServicos from "../components/SectionServicos";
import Informacoes from "../components/Informacoes";

export default function Home () {
    return(
        <main className="relative">
            <Header/>
            <div className="">
                <Intro />
                <SectionSobreNos />
                <SectionServicos />
                <Informacoes />
            </div>
            <Footer/>
        </main>
    )
}