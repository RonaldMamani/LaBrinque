import Mission from "/src/assets/ICON-MISSION.svg"
import Vision from "/src/assets/ICON-VISION.svg"
import Values from "/src/assets/ICON-VALUES.svg"


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
                    text-[#77B8A0] text-4xl font-bold underline
                    lg:text-[50px]
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
                <TopicMore 
                    img={Mission}
                    alt="Icone de Missão"
                    title="Missão"
                    text="Na Clínica Lá Brinquê, nossa missão é promover o desenvolvimento integral e o bem-estar das crianças, proporcionando intervenções terapêuticas de alta qualidade que estimulem habilidades e melhorem o desempenho global."
                />
                <TopicMore 
                    img={Vision}
                    alt="Icone de Visão"
                    title="Visão"
                    text="Nossa visão é ser reconhecida como referência em cuidados infantis, buscando constantemente inovação e excelência nos serviços prestados, com foco na satisfação e no progresso de cada criança atendida."
                />
                <TopicMore 
                    img={Values}
                    alt="Icone de Valores da Clinica"
                    title="Visão"
                    text="Na Clínica Lá Brinquê, colocamos as necessidades das crianças em primeiro lugar, oferecendo terapias personalizadas em um ambiente acolhedor. Nossa equipe altamente qualificada pratica ética, respeito e inovação contínua para adaptar-se às necessidades em evolução das crianças, colaborando com profissionais e comunidades para promover um desenvolvimento infantil abrangente."
                />
            </div>
        </section>
    )
}