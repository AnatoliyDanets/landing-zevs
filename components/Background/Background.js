import backgroundImage from "../../image/background.jpg";
import Image from "next/image";
import s from "./Background.module.css"

export default function Background({ children }) {
    return (
        <div className={s.background}>
            <div className={s.background__wrapper}>
                <Image
                    priority
                    src={backgroundImage}
                    fill
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                    alt="background image"
                />
            </div>
            {children}
        </div>

    )
}