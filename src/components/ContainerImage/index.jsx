import { useState } from "react";

export default function ContainerImage({ src, alt, className}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleBackdropClick = (e) => {
        if (e.target.id === "backdrop") {
        setIsOpen(false);
        }
    };

    return (
        <div className="shadow-2xl rounded-4xl">
            <img
                src={src}
                alt={alt}
                className={`
                    w-[350px] h-[425px] cursor-zoom-in
                    hover:scale-105 transition-all
                    ${className}`}
                onClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div
                id="backdrop"
                onClick={handleBackdropClick}
                className="fixed inset-0 bg-black/75 flex justify-center items-center z-50"
                >
                <img
                    src={src}
                    alt={alt}
                    className="
                        w-[400px] h-[550px] rounded-xl cursor-default
                        md:w-[600px] md:h-[750px]
                        lg:w-[700px] lg:h-[875px]
                        "
                />
                </div>
            )}
        </div>
    )
}