import { Link } from "react-router-dom"

import ImageExterior from "../../assets/IMAGEM-TEMPLATE2.jpg"


export default function SectionSobreNos() {
    return(
        <section className="text-center flex flex-col gap-8">
            <div className="
                px-14 pt-20 pb-14 flex flex-col gap-8
                md:px-20
                lg:px-36 lg:pt-32 lg:pb-28 lg:gap-18 
                xl:px-48
                ">
                <h4 className="text-[#114C86] font-extrabold text-[34px]">Sobre Nós</h4>
                <div className="
                    flex flex-col items-center gap-10
                    md:gap-16
                    lg:grid lg:grid-cols-2 lg:items-start lg:gap-14
                    xl:gap-20
                    ">
                    <img 
                        src={ImageExterior} 
                        alt="Imagem da Entrada da Clinica" 
                        className="
                            rounded-4xl
                            md:w-[80%]
                            lg:order-2 lg:w-[100%]
                            " />
                    <div className="
                        flex flex-col gap-10 items-center
                        md:gap-14
                        lg:order-1 lg:items-start
                        ">
                        <p className="
                            text-[#114C86] font-semibold
                            md:px-12
                            lg:text-start lg:px-0 lg:text-xl
                            ">
                            A Clínica Lá Brinquê é especializada no desenvolvimento infantil (0-12 anos), com serviços como Terapia Ocupacional, Fisioterapia, Psicopedagogia, Psicologia Clínica, Terapia ABA, Psicomotricidade, Reforço Escolar e Fonoaudiologia, visando melhorar habilidades e qualidade de vida.</p>
                        <Link 
                            to="/sobre"
                            className="bg-[#114C86] text-white w-[250px] py-8 rounded-full"
                        >
                        <p className="font-semibold">Conheça nosso Espaço</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="
                    grid grid-cols-3 w-full h-5
                    lg:grid-cols-6
                    ">
                    <div className="bg-[#114C84]"></div> {/* Azul */}
                    <div className="max-lg:hidden bg-white"></div>
                    <div className="bg-[#EF7811]"></div> {/* Laranja */}
                    <div className="max-lg:hidden bg-white"></div>
                    <div className="bg-[#963B84]"></div> {/* Roxo */}
                    <div className="max-lg:hidden bg-white"></div>
                </div>
                <div className="
                    grid grid-cols-3 w-full h-5
                    lg:grid-cols-6
                    ">
                    <div className="max-lg:hidden bg-white"></div>
                    <div className="bg-[#B9172C]"></div> {/* Vermelho */}
                    <div className="max-lg:hidden bg-white"></div>
                    <div className="bg-[#EC7BA7]"></div> {/* Rosa */}
                    <div className="max-lg:hidden bg-white"></div>
                    <div className="bg-[#77B8A0]"></div> {/* Verde */}
                </div>
            </div>
        </section>
    )
}