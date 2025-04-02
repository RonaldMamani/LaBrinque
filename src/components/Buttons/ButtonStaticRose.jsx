export default function ButtonStaticRose({text}) {
    return (
        <button className="
            bg-[#EC7BA7] shadow-lg shadow-[#963B84] rounded-3xl text-white w-full px-5 py-5
            lg:px-8
            ">
            <p className="
                font-semibold text-[20px]
                lg:text-[18px] lg:font-bold
                ">{text}</p>
        </button>
    )
}