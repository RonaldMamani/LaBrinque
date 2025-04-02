import Forms from "../Forms";

export default function Informacoes() {
    
    const googleMapsUrl = "https://www.google.com/maps?q=Rua+Carlos+de+Campo,+45+Vila+Correa";
    
    return(
        <section className="
            text-center px-10 py-18 flex flex-col items-center gap-10
            md:px-20 md:py-28
            lg:px-36 lg:py-36
            xl:px-48
            ">
            <h4 className="text-[#EF7811] font-extrabold text-3xl">Entre em Contato</h4>
            <div className="
                w-full flex flex-col gap-10
                lg:grid lg:grid-cols-3 lg:gap-14
                ">
                <a href={googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="lg:col-span-2"
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
                <Forms />
            </div>
    </section>
    )
}