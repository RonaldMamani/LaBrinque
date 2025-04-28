export default function Forms() {
    return(
        <div className="w-full flex justify-center items-center">
            <form className="w-full max-w-lg flex flex-col items-center gap-4 text-start">
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-[#EF7811] text-xl font-semibold">Seu Nome</label>
                    <input
                        type="text"
                        className="w-full border-2 border-[#EF7811] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-[#EF7811] text-xl font-semibold">Seu Telefone</label>
                    <input
                        type="number"
                        className="w-full border-2 border-[#EF7811] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-[#EF7811] text-xl font-semibold">Seu E-mail</label>
                    <input
                        type="email"
                        className="w-full border-2 border-[#EF7811] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-[#EF7811] text-xl font-semibold">Assunto</label>
                    <input
                        type="text"
                        className="w-full border-2 border-[#EF7811] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-[#EF7811] text-xl font-semibold">Sua Mensagem</label>
                    <textarea
                        className="w-full border-2 border-[#EF7811] rounded-lg p-3 h-40 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder=""
                    ></textarea>
                </div>
                <div className="pt-8">
                    <button
                    type="submit"
                    className="
                        w-[200px] bg-[#EF7811] text-white font-semibold py-3 rounded-full shadow-lg shadow-orange-600
                        hover:bg-orange-500 transition duration-300"
                    >
                    <p className="text-2xl font-extrabold">Enviar</p>
                    </button>
                </div>
            </form>
        </div>
    )
}