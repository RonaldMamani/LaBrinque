import { Link } from "react-router-dom"

import ImageExterior from "../../assets/IMAGEM-TEMPLATE2.jpg"


export default function SectionSobreNos() {
    return(
        <section className="text-center flex flex-col gap-8">
            <div className="px-14 pt-20 pb-14 flex flex-col gap-8">
                <h4 className="text-[#114C86] font-extrabold text-[34px]">Sobre Nós</h4>
                <div className=" flex flex-col gap-10">
                    <img src={ImageExterior} alt="" className="rounded-4xl" />
                    <div className="flex flex-col gap-10 items-center">
                        <p className="text-[#114C86] font-semibold">
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
                <div className="grid grid-cols-3 w-full h-5">
                    <div className="bg-[#114C84]"></div> {/* Azul */}
                    <div className="bg-[#EF7811]"></div> {/* Laranja */}
                    <div className="bg-[#963B84]"></div> {/* Roxo */}
                </div>
                <div className="grid grid-cols-3 w-full h-5">
                    <div className="bg-[#B9172C]"></div> {/* Vermelho */}
                    <div className="bg-[#EC7BA7]"></div> {/* Rosa */}
                    <div className="bg-[#77B8A0]"></div> {/* Verde */}
                </div>
            </div>
        </section>
    )
}