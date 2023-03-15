import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FormattedMessage } from "react-intl";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import Container from "../Container";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import OrderWrite from "../svgs/orderWrite.svg";
import Callback from "../svgs/callback.svg";
import Delivery from "../svgs/delivery.svg";
import Payment from "../svgs/payment.svg";
import "react-vertical-timeline-component/style.min.css";
import s from "./HowOrder.module.css";

export default function HowOrder() {
    const [showIsDesktop, setShowshowIsDesktop] = useState(false);
    const isDesktop = useMediaQuery({ query: "(min-width: 1200px)" });
    useEffect(() => {
        isDesktop ? setShowshowIsDesktop(true) : setShowshowIsDesktop(false);
    }, [isDesktop]);

    return (
        <Section id={"HowOrder"}>
            <Container>
                <SectionTitle name={<FormattedMessage id="page.home.how_order_title" />} />
                <div className={s.howOrder__wrapper}>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: "#333", color: "#fff" }}
                            icon={
                                <OrderWrite
                                    className={s.howOrder__icon}
                                    style={
                                        showIsDesktop
                                            ? { width: "30px", height: "30px" }
                                            : { width: "25px", height: "25px" }
                                    }
                                />
                            }
                        >
                            <h3 className="vertical-timeline-element-title"> <FormattedMessage id="page.home.how_order_title_one" /></h3>
                            <p><FormattedMessage id="page.home.how_order_title_item_one" /></p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: "#333", color: "#fff" }}
                            icon={
                                <Callback
                                    className={s.howOrder__icon}
                                    style={
                                        showIsDesktop
                                            ? { width: "30px", height: "30px" }
                                            : { width: "25px", height: "25px" }
                                    }
                                />
                            }
                        >
                            <h3 className="vertical-timeline-element-title"><FormattedMessage id="page.home.how_order_title_two" /></h3>
                            <p><FormattedMessage id="page.home.how_order_title_item_two" /></p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            iconStyle={{ background: "#333", color: "#fff" }}
                            icon={
                                <Delivery
                                    className={s.howOrder__icon}
                                    style={
                                        showIsDesktop
                                            ? { width: "30px", height: "30px" }
                                            : { width: "25px", height: "25px" }
                                    }
                                />
                            }
                        >
                            <h3 className="vertical-timeline-element-title"><FormattedMessage id="page.home.how_order_title_three" /></h3>
                            <p><FormattedMessage id="page.home.how_order_title_item_three" /></p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            iconStyle={{ background: "#333", color: "#fff" }}
                            icon={
                                <Payment
                                    className={s.howOrder__icon}
                                    style={
                                        showIsDesktop
                                            ? { width: "30px", height: "30px" }
                                            : { width: "25px", height: "25px" }
                                    }
                                />
                            }
                        >
                            <h3 className="vertical-timeline-element-title"><FormattedMessage id="page.home.how_order_title_four" /></h3>
                            <p><FormattedMessage id="page.home.how_order_title_item_four" /></p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>

            </Container>
        </Section>
    );
}
