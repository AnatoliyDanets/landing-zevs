import { motion } from "framer-motion";

import s from "./SectionTitle.module.css";

const textAnmation = {
    hidden: { x: -100, opacity: 0 },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

export default function SectionTitle({ style, name }) {
    return (
        <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            custom={1}
            style={style}
            className={s.title}
            variants={textAnmation}
        >
            {name}
        </motion.h2>
    );
}
