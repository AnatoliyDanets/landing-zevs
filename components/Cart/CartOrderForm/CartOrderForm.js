import { useEffect } from "react";
import { useIntl } from "react-intl";
import { FormattedMessage } from "react-intl";
import { useForm, Controller } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import {
    isValidPhoneNumber,
    isPossiblePhoneNumber,
} from "react-phone-number-input";
import ua from "react-phone-number-input/locale/ua";
import "react-phone-number-input/style.css";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "../../Button";
import NovaPoshta from "../../svgs/nova_poshta.svg";
import UkrPoshta from "../../svgs/ukrposhta.svg";
import s from "./CartOrderForm.module.css";

export default function CartOrderForm({
    onSubmit,
    value,
    setValue,
    showAddInfo,
    setShowAddInfo,
    selectMail,
    setSelectMail,
}) {
    const intl = useIntl();
    const placeholderName = intl.formatMessage({
        id: "page.home.modal_ordering_name_placeholder",
    });
    const placeholderFullName = intl.formatMessage({
        id: "page.home.modal_ordering_fullname_placeholder",
    });
    const placeholderLocation = intl.formatMessage({
        id: "page.home.modal_ordering_city_placeholder",
    });
    const placeholderState = intl.formatMessage({
        id: "page.home.modal_ordering_region_placeholder",
    });
    const errorNameMaxLength = intl.formatMessage({
        id: "page.home.modal_ordering_name_error_max",
    });
    const errorNamePattern = intl.formatMessage({
        id: "page.home.modal_ordering_name_error_pattern",
    });
    const errorFullNameMinLength = intl.formatMessage({
        id: "page.home.modal_ordering_fullname_error_min",
    });
    const errorFullNameMaxLength = intl.formatMessage({
        id: "page.home.modal_ordering_fullname_error_max",
    });
    const errorFullNamePattern = intl.formatMessage({
        id: "page.home.modal_ordering_fullname_error_required",
    });
    const errorLocationMaxLength = intl.formatMessage({
        id: "page.home.modal_ordering_city_error_max",
    });
    const errorLocationPattern = intl.formatMessage({
        id: "page.home.modal_ordering_city_error_pattern",
    });
    const errorRegionPattern = intl.formatMessage({
        id: "page.home.modal_ordering_region_error_pattern",
    });
    const errorStateMinLength = intl.formatMessage({
        id: "page.home.modal_ordering_region_error_min",
    });
    const errorStateMaxLength = intl.formatMessage({
        id: "page.home.modal_ordering_region_error_max",
    });
    const errorPostalPattern = intl.formatMessage({
        id: "page.home.modal_ordering_postal_error_pattern",
    });
    const errorMailNumberMin = intl.formatMessage({
        id: "page.home.modal_ordering_department_newmail_error_min",
    });
    const errorMailNumberMax = intl.formatMessage({
        id: "page.home.modal_ordering_department_newmail_error_max",
    });
    const errorMailNumberPattern = intl.formatMessage({
        id: "page.home.modal_ordering_department_newmail_error_pattern",
    });

    const {
        register,
        unregister,
        handleSubmit,
        control,
        watch,
        formState: { isDirty, isValid, errors },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            name: "",
            location: "",
            state: "",
            fullName: "",
            mail: "УкрПочта",
            mailNumber: "",
            postal: "",
        },
    });

    const type = watch("mail");
    const handleShowAddInfo = () => {
        setShowAddInfo((prev) => !prev);
    };
    useEffect(() => {
        if (showAddInfo) {
            register("location");
            register("state");
            register("fullName");
            register("mailNumber");
            register("postal");
        } else if (!showAddInfo) {
            unregister("location");
            unregister("state");
            unregister("fullName");
            unregister("mailNumber");
            unregister("postal");
        }
    }, [register, unregister, showAddInfo]);
    useEffect(() => {
        if (selectMail) {
            register("mailNumber");
            unregister("postal");
        } else if (!selectMail) {
            register("postal");
            unregister("mailNumber");
        }
    }, [register, unregister, selectMail]);

    // const onSubmit = (data) => {
    //     console.log(data);
    // if (isNaN(data['mailNewNumber'])) {
    //     console.log("TRUE")
    //     data['mailNewNumber'] = "Отсутствует",
    //         console.log({
    //             ...data,

    //         })

    // }
    // else {
    //     console.log(data)
    // }
    // };
    const handleValidate = (value) => {
        const isValid = isValidPhoneNumber(value);
        const isPossible = isPossiblePhoneNumber(value);
        return isValid, isPossible;
    };
    return (
        <>
            <h3 className={s.cart__orderTitle}>
                <FormattedMessage id="page.home.modal_ordering_title" />
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className={s.cart__form}>
                <label className={s.cart__form_label} htmlFor="value">
                    <FormattedMessage id="page.home.modal_ordering_name" />
                </label>

                <div className={s.cart__form_inputWrap}>
                    {errors.name && errors.name.type === "required" && (
                        <span className={s.cart__form_error}>
                            <FormattedMessage id="page.home.modal_ordering_error_required" />
                        </span>
                    )}
                    {errors.name && errors.name.type !== "required" && (
                        <span className={s.cart__form_error}>{errors.name.message}</span>
                    )}
                    <input
                        className={s.cart__form_input}
                        placeholder={placeholderName}
                        type="text"
                        id="name"
                        required={showAddInfo}
                        {...register("name", {
                            minLength: {
                                value: 2,
                                message: (
                                    <FormattedMessage id="page.home.modal_ordering_name_error_min" />
                                ),
                            },
                            maxLength: {
                                value: 40,
                                message: errorNameMaxLength,
                            },
                            pattern: {
                                value: /^[-A-Za-zА-Яа-яґҐЁёІіЇїЄє'’ʼ\s*-]{2,40}$/,
                                message: errorNamePattern,
                            },
                            required: showAddInfo,
                        })}
                    />
                </div>
                <label className={s.cart__form_label} htmlFor="phone">
                    <FormattedMessage id="page.home.modal_ordering_phone" />
                </label>

                <div className={s.cart__phone}>
                    {errors.phone && errors.phone.type === "required" && (
                        <span className={s.cart__form_error}>
                            <FormattedMessage id="page.home.modal_ordering_error_required" />
                        </span>
                    )}
                    {errors["phone"] && errors.phone.type !== "required" && (
                        <span className={s.cart__form_error}>
                            <FormattedMessage id="page.home.modal_ordering_phone_error" />
                        </span>
                    )}
                    <PhoneInputWithCountry
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
                        limitMaxLength={true}
                        rules={{
                            required: true,
                            validate: (value) => handleValidate(value),
                        }}
                        error={
                            value
                                ? isValidPhoneNumber(value)
                                    ? undefined
                                    : "Invalid phone number"
                                : "Phone number required"
                        }
                    />
                </div>
                <div className={s.cart__form_checkboxWrap}>
                    <label className={s.cart__form_checkLabel} htmlFor="phone">
                        <FormattedMessage id="page.home.modal_ordering_is_call" />
                    </label>
                    <FormControlLabel
                        control={
                            <Checkbox
                                className={s.cart__form_checkbox}
                                checked={showAddInfo}
                                onChange={handleShowAddInfo}
                                sx={{
                                    color: "#d2ba40",
                                    "&.Mui-checked": {
                                        color: "#d2ba40",
                                    },
                                }}
                            />
                        }
                    />
                </div>
                {showAddInfo && (
                    <>
                        <label className={s.cart__form_label} htmlFor="mail">
                            <FormattedMessage id="page.home.modal_ordering_mail" />
                        </label>
                        <div className={s.cart__form_radioWrap}>
                            <Controller
                                name={"mail"}
                                control={control}
                                render={({ field }) => (
                                    <FormControl fullWidth>
                                        <RadioGroup
                                            row
                                            onChange={(event, value) => {
                                                field.onChange(value);
                                                if (value === "Новая почта") {
                                                    setSelectMail(true);
                                                }
                                                if (value === "УкрПочта") {
                                                    setSelectMail(false);
                                                }
                                            }}
                                            value={field.value}
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            className={s.cart__radio}
                                            sx={{
                                                "& .MuiFormControlLabel-root": {
                                                    alignItems: "end",
                                                },
                                            }}
                                        >
                                            <FormControlLabel
                                                {...register("mail")}
                                                value={"УкрПочта"}
                                                control={
                                                    <Radio
                                                        sx={{
                                                            color: "#333",
                                                            "&.Mui-checked": {
                                                                color: "#333",
                                                            },
                                                        }}
                                                    />
                                                }
                                                label={<UkrPoshta />}
                                            />
                                            <FormControlLabel
                                                {...register("mail")}
                                                className={s.cart__mail}
                                                value="Новая почта"
                                                control={
                                                    <Radio
                                                        sx={{
                                                            color: "#333",
                                                            "&.Mui-checked": {
                                                                color: "#333",
                                                            },
                                                        }}
                                                    />
                                                }
                                                label={<NovaPoshta />}
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                )}
                            />
                        </div>

                        <label className={s.cart__form_label} htmlFor="fullName">
                            <FormattedMessage id="page.home.modal_ordering_fullname" />
                        </label>

                        <div className={s.cart__form_inputWrap}>
                            {errors.fullName && errors.fullName.type === "required" && (
                                <span className={s.cart__form_error}>
                                    <FormattedMessage id="page.home.modal_ordering_error_required" />
                                </span>
                            )}
                            {errors.fullName && errors.fullName.type !== "required" && (
                                <span className={s.cart__form_error}>
                                    {errors.fullName.message}
                                </span>
                            )}

                            <input
                                className={s.cart__form_input}
                                placeholder={placeholderFullName}
                                type="text"
                                id="fullName"
                                name="fullName"
                                required={showAddInfo}
                                {...register("fullName", {
                                    minLength: { value: 10, message: errorFullNameMinLength },
                                    maxLength: { value: 120, message: errorFullNameMaxLength },
                                    pattern: {
                                        value: /^[-A-Za-zА-Яа-яґҐЁёІіЇїЄє'’ʼ\s*-]{10,120}$/,
                                        message: errorFullNamePattern,
                                    },
                                    required: showAddInfo,
                                })}
                            />
                        </div>
                        <label className={s.cart__form_label} htmlFor="city">
                            <FormattedMessage id="page.home.modal_ordering_city" />
                        </label>

                        <div className={s.cart__form_inputWrap}>
                            {errors.location && errors.location.type === "required" && (
                                <span className={s.cart__form_error}>
                                    <FormattedMessage id="page.home.modal_ordering_error_required" />
                                </span>
                            )}
                            {errors.location && errors.location.type !== "required" && (
                                <span className={s.cart__form_error}>
                                    {errors.location.message}
                                </span>
                            )}
                            <input
                                className={s.cart__form_input}
                                placeholder={placeholderLocation}
                                type="text"
                                required={showAddInfo}
                                name="city"
                                id="city"
                                {...register("location", {
                                    minLength: {
                                        value: 2,
                                        message: (
                                            <FormattedMessage id="page.home.modal_ordering_city_error_min" />
                                        ),
                                    },
                                    maxLength: { value: 20, message: errorLocationMaxLength },
                                    pattern: {
                                        value: /^[-A-Za-zА-Яа-яґҐЁёІіЇїЄє'’ʼ\s*-]{2,20}$/,
                                        message: errorLocationPattern,
                                    },
                                    required: showAddInfo,
                                })}
                            />
                        </div>
                        <label className={s.cart__form_label} htmlFor="state">
                            <FormattedMessage id="page.home.modal_ordering_region" />
                        </label>

                        <div className={s.cart__form_inputWrap}>
                            {errors.state && errors.state.type === "required" && (
                                <span className={s.cart__form_error}>
                                    <FormattedMessage id="page.home.modal_ordering_error_required" />
                                </span>
                            )}
                            {errors.state && errors.state.type !== "required" && (
                                <span className={s.cart__form_error}>
                                    {errors.state.message}
                                </span>
                            )}
                            <input
                                className={s.cart__form_input}
                                placeholder={placeholderState}
                                type="text"
                                required={showAddInfo}
                                name="state"
                                id="state"
                                {...register("state", {
                                    minLength: { value: 4, message: errorStateMinLength },
                                    maxLength: { value: 60, message: errorStateMaxLength },
                                    pattern: {
                                        value: /^[-A-Za-zА-Яа-яґҐЁёІіЇїЄє'’ʼ\s*-]{4,60}$/,
                                        message: errorRegionPattern,
                                    },
                                    required: showAddInfo,
                                })}
                            />
                        </div>

                        <>
                            {type === "УкрПочта" && (
                                <>
                                    {" "}
                                    <label className={s.cart__form_label} htmlFor="postal">
                                        <FormattedMessage id="page.home.modal_ordering_postal" />
                                    </label>
                                    <div className={s.cart__form_inputWrap}>
                                        {errors.postal && errors.postal.type === "required" && (
                                            <span className={s.cart__form_error}>
                                                <FormattedMessage id="page.home.modal_ordering_error_required" />
                                            </span>
                                        )}
                                        {errors.postal && errors.postal.type !== "required" && (
                                            <span className={s.cart__form_error}>
                                                {errors.postal.message}
                                            </span>
                                        )}
                                        <input
                                            className={s.cart__form_input}
                                            placeholder={"61032"}
                                            id="postal"
                                            name="postal"
                                            type="text"
                                            required={showAddInfo}
                                            {...register("postal", {
                                                minLength: {
                                                    value: 5,
                                                    message: errorPostalPattern,
                                                },
                                                maxLength: {
                                                    value: 5,
                                                    message: errorPostalPattern,
                                                },
                                                pattern: {
                                                    value: /^[0-9]{5}$/,
                                                    message: errorPostalPattern,
                                                },
                                                required: showAddInfo,
                                            })}
                                        />
                                    </div>
                                </>
                            )}
                            {type === "Новая почта" && (
                                <>
                                    {" "}
                                    <label className={s.cart__form_label} htmlFor="mailNumber">
                                        <FormattedMessage id="page.home.modal_ordering_department_newmail" />
                                    </label>
                                    <div className={s.cart__form_inputWrap}>
                                        {errors.mailNumber &&
                                            errors.mailNumber.type === "required" && (
                                                <span className={s.cart__form_error}>
                                                    <FormattedMessage id="page.home.modal_ordering_error_required" />
                                                </span>
                                            )}
                                        {errors.mailNumber &&
                                            errors.mailNumber.type !== "required" && (
                                                <span className={s.cart__form_error}>
                                                    {errors.mailNumber.message}
                                                </span>
                                            )}
                                        <input
                                            className={s.cart__form_input}
                                            placeholder={"100"}
                                            id="mailNumber"
                                            name="mailNumber"
                                            type="number"
                                            required={showAddInfo}
                                            {...register("mailNumber", {
                                                min: { value: 1, message: errorMailNumberMin },
                                                max: { value: 999, message: errorMailNumberMax },
                                                pattern: {
                                                    value: "[0-9]{0,3}",
                                                    message: errorMailNumberPattern,
                                                },
                                                required: showAddInfo,
                                            })}
                                        />
                                    </div>
                                </>
                            )}
                        </>
                    </>
                )}

                <Button
                    style={{
                        margin: "auto",
                    }}
                    type={"submit"}
                    disabled={
                        (!(value && isPossiblePhoneNumber(value)) &&
                            !(value && isValidPhoneNumber(value))) ||
                        !value ||
                        !isDirty ||
                        !isValid
                    }
                >
                    <FormattedMessage id="page.home.modal_button_order" />
                </Button>
            </form>
        </>
    );
}
