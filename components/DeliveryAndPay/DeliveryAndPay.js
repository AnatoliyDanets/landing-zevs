import { FormattedMessage } from "react-intl";
import Section from "../Section/Section";
import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import s from "./DeliveryAndPay.module.css";

export default function DeliveryAndPay() {
    return (
        <Section id={"Delivery"}>
            <Container>
                <SectionTitle
                    name={<FormattedMessage id="page.home.delivery_title" />}
                />
                <div className={s.delivery}>
                    <h3 className={s.delivery__title}>
                        <FormattedMessage id="page.home.delivery_title_one" />
                    </h3>
                    <ul className={s.delivery__list}>
                        <li className={s.delivery__condition}>
                            <FormattedMessage id="page.home.delivery_mail_one_item_one" />
                        </li>
                        <li className={s.delivery__condition}>
                            <FormattedMessage id="page.home.delivery_mail_one_item_two" />
                        </li>
                    </ul>

                    <h3 className={s.delivery__title}>
                        <FormattedMessage id="page.home.delivery_title_two" />
                    </h3>
                    <ul className={s.delivery__list}>
                        <li className={s.delivery__condition}>
                            <p className={s.delivery__postal}>
                                <FormattedMessage id="page.home.delivery_mail_two_item_one" />
                            </p>
                            <ul className={s.delivery__list}>
                                <li className={s.delivery__condition}>
                                    <FormattedMessage id="page.home.delivery_mail_two_item_one_one" />
                                </li>
                                <li>
                                    {" "}
                                    <FormattedMessage id="page.home.delivery_mail_two_item_one_two" />
                                </li>
                            </ul>
                        </li>

                        <li className={s.delivery__condition}>
                            <p className={s.delivery__postal}>
                                {" "}
                                <FormattedMessage id="page.home.delivery_mail_two_item_two" />
                            </p>
                            <ul className={s.delivery__list}>
                                <li className={s.delivery__condition}>
                                    <FormattedMessage id="page.home.delivery_mail_two_item_two_one" />
                                </li>
                                <li className={s.delivery__condition}>
                                    <FormattedMessage id="page.home.delivery_mail_two_item_two_two" />
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <h3 className={s.delivery__title}>
                        <FormattedMessage id="page.home.delivery_title_three" />
                    </h3>
                    <ul className={s.delivery__list}>
                        <li className={s.delivery__condition}>
                            <FormattedMessage id="page.home.delivery_mail_three_item_one" />
                        </li>
                        <li className={s.delivery__condition}>
                            <FormattedMessage id="page.home.delivery_mail_three_item_two" />
                        </li>
                    </ul>
                </div>
            </Container>
        </Section>
    );
}
