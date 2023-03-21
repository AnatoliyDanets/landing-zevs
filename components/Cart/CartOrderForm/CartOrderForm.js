import { FormattedMessage } from "react-intl";
import { useForm } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import {
    isValidPhoneNumber,
    isPossiblePhoneNumber,
} from "react-phone-number-input";
import ua from "react-phone-number-input/locale/ua";
import "react-phone-number-input/style.css";
import Button from "../../Button";
import s from "./CartOrderForm.module.css"


export default function CartOrderForm({ onSubmit, value, setValue }) {

    const {
        register,
        handleSubmit,
        control,
        formState: { isDirty, isValid },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            name: "",
        },
    });

    return (
        <>
            <h3 className={s.cart__orderTitle}><FormattedMessage id="page.home.modal_ordering_title" /></h3>

            <form onSubmit={handleSubmit(onSubmit)} className={s.cart__form}>
                <label className={s.cart__form_label} htmlFor="value">
                    <FormattedMessage id="page.home.modal_ordering_name" />
                </label>
                <div className={s.cart__form_inputWrap}>
                    <input
                        className={s.cart__form_input}
                        placeholder="John"
                        {...register("name", {
                            required: true,
                            minLength: 3,
                            maxLength: 40,
                            min: 3,
                            max: 40,
                        })}
                    />
                </div>
                <label className={s.cart__form_label} htmlFor="phone">
                    <FormattedMessage id="page.home.modal_ordering_phone" />
                </label>
                <PhoneInputWithCountry
                    className={s.cart__phone}
                    labels={ua}
                    name="phone"
                    id="phone"
                    international
                    defaultCountry="UA"
                    value={value}
                    maxLength={16}
                    onChange={setValue}
                    control={control}
                    countryCallingCodeEditable={false}
                    rules={{
                        required: true,
                    }}
                    error={
                        value
                            ? isValidPhoneNumber(value)
                                ? undefined
                                : "Invalid phone number"
                            : "Phone number required"
                    }
                />
                <Button
                    style={{
                        margin: "auto",
                    }}
                    type={"submit"}
                    disabled={
                        (!(value && isPossiblePhoneNumber(value)) &&
                            !(value && isValidPhoneNumber(value))) ||
                        value?.length > 13 ||
                        !isDirty ||
                        !isValid
                    }
                >
                    <FormattedMessage id="page.home.modal_button_order" />
                </Button>
                {!(
                    value &&
                    isPossiblePhoneNumber(value) &&
                    value &&
                    isValidPhoneNumber(value)
                ) &&
                    value?.length > 13 && <p>Невірно набраний номер</p>}
            </form>

        </>
    )
}