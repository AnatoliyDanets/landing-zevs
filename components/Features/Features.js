import { FormattedMessage } from "react-intl";
import Section from "../UI/Section";
import SectionTitle from "../UI/SectionTitle";
import Star from "../svgs/star.svg";
import Clients from "../svgs/clients.svg";
import Internet from "../svgs/internet.svg";
import Problem from "../svgs/problem.svg";
import Product from "../svgs/product.svg";
import Discount from "../svgs/discount.svg";
import s from "./Features.module.css";

export default function Features() {
    return (
        <Section id={"Features"}>
            <SectionTitle
                name={<FormattedMessage id="page.home.features_title" />}
            />
            <ul className={s.features}>
                <li className={s.features__item}>
                    <article>
                        <Star className={s.features__icon} />
                        <h3 className={s.features__title}>
                            <FormattedMessage id="page.home.features_title_one" />
                        </h3>
                        <p className={s.features__text}>
                            <FormattedMessage id="page.home.features_item_one" />
                        </p>
                    </article>
                </li>
                <li className={s.features__item}>
                    <article>
                        <Clients className={s.features__icon} />
                        <h3 className={s.features__title}>
                            <FormattedMessage id="page.home.features_title_two" />
                        </h3>
                        <p className={s.features__text}>
                            <FormattedMessage id="page.home.features_item_two" />
                        </p>
                    </article>
                </li>
                <li className={s.features__item}>
                    <article>
                        <Internet className={s.features__icon} />
                        <h3 className={s.features__title}>
                            <FormattedMessage id="page.home.features_title_three" />
                        </h3>
                        <p className={s.features__text}>
                            <FormattedMessage id="page.home.features_item_three" />
                        </p>
                    </article>
                </li>
                <li className={s.features__item}>
                    <article>
                        <Problem className={s.features__icon} />
                        <h3 className={s.features__title}>
                            <FormattedMessage id="page.home.features_title_four" />
                        </h3>
                        <p className={s.features__text}>
                            <FormattedMessage id="page.home.features_item_four" />
                        </p>
                    </article>
                </li>
                <li className={s.features__item}>
                    <article>
                        <Product className={s.features__icon} />
                        <h3 className={s.features__title}>
                            <FormattedMessage id="page.home.features_title_five" />
                        </h3>
                        <p className={s.features__text}>
                            <FormattedMessage id="page.home.features_item_five" />
                        </p>
                    </article>
                </li>
                <li className={s.features__item}>
                    <article>
                        <Discount className={s.features__icon} />
                        <h3 className={s.features__title}>
                            <FormattedMessage id="page.home.features_title_six" />
                        </h3>
                        <p className={s.features__text}>
                            <FormattedMessage id="page.home.features_item_six" />
                        </p>
                    </article>
                </li>
            </ul>
        </Section>
    );
}
