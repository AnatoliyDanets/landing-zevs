import ReactDOM from "react-dom";
import { Nunito } from "@next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import classNames from "classnames";
import Image from "next/image";
import { useState, useEffect } from "react";
import Close from "../svgs/close.svg";
import modalImage from "../../public/background2.jpg"
import s from "./Modal.module.css";

const nunito = Nunito({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
    variable: "--font-nunito",
});

const backdropVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delayChildren: 0.2,
        },
    },
};

const modalVariant = {
    hidden: {
        y: "-110%",
        x: "-50%",
    },
    visible: {
        y: "-50%",
        transition: {
            type: "spring",
            stiffness: 70,
        },
    },
};

const Modal = ({ show, onClose, children, style }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
        // eslint-disable-next-line
    }, []);
    const handleKeyDown = (e) => {
        if (e.code === "Escape") {
            onClose();
        }
    };
    const handleCloseClick = (e) => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    const modalContent = show ? (
        <motion.div
            variants={backdropVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={s.modal__backdrop}
            onClick={handleCloseClick}
        >
            <motion.div
                style={style}
                className={classNames(`${nunito.className} `, s.modal)}
                variants={modalVariant}
            >
                <button
                    type="button"
                    className={s.modal__close}
                    onClick={() => onClose()}
                >
                    <Close className={s.modal__close_icon} />
                </button>

                <Image
                    src={modalImage}
                    priority
                    alt="bar"
                    fill
                    style={{ objectFit: 'cover', zIndex: -1 }}
                    sizes="100%"
                    quality={100}

                />


                {children}
            </motion.div>
        </motion.div>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            <AnimatePresence> {modalContent}</AnimatePresence>,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
};

export default Modal;

Modal.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node,
};
