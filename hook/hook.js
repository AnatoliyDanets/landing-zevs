import { useEffect, useState } from "react";

const useFormattedDate = (date) => {
    const [formattedDate, setFormattedDate] = useState(null);

    useEffect(
        () => setFormattedDate(new Date(date - 10800000).toLocaleDateString()),
        []
    );

    return formattedDate;
};

export default useFormattedDate;