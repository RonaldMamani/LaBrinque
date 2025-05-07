import Mais from "/src/assets/Add.svg";
import Menos from "/src/assets/Less.svg";

export default function ButtonInteractive({title, text, isOpen, onClick}) {
    return (
        <button 
            className="
                px-10 py-3.5 bg-[#EC7BA7] text-white text-start rounded-[35px] overflow-hidden
                hover:bg-[#DF6F7F] hover:scale-105 transition-all
            "
            onClick={onClick}
            aria-expanded={isOpen}
            aria-controls={`section-${title}`}
            >
            <div className="flex justify-between items-center focus:outline-none">
                <span className="
                    text-2xl font-bold
                    ">{title}</span>
                <img
                    src={isOpen ? Menos : Mais}
                    alt={isOpen ? "Ocultar texto" : "Mostrar mais sobre"}
                />
            </div>
            <div
                id={`section-${title}`}
                className={`transition-all duration-300 ease-in-out text-sm ${
                isOpen ? "opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                {isOpen && <p className="py-1">{text}</p>}
            </div>
        </button>
    )
}