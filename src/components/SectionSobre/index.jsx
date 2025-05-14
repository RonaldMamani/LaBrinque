import valores from "../../data/valores"

import TopicMore from "../TopicMore";

export default function SectionSobre() {
    return (
        <section className="
            px-8 pt-10 pb-20 flex flex-col gap-16
            md:px-24
            lg:px-36 lg:pt-16 lg:gap-24
            xl:px-60
            ">
            <div className="
                flex flex-col items-center gap-10 text-center
                lg:text-start
                ">
                <h3 className="
                    text-[#77B8A0] text-4xl font-bold underline decoration-[3px] underline-offset-6
                    lg:text-[50px] lg:decoration-[5px]
                    ">Sobre Nós</h3>
                <p className="lg:text-lg">
                    Olá nós somos a clínica Lá Brinquê, uma clínica voltada ao desenvolvimento infantil para crianças de 0-12 anos, visando ganho de habilidades e melhora no desempenho e qualidade de vida! Possuímos os serviços ativos de: Terapia Ocupacional, Fisioterapia, Psicopedagogia, Psicologia Clínica, Terapia ABA, Psicomotricidade, Reforço Escolar e fonoaudiologia.
                </p>
            </div>
            <div className="
                flex flex-col gap-16
                md:px-10
                lg:grid lg:grid-cols-3 lg:gap-20
                ">
                {valores.map((valor, index) => (
                    <TopicMore 
                        key={index}
                        img={valor.image}
                        alt={valor.alt}
                        title={valor.titleValue}
                        text={valor.texto}
                    />
                ))}
            </div>
        </section>
    )
}