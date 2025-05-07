import ImagemInfo from "/src/assets/IMAGEM-INFO.jpg";

import ContainerImage from "../ContainerImage";

export default function Informacoes() {
    
    const googleMapsUrl = "https://www.google.com/maps?q=Rua+Carlos+de+Campo,+45+Vila+Correa";
    
    return(
        <section className="
            text-center px-10 py-18 flex flex-col items-center gap-10
            md:px-20 md:py-28
            lg:px-36 lg:py-36
            xl:px-60
            ">
            <h4 className="
                text-[#EF7811] font-extrabold text-3xl
                lg:text-[48px]
                ">Mais Informações</h4>
            <div className="
                w-full flex flex-col gap-10
                lg:grid lg:grid-cols-2
                ">
                <a href={googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className=""
                    >
                    <div className="
                        w-full h-[520px] overflow-hidden rounded-lg shadow-lg cursor-pointer border-4 border-gray-300 
                        hover:border-[#EF7811] transition
                        lg:h-full
                        ">
                    <iframe 
                        className="w-full h-full" 
                        src="https://www.google.com/maps?q=Rua+Carlos+de+Campo,+45+Vila+Correa&output=embed" 
                        loading="lazy" 
                        allowFullScreen>
                    </iframe>
                    </div>
                </a>
                <ContainerImage 
                    src={ImagemInfo}
                    alt="Imagem de Especialidades da Clinica"
                    className="w-full rounded-2xl"
                />
            </div>
    </section>
    )
}