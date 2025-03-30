import { Link } from "react-router-dom";

export default function Intro (){
    return(
        <section className="
            relative flex flex-col items-center text-center
            ">
                <div className="absolute inset-0 bg-[url(./assets/IMAGEM-TEMPLATE.jpg)] bg-cover bg-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/95"></div>
                </div>
                <div className="z-10 px-12 py-16 mt-5 flex flex-col gap-14">
                    <div className="text-white text-center flex flex-col gap-5">
                        <h3 className="text-[36px] font-bold">Olá, somos uma Clínica de Desenvolvimento Infantil Lá Brinquê</h3>
                        <p className="text-[19px] px-8">Aqui você encontrara uma equipe que irá promover o desenvolvimento integral e o bem-estar das crianças.</p>
                    </div>
                    <div className="flex flex-col items-center gap-8 font-bold text-[18px] text-white">
                        <Link 
                            to="/sobre" 
                            className="
                                text-center bg-[#77B8A0] w-[200px] py-5 rounded-full
                                hover:bg-[#2AB8A0] transition-colors
                            " >
                            <p>Sobre Nós</p>
                        </Link>
                        <button 
                            className="
                                text-center bg-[#EF7811] w-[200px] py-5 rounded-full
                                hover:bg-[#BB7811] transition-colors
                            "
                            >
                            <p>Vamos Conversar?</p>
                        </button>
                    </div>
                </div>
                <div className="
                    p-[5px] w-full z-10
                    bg-[linear-gradient(to_right,#114C84_0%,#EF7811_20%,#B9172C_40%,#963B84_60%,#EC7BA7_80%,#77B8A0_100%)]
                "></div>
        </section>
    )
}