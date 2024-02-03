import backgroundImage from "../../../public/background.jpg";
import Image from "next/image";
import s from "./Background.module.css"

export default function Background({ children }) {
    return (
        <div className={s.background}>
            <div className={s.background__wrapper}>
                <Image
                    src={backgroundImage}
                    fill
                    quality={100}
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                    alt="background image"
                    blurDataURL="data:..."
                    placeholder="blur"
                    priority={true}

                />
            </div>
            {children}
        </div>
    )
}