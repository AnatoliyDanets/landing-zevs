import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react"
import Container from "../Container"
import Section from "../Section"
import SectionTitle from "../SectionTitle"
import OrderWrite from "../svgs/orderWrite.svg"
import Callback from "../svgs/callback.svg"
import Delivery from "../svgs/delivery.svg"
import Payment from "../svgs/payment.svg"
import 'react-vertical-timeline-component/style.min.css';
import s from "./HowOrder.module.css"

export default function HowOrder() {
    const [showIsDesktop, setShowshowIsDesktop] = useState(false);
    const isDesktop = useMediaQuery({ query: "(min-width: 1200px)" });
    useEffect(() => { isDesktop ? setShowshowIsDesktop(true) : setShowshowIsDesktop(false) }, [isDesktop])

    return (
        <Section id={"HowOrder"}  >
            <Container >
                <SectionTitle name={"Як замовити?"} />
                <VerticalTimeline>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: '#333', color: '#fff' }}
                        icon={<OrderWrite className={s.howOrder__icon} style={showIsDesktop ? { width: "30px", height: "30px" } : { width: "25px", height: "25px" }} />}
                    >
                        <h3 className="vertical-timeline-element-title">Крок 1</h3>
                        <p>
                            Ви формуєте замовлення на нашому сайті
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: '#333', color: '#fff' }}
                        icon={<Callback className={s.howOrder__icon} style={showIsDesktop ? { width: "30px", height: "30px" } : { width: "25px", height: "25px" }} />}
                    >
                        <h3 className="vertical-timeline-element-title">Крок 2</h3>
                        <p >
                            Менеджер передзвонить вам для уточнення деталей замовлення
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        iconStyle={{ background: '#333', color: '#fff' }}
                        icon={<Delivery className={s.howOrder__icon} style={showIsDesktop ? { width: "30px", height: "30px" } : { width: "25px", height: "25px" }} />}
                    >
                        <h3 className="vertical-timeline-element-title">Крок 3</h3>
                        <p>
                            Найближчим часом відправляємо ваше замовлення
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        iconStyle={{ background: '#333', color: '#fff' }}
                        icon={<Payment className={s.howOrder__icon} style={showIsDesktop ? { width: "30px", height: "30px" } : { width: "25px", height: "25px" }} />}
                    >
                        <h3 className="vertical-timeline-element-title">Крок 4</h3>
                        <p>
                            Ви оплачуєте замовлення на пошті під час отримання
                        </p>
                    </VerticalTimelineElement>


                </VerticalTimeline>
            </Container>

        </Section>

    )
}