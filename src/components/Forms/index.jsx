export default function Forms() {
    return(
        <div className="w-full flex justify-center items-center">
            <form 
                action="https://formsubmit.co/ronaldmamani140@gmail.com"
                method="POST"
                className="w-full max-w-lg flex flex-col items-center gap-4 text-start">
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-[#EF7811] text-xl font-semibold">Seu Nome</label>
                    <input
                        name="nome"
                        type="text"
                        required
                        className="w-full border-2 border-[#EF7811] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-[#EF7811] text-xl font-semibold">Seu Telefone</label>
                    <input
                        name="telefone"
                        type="number"
                        required
                        className="w-full border-2 border-[#EF7811] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-[#EF7811] text-xl font-semibold">Seu E-mail</label>
                    <input
                        name="email"
                        type="email"
                        required
                        className="w-full border-2 border-[#EF7811] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-[#EF7811] text-xl font-semibold">Assunto</label>
                    <input
                        name="assunto"
                        type="text"
                        required
                        className="w-full border-2 border-[#EF7811] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-[#EF7811] text-xl font-semibold">Sua Mensagem</label>
                    <textarea
                        name="mensagem"
                        required
                        className="w-full border-2 border-[#EF7811] rounded-lg p-3 h-40 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder=""
                    ></textarea>
                </div>
                {/* Campos ocultos do FormSubmit */}
                <input type="hidden" name="_subject" value="Nova mensagem do site" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://" />
                
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