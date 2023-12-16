import { useEffect, useState } from "react";


const useFormattedDate = (date, locale) => {
    const [formattedDate, setFormattedDate] = useState("...");

    useEffect(
        () => setFormattedDate(new Date(date).toLocaleDateString(locale)),
        []
    );

    return formattedDate;
};

export default useFormattedDate